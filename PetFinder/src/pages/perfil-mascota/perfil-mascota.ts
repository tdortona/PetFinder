import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FotosMascotaPage } from '../fotos-mascota/fotos-mascota';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Mascota } from '../../app/models/Mascota';
import { AlertController, LoadingController } from 'ionic-angular';

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
  idMascota: number;
  nombre: string;
  descripcionRaza: string;
  avatar: string;
  perdida: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicioProvider,
    public alertCtrl: AlertController) {
    this.idMascota = this.navParams.get("idMascota");

      this.service.traerMascota(this.idMascota)
      .subscribe((result) => { 
          let mascotaResult = result as Mascota;
          this.nombre = mascotaResult.nombre;
          this.descripcionRaza = mascotaResult.descripcionRaza;
          this.idMascota = mascotaResult.idMascota;
          this.perdida = mascotaResult.perdida;
          this.avatar = mascotaResult.avatar;
          console.log(result);
      }, (error) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilMascotaPage');
  }

  IrAFotos(idMascota: number){
    this.navCtrl.push(FotosMascotaPage, {
      idMascota: idMascota
    })
  }

  showAlertPerdido(idMascota: number) {
    const alert = this.alertCtrl.create({
      title: '¿Queres reportarlo perdido?',
      subTitle: 'Se iniciara la busqueda de tu mascota',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.service.reportarPerdido(idMascota).subscribe((result) => {
            console.log(result);
            this.perdida = true;
          }, (error) => {
            console.log(error);
          });
        }
      },{
        text: 'No',
        handler: () => {
        }
      }]
    });
    alert.present();
  }
}
