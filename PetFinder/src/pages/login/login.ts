import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UserData } from '../../app/models/UserData';
import { ServicioProvider } from '../../providers/servicio/servicio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  rdUser: UserData = new UserData();

  constructor(public nav: NavController,
              public forgotCtrl: AlertController,
              public menu: MenuController,
              public toastCtrl: ToastController,
              private fb: Facebook,
              private googlePlus: GooglePlus,
              private storage: Storage,
              private http: HttpClient,
              private service: ServicioProvider) {
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
                this.getFbData(res.authResponse.accessToken, res.authResponse.userID);
              }
              else {
                alert("Error en login con Facebook");
              }
              console.log('Logged into Facebook!', res);
              this.nav.setRoot(HelloIonicPage);
            })
           .catch(e => console.log('Error logging into Facebook', e));
  }

  getFbData(access_token: string, userID: string) {
    let url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
    this.http.get(url)
    .subscribe(data => {
      this.rdUser = data as UserData;
      this.rdUser.idRedSocial = 1;
      this.rdUser.avatar = 'https://graph.facebook.com/' + userID + '/picture?type=square';
      console.log(this.rdUser);
      this.storage.set('UserName', this.rdUser.name);
    }, (error) => {
      console.log(error);
    })
  }

  loginGoogle(){
    this.googlePlus.login({})
    .then((res) => {
      console.log(res);
      this.rdUser.email = res.email;
      this.rdUser.first_name = res.givenName;
      this.rdUser.id = res.userId;
      this.rdUser.last_name = res.familyName;
      this.rdUser.name = res.displayName;
      this.rdUser.idRedSocial = 2;
      this.rdUser.avatar = res.imageUrl;
      this.storage.set('UserName', this.rdUser.name);
      this.storage.set('UserImg', this.rdUser.avatar);
      this.service.enviarRdUser(this.rdUser);
      this.nav.setRoot(HelloIonicPage);
      
    })
    .catch((err) => {
      console.error(err);
    });
  }

  enviarRdUser(rdUser: UserData) {
    this.service.enviarRdUser(rdUser);
  }
}
