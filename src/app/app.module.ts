import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ElephantPage } from '../pages/elephant/elephant';
import { KangarooPage } from '../pages/kangaroo/kangaroo';
import { MonkeyPage } from '../pages/monkey/monkey';
import { TigerPage } from '../pages/tiger/tiger';
import { ZebraPage } from '../pages/zebra/zebra';
import { GoatPage } from '../pages/goat/goat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElephantPage,
    KangarooPage,
    MonkeyPage,
    TigerPage,
    ZebraPage,
    GoatPage,
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
    KangarooPage,
    MonkeyPage,
    TigerPage,
    ZebraPage,
    GoatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
