import { Injectable } from '@angular/core';
// Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Schema interface
import { Item } from '../interfaces/model';

@Injectable()
export class OrtopedistaFirebaseService {

  // Saved items to show in the interface
  items: Observable<Item[]>;
  // Saved collection schema for the database
  itemsCollection: AngularFirestoreCollection<Item>;
  itemDoc: AngularFirestoreDocument<Item>;


  constructor(
    private afs: AngularFirestore
  ) {
    // * When initialized
    // * Save the items as Obervables from the afs Angular Firestore
    // this.items = this.afs.collection('items').valueChanges();
    // * Use snapshot instead to get access to the id
    this.items = this.afs.collection('items').snapshotChanges()
      .map( changes => {
        // .snapshotChanges() returns a DocumentChangeAction[], which contains
        // a lot of information about "what happened" with each change. If you want to
        // get the data and the id use the map operator.
        return changes.map( a => {
          const data = a.payload.doc.data() as Item;
          data.id =  a.payload.doc.id;
          return data;
        });
    });
    // Initialized the collection and save it in a variable
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));
  }

  getItems(){
   return this.items;
  }

  addItem(item: Item){
    // Add to the itemsCollection
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }


}


