import { Component } from '@angular/core';
import { NavController,Nav,  NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }
   
          Elephant(){
            this.navCtrl.push(ElephantPage);
            }
          Goat(){
              this.navCtrl.push(GoatPage);
               }
          Kangaroo(){
            this.navCtrl.push(KangarooPage);
          }
        Monkey(){
          this.navCtrl.push(MonkeyPage);
        }
        Tiger(){
          this.navCtrl.push(TigerPage);
        }
        Zebra(){
          this.navCtrl.push(ZebraPage);
        }
}
