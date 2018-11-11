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
  mascota: string = 'Titan';
  fotos: string[] = [
    '..\\..\\assets\\img\\fotos-titan\\titan-1.jpeg',
    '..\\..\\assets\\img\\fotos-titan\\titan-2.jpeg'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}