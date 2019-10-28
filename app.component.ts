import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project1';

ngOnInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyC9ErIyk_n9V7gAy-Bos0B71WAo3fB3ZnU",
    authDomain: "socialmediawebapp-dcb8a.firebaseapp.com",
    databaseURL: "https://socialmediawebapp-dcb8a.firebaseio.com",
    projectId: "socialmediawebapp-dcb8a",
    storageBucket: "socialmediawebapp-dcb8a.appspot.com",
    messagingSenderId: "467378891875",
    appId: "1:467378891875:web:9975778df7c5310ca5dc56",
    measurementId: "G-RZ3WVD28N5"
  };
  firebase.initializeApp(firebaseConfig);
 }
}
