import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { ConfirmarFotoPage } from '../confirmar-foto/confirmar-foto';

@Component({
  selector: 'page-encontre',
  templateUrl: 'encontre.html',
})
export class EncontrePage {
  public base64Image: string = "";
  constructor(private camera: Camera, 
              public nav: NavController) {
    
  }

  takePicture() {
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
     this.nav.push(ConfirmarFotoPage, {
        data: this.base64Image
     });
    }, (err) => {
     // Handle error
    });
  }

  //Slide

  slides = [
    {
      title: "Frente",
      image: 'assets/img/frente.jpg'
    },
    {
      title: "Costado",
      image: 'assets/img/costado.jpg'
    },
    {
      title: "Arriba",
      image: 'assets/img/arriba.jpg'
    },
    {
      title: "Atras",
      image: 'assets/img/atras.jpg'
    },
  ];
}
