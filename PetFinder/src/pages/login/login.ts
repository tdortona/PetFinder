import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UserFbData } from '../../app/models/UserFbData';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  fbUser: UserFbData = new UserFbData();

  constructor(public nav: NavController,
              public forgotCtrl: AlertController,
              public menu: MenuController,
              public toastCtrl: ToastController,
              private fb: Facebook,
              private storage: Storage,
              private http: HttpClient) {
    this.menu.swipeEnable(false);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HelloIonicPage);
  }

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
      this.fbUser = data as UserFbData;
      console.log(this.fbUser);
      this.storage.set('UserName', this.fbUser.name);
    })
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
