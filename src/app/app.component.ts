import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyBIZRmun7gYQW0JsTYvLDqgkAAnr3piFTs',
    authDomain: 'collection-383b6.firebaseapp.com',
    databaseURL: 'https://collection-383b6.firebaseio.com',
    projectId: 'collection-383b6',
    storageBucket: 'gs://collection-383b6.appspot.com',
    messagingSenderId: '175153448811',
    appId: '1:175153448811:web:0466849ffd79d5b8'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }

}
