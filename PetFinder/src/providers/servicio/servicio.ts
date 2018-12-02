import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../../app/models/UserData';
import { AlertController, LoadingController } from 'ionic-angular';
import { ResultadoWatson } from '../../app/models/ResultadoWatson';
import { Base64 } from '@ionic-native/base64';
import { App } from "ionic-angular";
import { Usuario } from '../../app/models/Usuario';
import { Storage } from '@ionic/storage';


/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  // private URL_SERVER: string = "http://canfind.herokuapp.com";
  // private URL_SERVER: string = "https://localhost:44357";
  private URL_SERVER: string = "https://localhost:5001";
  // private URL_SERVER: string = "https://192.168.0.8:5001";
  // private URL_SERVER: string = "https://localhost:44357";

  imageFileName: any;
  pbaPost: UserData = new UserData();
  resultadoWatson: ResultadoWatson = new ResultadoWatson();
  usuarioLogueado: Usuario = new Usuario();
 
  constructor(public http: HttpClient,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private base64: Base64,
              public app: App,
              public storage: Storage) {
  }

  pegarleAWatson() {
    this.http.get(this.URL_SERVER + '/api/values')
             .subscribe((result) => {
                console.log(result);
                console.log("Le pegamos a watson");
             },
             (error) =>{
                console.error(error);
             });
  }

  public async enviarFotoEncontradoAWatson(imageURI: string, idUsuario: number) {  
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      dismissOnPageChange: true
    });

    loader.present();
    //para el browser
    this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
      idUsuario: idUsuario,
      imageURI: imageURI,
      localizacion: "prueba"
    })
    .subscribe((response) => {
      loader.dismiss();
      this.resultadoWatson = response as ResultadoWatson;
      if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
        this.showAlertExito(this.resultadoWatson.images[0].classifiers[0].classes[0].class, this.resultadoWatson.images[0].classifiers[0].classes[0].score);
      }
      else {
        this.showAlertError();
      }
    }, (error) => {
      loader.dismiss();
      console.log(error);
    });

    //para el celular
    // this.base64.encodeFile(imageURI).then((base64File: string) => {
    //   base64File = base64File.split(',')[1];
    //   this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
    //     idUsuario: idUsuario,
    //     imageURI: base64File,
    //     localizacion: "prueba"
    //   })
    //   .subscribe((response) => {
    //     loader.dismiss();
    //     this.resultadoWatson = response as ResultadoWatson;
    //     if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
    //       this.showAlertExito(this.resultadoWatson.images[0].classifiers[0].classes[0].class, this.resultadoWatson.images[0].classifiers[0].classes[0].score);
    //     }
    //     else {
    //       this.showAlertError();
    //     }
    //   }, (error) => {
    //     loader.dismiss();
    //     console.log(error);
    //   });
    // }, (err) => {
    //   console.log(err);
    // });
  }

  public prueba() {
    this.http.get(this.URL_SERVER + '/api/Usuario/id1')
    .subscribe((result) => {
      console.log("Todo Bien");
      console.log(result);
    }, (error) => {
      console.log("Todo Mal");
    });
  }

  public enviarRdUser(rdUser: UserData) {
    this.http.post(this.URL_SERVER + '/api/Usuario/ValidarUsuario', rdUser)
    .subscribe((response) => {
      console.log("usuario logueado");
      console.log(response);
      this.usuarioLogueado = response as Usuario;
      this.storage.set('UserName', this.usuarioLogueado.nombre);
      this.storage.set('UserImg', this.usuarioLogueado.avatar);
      this.storage.set('idUsuarioLogueado', this.usuarioLogueado.idUsuario);
    }, (error) => {
      console.log("no se pudo loguear");
    });
  }

  public pruebaPost() {
    this.http.post(this.URL_SERVER + '/api/Values/Prueba', {"Value":"hola"})
    .subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  public agregarUsuario(data: UserData) {
    return this.http.post(this.URL_SERVER + '/api/Usuario/ValidarUsuario', data);
  }
  
  public verConsulta(claseRaza: string, claseNombre: string, score: number) {
    claseRaza = claseRaza == null || claseRaza == "" ? "n|o" : claseRaza;
    claseNombre = claseNombre == null || claseNombre == "" ? "n|o" : claseNombre;

    return this.http.get(this.URL_SERVER + '/api/ConsultasWatson/ConsultarEncontrados/' + claseNombre + '/' + claseRaza + '/' + score);
  }

  public contactarUsuario(idUsuario: number) {
    return this.http.get(this.URL_SERVER + '/api/Usuario/GetUsuarioContacto/' + idUsuario);
  }

  showAlertExito(clase: string, score: number) {
    const alert = this.alertCtrl.create({
      title: '¡Ya recibimos tu foto!',
      subTitle: 'Gracias por colaborar con CanFind.',
      buttons: [{
        text: 'OK',
        handler: () => {
          let nav = this.app.getActiveNav();
          nav.pop();
        }
      }]
    });
    alert.present();
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: '¡Ya recibimos tu foto!',
      subTitle: 'Gracias por colaborar con CanFind.',
      buttons: [{
        text: 'OK',
        handler: () => {
          let nav = this.app.getActiveNav();
          nav.pop();
        }
      }]
    });
    alert.present();
  }

  agregarFotoMascota(imageURI: string){
    let loader = this.loadingCtrl.create({
      content: "Agregando mascota...",
      dismissOnPageChange: true
    });

    loader.present();
    //esto es para el browser
    this.http.post(this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', { imageURI: imageURI })
      .subscribe((response) => {
        loader.dismiss();
        alert(response);

        alert("Esto es la respuesta" + response);
      }, (error) => {
        loader.dismiss();
        console.log("error al enviar al backend");
        alert("error al enviar al backend");
        console.log(error);
      });

      //esto es para el celu
    // this.base64.encodeFile(imageURI).then((base64File: string) => {
    //   base64File = base64File.split(',')[1];
    //   this.http.post(this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', { imageURI: base64File })
    //   .subscribe((response) => {
    //     loader.dismiss();
    //     // this.resultadoWatson = response as ResultadoWatson;
    //     // if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
    //     //   this.showAlertExito(this.resultadoWatson.images[0].classifiers[0].classes[0].class, this.resultadoWatson.images[0].classifiers[0].classes[0].score);
    //     // }
    //     // else {
    //     //   this.showAlertError();
    //     // }

    //     alert("Esto es la respuesta" + response);
    //   }, (error) => {
    //     loader.dismiss();
    //     console.log("error al enviar al backend");
    //     alert("error al enviar al backend");
    //     console.log(error);
    //   });
    // }, (err) => {
    //   console.log(err);
    // });
  }
  
  public traerMascotas(id: number){
    return this.http.get(this.URL_SERVER +'/api/Usuario/TraerMisMascotas/'+id)
  }

  public traerMascota(id: number){
    return this.http.get(this.URL_SERVER +'/api/Mascota/TraerMascota/'+id)
  }

  public reportarPerdido(idMascota: number) {
    return this.http.post(this.URL_SERVER + '/api/Mascota/ReportarPerdida', {"IdMascota":idMascota});
  }

  public reportarEncontrada(idMascota: number) {
    return this.http.post(this.URL_SERVER + '/api/Mascota/ReportarEncontrada', {"IdMascota":idMascota});
  }
}
