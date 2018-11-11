import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { EncontrePage } from '../pages/encontre/encontre';
import { LoginPage } from '../pages/login/login';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ConfirmarFotoPage } from '../pages/confirmar-foto/confirmar-foto';
import { MisMascotasPage} from '../pages/mis-mascotas/mis-mascotas';
import { PerfilMascotaPage } from '../pages/perfil-mascota/perfil-mascota';
import { FotosMascotaPage } from '../pages/fotos-mascota/fotos-mascota';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { ServicioProvider } from '../providers/servicio/servicio';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    EncontrePage,
    LoginPage,
    EditProfilePage,
    ConfirmarFotoPage,
    MisMascotasPage,
    PerfilMascotaPage,
    FotosMascotaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    EncontrePage,
    LoginPage,
    EditProfilePage,
    ConfirmarFotoPage,
    MisMascotasPage,
    PerfilMascotaPage,
    FotosMascotaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioProvider,
    FileTransfer,
    FileTransferObject,
    File
  ]
})
export class AppModule {}
