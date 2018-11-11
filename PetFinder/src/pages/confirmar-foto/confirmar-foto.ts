import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
// import { ServicioProvider } from '../../providers/servicio/servicio';

@Component({
  selector: 'page-confirmar-foto',
  templateUrl: 'confirmar-foto.html',
})
export class ConfirmarFotoPage {
  base64Image: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public domSanitizer: DomSanitizer,
              // private service: ServicioProvider,
              public alertCtrl: AlertController) {
    this.base64Image = navParams.get('data');
  }

  confirmarFoto() {
    // this.service.enviarFotoEncontradoAWatson(this.base64Image);
    this.showAlert();
  }

  cancelarFoto() {
    this.navCtrl.pop();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Gracias por colaborar!',
      subTitle: 'Tu foto fue reportada en CanFind!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }
}
