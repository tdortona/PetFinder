import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TitanPage } from './titan';

@NgModule({
  declarations: [
    TitanPage,
  ],
  imports: [
    IonicPageModule.forChild(TitanPage),
  ],
})
export class TitanPageModule {}
