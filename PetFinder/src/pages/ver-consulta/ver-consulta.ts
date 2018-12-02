import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { ResultadoBusqueda } from '../../app/models/ResultadoBusqueda';
import { ContactarUsuario } from '../../app/models/ContactarUsuario';

/**
 * Generated class for the VerConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ver-consulta',
  templateUrl: 'ver-consulta.html',
})
export class VerConsultaPage {

  filtroScore: number = 0;
  filtroNombre: string = "";
  filtroRaza: string = "";
  chkNombre: boolean = false;
  chkRaza: boolean = false;
  resultados: Array<ResultadoBusqueda> = [];
  usuarioContacto: ContactarUsuario;
  consultaRealizada: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public servicio: ServicioProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.filtroNombre = this.navParams.get("nombre");
  }

  consultar() {
    if(this.chkNombre) {
      this.filtroNombre = this.navParams.get("nombre");
    }
    else {
      this.filtroNombre = "";
    }

    if(this.chkRaza) {
      this.filtroRaza = this.navParams.get("raza");
    }
    else {
      this.filtroRaza = "";
    }

    this.servicio.verConsulta(this.filtroRaza, this.filtroNombre, this.filtroScore)
    .subscribe((result) => {
      console.log(result);
      this.resultados = result as Array<ResultadoBusqueda>;
    }, (error) => {
      console.log(error);
      this.resultados = [];
    });

    this.consultaRealizada = true;
  }

  contactarUsuario(idUsuario: number) {
    this.servicio.contactarUsuario(idUsuario)
    .subscribe((result) => {
      this.usuarioContacto = result as ContactarUsuario;
      this.showAlertContacto(this.usuarioContacto.nombre, this.usuarioContacto.email, this.usuarioContacto.telefonoContacto);
    }, (error) => {
      console.log(error);
    });
  }

  showAlertContacto(nombre: string, email: string, telefonoContacto: string) {
    const alert = this.alertCtrl.create({
      title: 'Foto enviada por ' + nombre,
      subTitle: 'Podes contactarlo mediante<br>Email: ' + email + '<br>Telefono: ' + telefonoContacto,
      buttons: [{
        text: 'OK',
        handler: () => {
        }
      }]
    });
    alert.present();
  }
}
