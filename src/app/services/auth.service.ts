import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          console.log('user created');
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          //console.log(response);
          console.log('user signed in');
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }
}
