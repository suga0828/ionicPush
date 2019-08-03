import { Component, OnInit } from '@angular/core';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  token: string = '';

  constructor() {}

  ngOnInit() {
    // On succcess registration, we should be able to receive notifications
    Plugins.PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      this.token = token.value;
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', 
      (error: any) => {
        console.error('Error on registration: ' + JSON.stringify(error));
      }
    );
  
    // Show us the notification payload if the app is open on our device
    Plugins.PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      console.log('Push received: ' + JSON.stringify(notification));
    });

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed', 
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
  
  requestPermission() {
    Plugins.PushNotifications.register()
      .then( () => {

      });
  }
}
