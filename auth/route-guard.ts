import {CanActivate} from "@angular/router";
import *as firebase from 'firebase';

export class RouteGuard implements CanActivate {
    canActivate() {
        // IF USER IS LOGGED IN, RETURN TRUE, ELSE RETURN FALSE
        if(firebase.auth().currentUser)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}