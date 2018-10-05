import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          console.log('User created');
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }
}
