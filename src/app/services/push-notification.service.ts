import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MessagePayload } from "./notification-interfaces";

@Injectable({
  providedIn: 'root'
})

export class PushNotificationService{
  
  messagingFirebase: firebase.messaging.Messaging | undefined;

  constructor(){
    firebase.initializeApp(environment.configFirebase);
    this.messagingFirebase= firebase.messaging();
  }

  requestPermission=()=>{
    return new Promise(async(resolve,reject)=>{
      const permiss = await Notification.requestPermission();
      if(permiss=="granted"){
        const tokenFirebase= await this.messagingFirebase?.getToken();
        resolve(tokenFirebase);
      }else{
        reject(new Error("No se otorgaron los permisos"))
      }
    })
  }

  private messagingObservable = new Observable<MessagePayload>( observe=>{
    this.messagingFirebase?.onMessage(payload =>{
      observe.next(payload)
    })
  })

  receiveMessage(){
    return this.messagingObservable;
  }

}