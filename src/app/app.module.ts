import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GoatPage } from '../pages/goat/goat';
import { ZebraPage } from '../pages/zebra/zebra';
import { TigerPage } from '../pages/tiger/tiger';
import { KangarooPage } from '../pages/kangaroo/kangaroo';
import { MonkeyPage } from '../pages/monkey/monkey';
import { ElephantPage } from '../pages/elephant/elephant';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoatPage,
    ZebraPage,
    TigerPage,
    KangarooPage,
    MonkeyPage,
    ElephantPage,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GoatPage,
    ZebraPage,
    TigerPage,
    KangarooPage,
    MonkeyPage,
    ElephantPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
