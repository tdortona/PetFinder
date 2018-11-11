import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { EncontrePage } from '../pages/encontre/encontre';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { FotosMascotaPage } from '../pages/fotos-mascota/fotos-mascota';
import { MisMascotasPage } from '../pages/mis-mascotas/mis-mascotas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;
  UserImg: string;
  UserName: string;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    private fb: Facebook
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Pet Finder', component: HelloIonicPage },
      { title: 'Lista de perros', component: ListPage },
      { title: 'Encontre un perro', component: EncontrePage },
      { title: 'Fotos mascota', component: FotosMascotaPage },
      { title: 'Mis mascotas', component: MisMascotasPage }
    ];
    
    this.storage.get('UserImg').then((img) => {
      this.UserImg = img;
    });

    this.storage.get('UserName').then((name) => {
      this.UserName = name;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout() {
    debugger;
    this.storage.set('UserImg', '');
    this.storage.set('UserName', '');
    console.log('deslogueado(?)');
    this.nav.push(LoginPage);
  }

  editProfile() {
    this.nav.push(EditProfilePage);
  }
}
