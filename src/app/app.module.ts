import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PushNotificationService } from './services/push-notification.service';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
