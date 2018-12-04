import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../../app/models/UserData';
import { AlertController, LoadingController } from 'ionic-angular';
import { ResultadoWatson } from '../../app/models/ResultadoWatson';
import { Base64 } from '@ionic-native/base64';
import { App } from "ionic-angular";
import { Usuario } from '../../app/models/Usuario';
import { Storage } from '@ionic/storage';
import { MascotaNueva } from '../../app/models/MascotaNueva';


/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  private URL_SERVER: string = "http://canfind.herokuapp.com";
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

  public async enviarFotoEncontradoAWatson(imageURI: string, idUsuario: number, localizacion: string) {  
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      dismissOnPageChange: true
    });

    loader.present();
    //para el browser
    // this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
    //   idUsuario: idUsuario,
    //   imageURI: imageURI,
    //   localizacion: localizacion
    // })
    // .subscribe((response) => {
    //   loader.dismiss();
    //   this.resultadoWatson = response as ResultadoWatson;
    //   if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
    //     this.showAlertExito();
    //   }
    //   else {
    //     this.showAlertError();
    //   }
    // }, (error) => {
    //   loader.dismiss();
    //   console.log(error);
    // });

    //para el celular
    this.base64.encodeFile(imageURI).then((base64File: string) => {
      base64File = base64File.split(',')[1];
      this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
        idUsuario: idUsuario,
        imageURI: base64File,
        localizacion: localizacion
      })
      .subscribe((response) => {
        loader.dismiss();
        this.resultadoWatson = response as ResultadoWatson;
        if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
          this.showAlertExito();
        }
        else {
          this.showAlertError();
        }
      }, (error) => {
        loader.dismiss();
        console.log(error);
      });
    }, (err) => {
      console.log(err);
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

  showAlertExito() {
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
      subTitle: 'Gracias por colaborar con CanFind. Por el momento no encontramos un resultado, podés probar con otra foto.',
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

   agregarFotoMascota(imageURI: string, idMascota: number, idUsuario: number){
      return new Promise((resolve, reject) => {
        let loader = this.loadingCtrl.create({
          content: "Agregando foto...",
          dismissOnPageChange: true
        });

        loader.present();
        //esto es para el browser
        // this.http.post(this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', { 
        //   imageURI: imageURI,
        //   idMascota: idMascota,
        //   localizacion: "",
        //   idUsuario: idUsuario
        //  })
        //   .subscribe((response) => {
        //     loader.dismiss();
        //      let nav = this.app.getActiveNav();
        //      nav.pop();
        //   }, (error) => {
        //      loader.dismiss();
        //      this.showAlertErrorGenerico();
        //      console.log(error);
        //   });

          //esto es para el celu
          this.base64.encodeFile(imageURI).then((base64File: string) => {
            base64File = base64File.split(',')[1];
            this.http.post(this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', { 
              imageURI: base64File,
              idMascota: idMascota,
              localizacion: "",
              idUsuario: idUsuario
            })
            .subscribe((response) => {
              loader.dismiss();
              this.showAlertFotoAgregada();
            }, (error) => {
              loader.dismiss();
              this.showAlertErrorGenerico();
              console.log(error);
            });
          }, (err) => {
            console.log(err);
          });
      });
  }
  
  showAlertErrorGenerico() {
    const alert = this.alertCtrl.create({
      title: 'Ocurrió un error :(',
      subTitle: '',
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

  showAlertFotoAgregada() {
    const alert = this.alertCtrl.create({
      title: '¡Foto agregada con éxito!',
      subTitle: '',
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

  public traerImagenMascota(idMascota: number){
    return this.http.get(this.URL_SERVER + '/api/ImagenMascota/TraerFotos/' + idMascota);
  }
  
  public agregaMascota(mascota: MascotaNueva){
    return this.http.post(this.URL_SERVER + '/api/Mascota/AgregarMascotaNueva', 
    { "IdUsuario":mascota.idUsuario,
      "Nombre":mascota.nombre,
      "IdRaza":mascota.raza
    })
  }

  public traerRazas(){
    return this.http.get(this.URL_SERVER +'/api/Mascota/TraerRazas/')
  }

  public getLocation(pos: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos + '&key=AIzaSyDR4UkFnDchql4WRvuv48FFS9X7A0mXsjw');
  }

  public crearClaseWatson(idMascota: number, nombreMascota: string, imagenes: string[]) {
    return this.http.post(this.URL_SERVER + '/api/ImagenMascota/CrearClaseWatson', {
      "IdMascota": idMascota,
      "NombreMascota": nombreMascota,
      "ImagesUris": imagenes
    });
  }
}
