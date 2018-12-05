import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilMascotaPage } from '../perfil-mascota/perfil-mascota';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { Mascota } from '../../app/models/Mascota';
import { Storage } from '@ionic/storage';
import { AgregaMascotaPage } from '../agrega-mascota/agrega-mascota';

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
  misMascotas: Mascota[] = [];
  idUsuarioLogueado: number;
  consultando: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private service: ServicioProvider,
    public storage: Storage
    ) {
      this.consultando = true;
      this.storage.get("idUsuarioLogueado").then((data)=>{
        this.idUsuarioLogueado = data;
        this.consultarMascotas();
      });
   }

  ionViewWillEnter() {
    this.consultarMascotas();
  }

  irAPerfil(idMascota: number){
    this.navCtrl.push(PerfilMascotaPage, { 
      idMascota: idMascota
    })
  } 

  agregarMascota(){
      this.navCtrl.push(AgregaMascotaPage, { 
    })
  }

  consultarMascotas() {
    this.service.traerMascotas(this.idUsuarioLogueado)
    .subscribe((result) => { 
        this.misMascotas = result as Array<Mascota>;
        console.log(result);
        this.consultando = false;
    }, (error) => {
      console.log(error);
    });
  }
}
