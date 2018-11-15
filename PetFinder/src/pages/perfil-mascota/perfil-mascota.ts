import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FotosMascotaPage } from '../fotos-mascota/fotos-mascota';

/**
 * Generated class for the PerfilMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil-mascota',
  templateUrl: 'perfil-mascota.html',
})
export class PerfilMascotaPage {
  Nombre: string;
  FotoPerfil: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Nombre = navParams.get("nombre"),
    this.FotoPerfil = 'assets\\img\\fotos-'+this.Nombre+'\\'+this.Nombre+'-1.jpeg'

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilMascotaPage');
  }

  IrAFotos(Nombre: string){
    this.navCtrl.push(FotosMascotaPage, {
      nombre: Nombre
    })
  }

}
