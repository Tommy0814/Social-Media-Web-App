import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import * as firebase from 'firebase';
import { MyFireService } from 'src/app/shared/myfire.service';
import { UserService } from "../../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notifier: NotificationService,
              private myFire: MyFireService,
              private userService: UserService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userData => {
      if (userData.emailVerified) {
        return this.myFire.getUserFromDatabase(userData.uid);
      }
      else {
        const message = 'Your Email is Not Yet Verified';
        this.notifier.display('error', message);
        firebase.auth().signOut();
      }
    })
    .then(userDataFromDatabase => {
      if (userDataFromDatabase) {
        this.userService.set(userDataFromDatabase);
        this.router.navigate(['allposts']);
      }
    })
    .catch(err => {
      this.notifier.display('error', err.message);
    });
  }

}
