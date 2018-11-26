import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../../app/models/UserData';
import { AlertController, LoadingController } from 'ionic-angular';
import { ResultadoWatson } from '../../app/models/ResultadoWatson';

/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  // private URL_SERVER: string = "http://canfind.herokuapp.com";
  private URL_SERVER: string = "https://localhost:44357";

  imageFileName: any;
  pbaPost: UserData = new UserData();
  resultadoWatson: ResultadoWatson = new ResultadoWatson();
  
  loader = this.loadingCtrl.create({
    content: "Cargando..."
  });

  constructor(public http: HttpClient,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
    
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

  public async enviarFotoEncontradoAWatson(imageURI: string) {
    this.loader.present();
    this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {imageURI: imageURI})
    .subscribe((response) => {
      this.loader.dismiss();
      this.resultadoWatson = response as ResultadoWatson;
      if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
        this.showAlert(this.resultadoWatson.images[0].classifiers[0].classes[0].class, this.resultadoWatson.images[0].classifiers[0].classes[0].score);
      }
      else {

      }
    }, (error) => {
      this.loader.dismiss();
      console.log(error);
    });
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
    .subscribe((result) => {
      console.log("usuario logueado");
      console.log(result);
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
  
  showAlert(clase: string, score: number) {
    const alert = this.alertCtrl.create({
      title: 'Gracias por colaborar!',
      subTitle: 'Resultado:<ul><li>Clase: ' + clase + '</li><li>Probabilidad: ' + score * 100 + '%</li></ul>',
      buttons: [{
        text: 'OK',
        handler: () => {

        }
      }]
    });
    alert.present();
  }

  showError() {
    const alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Por favor, sacá una foto mejor.',
      buttons: [{
        text: 'OK',
        handler: () => {

        }
      }]
    });
    alert.present();
  }
}
