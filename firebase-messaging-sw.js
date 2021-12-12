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
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
      messaging.getToken({vapidKey: 'YOUR_VAPID_KEY', serviceWorkerRegistration : registration })
        .then((currentToken) => {
          if (currentToken) {
            console.log('current token for client: ', currentToken);
  
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
          } else {
            console.log('No registration token available. Request permission to generate one.');
  
            // shows on the UI that permission is required 
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // catch error while creating client token
        });  
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:"  , err );
    }); 
  } 