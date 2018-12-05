import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { GeoResult } from '../../app/models/GeoResult/GeoResult';

@Component({
  selector: 'page-confirmar-foto',
  templateUrl: 'confirmar-foto.html',
})
export class ConfirmarFotoPage {
  base64Image: string;
  location: string;
  direccion: string = "";
  direccionError: string = "";
  localizacionResult: GeoResult;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public domSanitizer: DomSanitizer,
              private service: ServicioProvider,
              public storage: Storage,
              public geolocation: Geolocation,
              public loadingCtrl: LoadingController) {
    this.base64Image = navParams.get('data');

  }

  ionViewDidLoad() {
    this.getPosition();
  }

  confirmarFoto() {
    this.storage.get("idUsuarioLogueado").then((data)=> {
      this.service.enviarFotoEncontradoAWatson(this.base64Image, data, this.direccion);
    });
  }

  getPosition() {
    let loader = this.loadingCtrl.create({
      content: "Localizando...",
      dismissOnPageChange: true
    });
    loader.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = resp.coords.latitude + "," + resp.coords.longitude;
      this.direccionError = "";
      this.getLocation(this.location)
      .subscribe((result) => {
        console.log(result);
        this.localizacionResult = result as GeoResult;
        console.log(this.localizacionResult);
        if(this.localizacionResult.status == "OK") {
          this.direccion = this.localizacionResult.results[0].address_components[1].long_name + " " + this.localizacionResult.results[0].address_components[0].long_name + ", " + this.localizacionResult.results[0].address_components[2].long_name;
        }
        else {
          this.direccion = "No se pudo obtener la localización.";
        }
        loader.dismiss();
      }, (error) => {
        console.log(error);
        loader.dismiss();
      });
     }).catch((error) => {
       this.direccionError = "Por favor, activá la ubicación del dispositivo.";
       console.log('Error getting location', error);
       loader.dismiss();
     });
  }

  cancelarFoto() {
    this.navCtrl.pop();
  }

  getLocation(pos: string) {
    return this.service.getLocation(pos);
  }
}
