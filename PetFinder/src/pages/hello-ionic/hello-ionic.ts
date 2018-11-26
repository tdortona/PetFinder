import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { PerfilMascotaPage } from '../perfil-mascota/perfil-mascota';
import { UserData } from '../../app/models/UserData';
import { Usuario } from '../../app/models/Usuario';

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

  prueba: any = new UserData;
  usuarioAgregado: Usuario = new Usuario;

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

  pruebaPost() {
    this.service.pruebaPost();
  }

  agregarUsuario() {
    this.prueba.email = 'pruebanuevomail@gmail.com';
    this.prueba.first_name = 'Usuario';
    this.prueba.id = 'nosequeid';
    this.prueba.last_name = 'Prueba';
    this.prueba.name = 'ALOHA';
    this.prueba.idRedSocial = 1;
    this.prueba.avatar = 'algo';

    this.service.agregarUsuario(this.prueba)
    .subscribe((result) => {
      this.usuarioAgregado = result as Usuario;
      console.log(result);
    }, (error) => {
      console.log(error);
    });;
  }
}
