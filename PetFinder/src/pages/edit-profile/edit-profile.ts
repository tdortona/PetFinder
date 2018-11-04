import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  userName: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastC: ToastController) {
  }

  submitForm() {
    console.log(this.userName);
    const toast = this.toastC.create({
      message: "Hola " + this.userName, 
      duration: 1000
    });
    toast.present();
  }

}
