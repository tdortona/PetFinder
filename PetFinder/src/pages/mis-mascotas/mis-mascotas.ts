import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilMascotaPage } from '../perfil-mascota/perfil-mascota';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Mascota } from '../../app/models/Mascota';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MisMascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mis-mascotas',
  templateUrl: 'mis-mascotas.html',
})
export class MisMascotasPage {
  misMascotas: Mascota[];
  idUsuarioLogueado: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicioProvider,
    public storage: Storage
    ) {
 
      this.storage.get("idUsuarioLogueado").then((data)=>{
        this.idUsuarioLogueado = data;

        this.service.traerMascotas(this.idUsuarioLogueado)
        .subscribe((result) => { 
            this.misMascotas = result as Array<Mascota>;
            console.log(result);
        }, (error) => {
          console.log(error);
        });
      });
   }

  irAPerfil(idMascota: number){
    this.navCtrl.push(PerfilMascotaPage, { 
      idMascota: idMascota
    })
  } 
}
