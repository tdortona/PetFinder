import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
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
  claseEntrenada: boolean;

  constructor(
    public navCtrl: NavController, 
    private service: ServicioProvider,
    private camera: Camera,
    public storage: Storage,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    
    this.idMascota = navParams.get("idMascota");
    this.mascota = navParams.get("nombreMascota");
    this.entrenado = navParams.get("entrenado");
    this.claseEntrenada = navParams.get("claseEntrenada");
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

  entrenarIA() {
    let loader = this.loadingCtrl.create({
      content: "Entrenando...",
      dismissOnPageChange: true
    });
    loader.present();
    let imageUris = [];
    this.fotos.forEach(function (value) {
      imageUris.push('http://criaderononthue.com/img/canfind/controllers/resources/Img/Mascotas/' + value + '.jpg');
    });
    this.service.crearClaseWatson(this.idMascota, this.mascota, imageUris)
    .subscribe((result) => {
      console.log(result);
      loader.dismiss();
      this.showAlertExito();
    }, (error) => {
      console.log(error);
      loader.dismiss();
      this.showAlertError();
    });
  }

  showAlertExito() {
    const alert = this.alertCtrl.create({
      title: '¡Tu mascota ya está entrenada!',
      subTitle: 'Ahora podremos encontrarla con facilidad.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Ocurrió un error.',
      subTitle: '',
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