import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UserData } from '../../app/models/UserData';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  fbUser: UserData = new UserData();
  goUser: UserData = new UserData();

  constructor(public nav: NavController,
              public forgotCtrl: AlertController,
              public menu: MenuController,
              public toastCtrl: ToastController,
              private fb: Facebook,
              private googlePlus: GooglePlus,
              private storage: Storage,
              private http: HttpClient) {
    this.menu.swipeEnable(false);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HelloIonicPage);
  }


  //Facebook
  loginFb() {
    this.fb.login(['public_profile', 'email'])
           .then((res: FacebookLoginResponse) => {
              
              if(res.status === 'connected') {
                this.storage.set('UserImg', 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square');
                this.getFbData(res.authResponse.accessToken);
              }
              else {
                alert("Error en login con Facebook");
              }
              console.log('Logged into Facebook!', res);
              this.nav.setRoot(HelloIonicPage);
            })
           .catch(e => console.log('Error logging into Facebook', e));
  }

  getFbData(access_token: string) {
    let url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
    this.http.get(url).subscribe(data => {
      this.fbUser = data as UserData;
      console.log(this.fbUser);
      this.storage.set('UserName', this.fbUser.name);
    })
  }

  loginGoogle(){
    this.googlePlus.login({})
    .then((res) => {
      console.log(res);
      this.goUser.email = res.email;
      this.goUser.first_name = res.givenName;
      this.goUser.id = res.userId;
      this.goUser.last_name = res.familyName;
      this.goUser.name = res.displayName;
      this.storage.set('UserName', this.goUser.name);
      this.nav.setRoot(HelloIonicPage);
    })
    .catch((err) => {
      console.error(err);
    });
  }

}
