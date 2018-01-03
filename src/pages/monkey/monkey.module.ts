import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonkeyPage } from './monkey';

@NgModule({
  declarations: [
    MonkeyPage,
  ],
  imports: [
    IonicPageModule.forChild(MonkeyPage),
  ],
})
export class MonkeyPageModule {}
