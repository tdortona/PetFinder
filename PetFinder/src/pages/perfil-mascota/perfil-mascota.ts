import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FotosMascotaPage } from '../fotos-mascota/fotos-mascota';
import { VerConsultaPage } from '../ver-consulta/ver-consulta';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Mascota } from '../../app/models/Mascota';
import { AlertController } from 'ionic-angular';

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
  entrenado: number;
  claseEntrenada: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicioProvider,
    public alertCtrl: AlertController) {

  }

  ionViewWillEnter() {
    this.idMascota = this.navParams.get("idMascota");

    this.service.traerMascota(this.idMascota)
    .subscribe((result) => { 
        let mascotaResult = result as Mascota;
        this.nombre = mascotaResult.nombre;
        this.descripcionRaza = mascotaResult.descripcionRaza;
        this.idMascota = mascotaResult.idMascota;
        this.perdida = mascotaResult.perdida;
        this.avatar = mascotaResult.avatar;
        this.entrenado = mascotaResult.entrenado;
        this.claseEntrenada = mascotaResult.claseEntrenada;
        console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  IrAFotos(idMascota: number){
    this.navCtrl.push(FotosMascotaPage, {
      idMascota: idMascota,
      nombreMascota: this.nombre,
      entrenado: this.entrenado,
      claseEntrenada: this.claseEntrenada
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
  
  consultar() {
    this.navCtrl.push(VerConsultaPage, {
      nombre: this.nombre,
      raza: "canichetoyclass"
    });
  }

  showAlertEncontrado(idMascota: number) {
    const alert = this.alertCtrl.create({
      title: '¿Encontraste a tu mascota?',
      subTitle: 'Se cancelará la busqueda actual.',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.service.reportarEncontrada(idMascota).subscribe((result) => {
            console.log(result);
            this.perdida = false;
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
