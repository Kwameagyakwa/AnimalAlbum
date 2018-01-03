import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TigerPage } from './tiger';

@NgModule({
  declarations: [
    TigerPage,
  ],
  imports: [
    IonicPageModule.forChild(TigerPage),
  ],
})
export class TigerPageModule {}
