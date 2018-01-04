import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController,  NavParams } from 'ionic-angular';
=======
import { NavController, NavParams } from 'ionic-angular';
>>>>>>> master
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
<<<<<<< HEAD

  }
   
          Elephant(){
            this.navCtrl.push(ElephantPage);
            }
=======
    
    
          }
          Elephant(){
            this.navCtrl.push(ElephantPage);
        }
>>>>>>> master
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

