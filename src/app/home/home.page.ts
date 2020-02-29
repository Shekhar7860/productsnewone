import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free/ngx';
import * as firebase from 'Firebase';
import { ShoppingItem } from '../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase} from "angularfire2/database"; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

infos = [];
ref = firebase.database().ref('shopping-list');
        
  constructor(private admob: AdMobFree, private database: AngularFireDatabase) {    
      this.ref.on('value', resp => {
              
    console.log('ingggg', resp)

    resp.forEach(childSnapshot => {
    this.infos.push(childSnapshot.val())
       });
  });
                             
  }   

   ionViewDidEnter = () => {
 console.log('itemss', this.infos)
  }

   share () {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id: 'ca-app-pub-9784974231819956/8094374646'
  }; 
                                                     
  this.admob.interstitial.config(interstitialConfig);
  
  this.admob.interstitial.prepare().then(() => {
     console.log('interstial working')
  }).catch(e => console.log(e, 'error')); 


  }

        
                         

}
             