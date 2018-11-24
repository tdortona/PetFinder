import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { UserData } from '../../app/models/UserData';

/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  private URL_DEV: string  = "https://localhost:44357/";
  // private URL_PROD: string  = "";
  imageFileName: any;
  pbaPost: UserData = new UserData();

  constructor(public http: HttpClient,
              private transfer: FileTransfer,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
    
  }

  pegarleAWatson() {
    this.http.get(this.URL_DEV + '/api/values')
             .subscribe((result) => {
                console.log(result);
                console.log("Le pegamos a watson");
             },
             (error) =>{
                console.error(error);
             });
  }

  public async enviarFotoEncontradoAWatson(imageURI: string) {
    // this.http.post(this.URL_DEV + '/api/ImagenMascota/FotoEncontrado' )
    let loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: 'image/jpeg',
      httpMethod: 'POST',
      headers: {
        Connection: "close"
     }
    }
  
    return fileTransfer.upload(imageURI, this.URL_DEV + '/api/', options)
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

  public prueba() {
    this.http.get(this.URL_DEV + '/api/Usuario/id1')
    .subscribe((result) => {
      debugger;
      console.log("Todo Bien");
      console.log(result);
    }, (error) => {
      debugger;
      console.log("Todo Mal");
    });
  }

  public enviarRdUser(rdUser: UserData) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.URL_DEV + '/api/Usuario/ValidarUsuario', JSON.stringify(rdUser), {headers: headers})
    .subscribe((result) => {
      debugger;
      console.log("usuario logueado");
      console.log(result);
    }, (error) => {
      debugger;
      console.log("no se pudo loguear");
    });
  }

  public pruebaPost() {
    this.http.post(this.URL_DEV + '/api/Values/Prueba', {"Value":"hola"})
    .subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  public agregarUsuario(data: UserData) {
    return this.http.post(this.URL_DEV + '/api/Usuario/ValidarUsuario', data);
  }

}
