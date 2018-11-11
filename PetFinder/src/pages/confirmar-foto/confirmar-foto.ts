import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ConfirmarFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirmar-foto',
  templateUrl: 'confirmar-foto.html',
})
export class ConfirmarFotoPage {
  base64Image: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public domSanitizer: DomSanitizer) {
    debugger;
    this.base64Image = navParams.get('data');
  }

  confirmarFoto() {

  }

  cancelarFoto() {
    this.navCtrl.pop();
  }
}
