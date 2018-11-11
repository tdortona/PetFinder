import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MisMascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mis-mascotas',
  templateUrl: 'mis-mascotas.html',
})
export class MisMascotasPage {
  mascota: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascota.push(
      {Nombre: "titan", FotoPerfil: "..\\..\\assets\\img\\fotos-titan\\titan-1.jpeg"},
      {Nombre: "francisco", FotoPerfil: "..\\..\\assets\\img\\fotos-francisco\\francisco-1.jpeg"})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisMascotasPage');
  }

  irAPerfil(){
    
  }


}
