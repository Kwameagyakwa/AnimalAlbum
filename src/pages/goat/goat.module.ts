import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoatPage } from './goat';

@NgModule({
  declarations: [
    GoatPage,
  ],
  imports: [
    IonicPageModule.forChild(GoatPage),
  ],
})
export class GoatPageModule {}
