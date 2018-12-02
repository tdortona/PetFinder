import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-confirmar-foto',
  templateUrl: 'confirmar-foto.html',
})
export class ConfirmarFotoPage {
  base64Image: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public domSanitizer: DomSanitizer,
              private service: ServicioProvider,
              public storage: Storage) {
    this.base64Image = navParams.get('data');
  }

  confirmarFoto() {
    this.storage.get("idUsuarioLogueado").then((data)=> {
      this.service.enviarFotoEncontradoAWatson(this.base64Image, data);
    });
  }

  cancelarFoto() {
    this.navCtrl.pop();
  }
}
