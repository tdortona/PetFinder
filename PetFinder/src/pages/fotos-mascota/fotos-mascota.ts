import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FotosMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fotos-mascota',
  templateUrl: 'fotos-mascota.html',
})
export class FotosMascotaPage {
  mascota: string;
  fotos: string[] = [];
  idMascota: number;
  base64Image: string = "";
  entrenado: number;

  constructor(
    public navCtrl: NavController, 
    private service: ServicioProvider,
    private camera: Camera,
    public storage: Storage,
    public navParams: NavParams) {
    
    this.idMascota = navParams.get("idMascota");
    this.mascota = navParams.get("nombreMascota");
    this.entrenado = navParams.get("entrenado");
    this.traerImagenesMascotas(this.idMascota);
  }

  traerImagenesMascotas(idMascota: number){
    this.service.traerImagenMascota(idMascota)
    .subscribe((result) => { 
      this.fotos = result as string[];
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  agregarFotoMascota(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 720,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = imageData;
      this.storage.get("idUsuarioLogueado").then((idUsuario)=> {
        this.service.agregarFotoMascota(this.base64Image, this.idMascota, idUsuario)
        .then((result) => {
          if(result == "ok"){
            this.traerImagenesMascotas(this.idMascota);
          }
        }).catch((err) => {
          console.log(err);
        });
      }); 
    }, (err) => {
      // Handle error
      console.log(err);
    });
    

    
  }
}