import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  private URL_DEV: string  = "http://localhost:62605";
  // private URL_PROD: string  = "";

  constructor(public http: HttpClient) {
    
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

  enviarFotoEncontradoAWatson() {
    // this.http.post(this.URL_DEV + '/api/ImagenMascota/FotoEncontrado', )
  }

}
