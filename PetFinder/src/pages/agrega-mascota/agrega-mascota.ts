import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MascotaNueva } from '../../app/models/MascotaNueva';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { MisMascotasPage } from '../mis-mascotas/mis-mascotas';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Raza } from '../../app/models/Raza';


/**
 * Generated class for the AgregaMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agrega-mascota',
  templateUrl: 'agrega-mascota.html',
})
export class AgregaMascotaPage {

  mascota: MascotaNueva = new MascotaNueva;
  idUsuarioLogueado: number;
  razas: Raza[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicioProvider,
    public storage: Storage,
    public alertCtrl: AlertController) {

      this.service.traerRazas()
        .subscribe((result) => { 
            this.razas = result as Array<Raza>;
            console.log(result);
        }, (error) => {
          console.log(error);
        });

  }

  logForm() {
    this.storage.get("idUsuarioLogueado").then((data)=>{
      this.idUsuarioLogueado = data;
      this.mascota.idUsuario = this.idUsuarioLogueado;

      this.service.agregaMascota(this.mascota)
      .subscribe((result) => {
          console.log(result);
          const alert = this.alertCtrl.create({
            title: 'Gracias por registrar a '+this.mascota.nombre+'!',
            subTitle: 'Agregá fotos en el perfil de '+this.mascota.nombre+' para poder reconocerla',
            buttons: [{
              text: 'Ver mis mascotas',
              handler: () => {
                this.navCtrl.push(MisMascotasPage)  
              }
            }]
          });
          alert.present();
      }, (error) => {
          const alert = this.alertCtrl.create({
            title: 'Ups!',
            subTitle: 'Hubo un problema, intentalo más tarde.',
            buttons: [{
              text: 'Ok',
              handler: () => {
                this.navCtrl.push(MisMascotasPage)  
              }
            }]
          });
          console.log(error);
          alert.present();
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregaMascotaPage');
  }
}
