Step:

1.- Init app and compile it.
  $ ionic start ionicPush
  $ cd ionicPush
  $ npm run build

2.- Enable Capacitor and init it. Add Android.
  $ ionic integrations enable capacitor # equivalent to npm i --save @capacitor/cli @capacitor/core
  $ npx cap init ionicPush
  $ npx cap add android

3.- Create Android project in Firebase (console.firebase.google.com), then:
  $ mkdir notifications-functions
  $ cd notifications-functions
  $ npm install -g firebase-tools # if you have firebase tool skip this command
  $ firebase login
  $ firebase init functions # I choose Javascript for functions
  $ npm i express cors
  $ code functions/index.js