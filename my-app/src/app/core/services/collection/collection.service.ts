import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../shared/interfaces/item.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../shared/enums/state.enum';
import { ItemId } from '../../../shared/interfaces/item-id.model';

import * as firebase from 'firebase/app';


@Injectable()
export class CollectionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<ItemId[]>;


  constructor(private  _AngularFirestore: AngularFirestore) {
    this.itemsCollection = _AngularFirestore.collection<Item>('collection');
    this.collection = this.itemsCollection.snapshotChanges().map(document => {
      return document.map(property => {
        const data = property.payload.doc.data() as Item;
        const id = property.payload.doc.id;
        return { id, ...data };
      });
    });
    // this.collection.subscribe(data => console.log(data));
  }

  getCollection(): Observable<ItemId[]> {
    return this.collection ;
  }

  addItem(item: Item): void {
    this.itemsCollection.add(item);
  }

  updateItem(item: ItemId, newState: State) {
    item.state = newState;
    this._AngularFirestore.doc<Item>(`collection/${item.id}`).update(item);

  }

  deleteItem() {

  }

}
