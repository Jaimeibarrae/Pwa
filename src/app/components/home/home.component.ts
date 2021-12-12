import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './../../services/push-notification.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  

  constructor() {
   
  }

  ngOnInit(): void {
 
  }

}
