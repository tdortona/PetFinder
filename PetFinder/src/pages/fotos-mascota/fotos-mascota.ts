import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FotosMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fotos-mascota',
  templateUrl: 'fotos-mascota.html',
})
export class FotosMascotaPage {
  mascota: string;
  fotos: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mascota = navParams.get("nombre"),
    this.fotos = [
    'assets\\img\\fotos-'+this.mascota+'\\'+this.mascota+'-1.jpeg',
    'assets\\img\\fotos-'+this.mascota+'\\'+this.mascota+'-2.jpeg'
    ]
  }
}