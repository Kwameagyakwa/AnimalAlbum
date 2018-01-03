import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KangarooPage } from './kangaroo';

@NgModule({
  declarations: [
    KangarooPage,
  ],
  imports: [
    IonicPageModule.forChild(KangarooPage),
  ],
})
export class KangarooPageModule {}
