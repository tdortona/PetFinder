import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  private URL_DEV: string  = "http://localhost:62605";
  // private URL_PROD: string  = "";
  imageFileName: any;

  constructor(public http: HttpClient,
              private transfer: FileTransfer,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
    
  }

  pegarleAWatson() {
    this.http.get(this.URL_DEV + '/api/values', )
             .subscribe((result) => {
                debugger;
                console.log(result);
                console.log("Le pegamos a watson");
             },
             (error) =>{
                console.error(error);
             });
  }

  enviarFotoEncontradoAWatson(imageURI: string) {
    debugger;
    // this.http.post(this.URL_DEV + '/api/ImagenMascota/FotoEncontrado' )
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      httpMethod: 'POST',
      headers: {
        Connection: "close"
     }
    }
  
    fileTransfer.upload(imageURI, 'http://190.55.164.170:62605/api/ImagenMascota/FotoEncontrado', options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        // this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        // this.presentToast("Image uploaded successfully");
    }, (err) => {
        console.log(err);
        loader.dismiss();
        // this.presentToast(err);
    });
  }

}
