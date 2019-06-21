import { Injectable } from '@angular/core';
import { Lego } from './lego.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  // legos: FirebaseListObservable<any[]>;

  // constructor(private database: AngularFireDatabase) {
  //   this.legos = database.list('sets');
  //  }

  // getLegos() {
  //   return this.legos;
  // }

  // getLegoById(legoId: string){
  //   return this.database.object('/shop/' + legoId);
  // }

  // addLegos(newLego) {
  //   this.legos.push(newLego);
  // }
}
