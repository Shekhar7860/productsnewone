import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})              
export class AddShoppingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {

  }
  addShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });                         

    this.navCtrl.pop();
  }
}
