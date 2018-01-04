import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ElephantPage } from '../pages/elephant/elephant';
import { GoatPage } from '../pages/goat/goat';
import { ZebraPage } from '../pages/zebra/zebra';
import { MonkeyPage } from '../pages/monkey/monkey';
import { KangarooPage } from '../pages/kangaroo/kangaroo';
import { TigerPage } from '../pages/tiger/tiger';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElephantPage,
    GoatPage,
    ZebraPage,
    MonkeyPage,
    KangarooPage,
    TigerPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ElephantPage,
    GoatPage,
    ZebraPage,
    MonkeyPage,
    KangarooPage,
    TigerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
