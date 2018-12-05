import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { GeoResult } from '../../app/models/GeoResult/GeoResult';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

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
              public loadingCtrl: LoadingController,
              private nativeGeocoder: NativeGeocoder) {
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
      this.getLocation(resp.coords.latitude, resp.coords.longitude);
      loader.present();
     }).catch((error) => {
       this.direccionError = "Por favor, activá la ubicación del dispositivo.";
       console.log('Error getting location', error);
       loader.dismiss();
     });
  }

  cancelarFoto() {
    this.navCtrl.pop();
  }

  getLocation(lat: number, lon: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    };
  
    this.nativeGeocoder.reverseGeocode(lat, lon, options)
      .then((result: NativeGeocoderReverseResult[]) =>{
        console.log(JSON.stringify(result[0]));
        this.direccion = result[0].thoroughfare + " " + result[0].subThoroughfare + ", " + result[0].locality;
      })
      .catch((error: any) =>{
        console.log(error);
        this.direccion = "No se pudo obtener la localización.";
      });
  }
}
