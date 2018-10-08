import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-encontre',
  templateUrl: 'encontre.html',
})
export class EncontrePage {
  public base64Image: string = "";
  constructor(private camera: Camera, public domSanitizer: DomSanitizer) {
    
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

}
