import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElephantPage } from '../elephant/elephant';
import { GoatPage } from '../goat/goat';
import { KangarooPage } from '../kangaroo/kangaroo';
import { MonkeyPage } from '../monkey/monkey';
import { TigerPage } from '../tiger/tiger';
import { ZebraPage } from '../zebra/zebra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    ionViewDidLoad() {
      console.log('ionmviewDidLoad home');
          }
          ElephantPage(){
            this.navCtrl.push(ElephantPage);
            }
          GoatPage(){
              this.navCtrl.push(GoatPage);
               }
          KangarooPage(){
            this.navCtrl.push(KangarooPage);
          }
        MonkeyPage(){
          this.navCtrl.push(MonkeyPage);
        }
        TigerPage(){
          this.navCtrl.push(TigerPage);
        }
        ZebraPage(){
          this.navCtrl.push(ZebraPage);
        }
}
