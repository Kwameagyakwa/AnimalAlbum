import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZebraPage } from './zebra';

@NgModule({
  declarations: [
    ZebraPage,
  ],
  imports: [
    IonicPageModule.forChild(ZebraPage),
  ],
})
export class ZebraPageModule {}
