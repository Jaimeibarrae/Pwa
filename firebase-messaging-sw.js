importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp(
    {
      apiKey: "AIzaSyDVt7zGsutWPXEuUPYlP_2jwvOUcReEjJ4",
      authDomain: "push-cb753.firebaseapp.com",
      projectId: "push-cb753",
      storageBucket: "push-cb753.appspot.com",
      messagingSenderId: "513676918650",
      appId: "1:513676918650:web:f920c8456ec298443520c3",
      databaseURL:"https://push-cb753-default-rtdb.firebaseio.com/"
      }
)
const messaging= firebase.messaging();
 // Retrieve firebase messaging
// Retrieve firebase messaging

messaging.setBackgroundMessageHandler(function (payload) {
   console.log('setBackgroundMessageHandler background message ', payload);

   const promiseChain = clients
      .matchAll({
          type: "window",
          includeUncontrolled: true
      })
     .then(windowClients => {
          for (let i = 0; i < windowClients.length; i++) {
             const windowClient = windowClients[i];
             windowClient.postMessage(payload);
          }
     })
     .then(() => {
          return self.registration.showNotification("my notification title");
      });
     return promiseChain;
 });
