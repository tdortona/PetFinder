import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UserData } from '../../app/models/UserData';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Usuario } from "../../app/models/Usuario";
import { MisMascotasPage } from "../mis-mascotas/mis-mascotas";

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
