import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { PerfilMascotaPage } from '../perfil-mascota/perfil-mascota';

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public base64Image: string = "";
  constructor(private camera: Camera,
              private service: ServicioProvider,
              public domSanitizer: DomSanitizer,
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {

  }

  takePicture() {
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = imageData;
    }, (err) => {
      // Handle error
    });
  }

  pegarleAWatson() {
      this.service.pegarleAWatson();
  }

  verPerfilMascota(){
    this.navCtrl.push(PerfilMascotaPage);
  }
}
