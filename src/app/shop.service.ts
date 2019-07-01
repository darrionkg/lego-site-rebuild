import { Injectable } from '@angular/core';
import { Lego } from './lego.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private database: AngularFirestore) { }

  getSets() {
    return this.database.collection('sets').valueChanges();
  }

  // getSet(name) {
  //   return this.database.collection('sets').doc('2').collection('test', ref => 
  //   ref.where('name', '==', name));
  // }
}
