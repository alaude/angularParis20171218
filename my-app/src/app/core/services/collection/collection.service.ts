import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {

  private collection: Item[];

  constructor() {
    this.collection = COLLECTION;
  }

  getCollection() {
    return this.collection;
  }

  addItem() {

  }

  updateItem() {

  }

  deleteItem(){

  }

}
