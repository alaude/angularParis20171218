import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {

  private collection: Item[];

  constructor() {
    this.collection = COLLECTION;
  }

  getCollection(): Item[] {
    return this.collection;
  }

  addItem(item: Item): void {
    this.collection.push(item);
  }

  updateItem() {

  }

  deleteItem() {

  }

}
