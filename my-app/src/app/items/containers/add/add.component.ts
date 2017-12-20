import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  collection: Item[];

  constructor(private _CollectionService: CollectionService) {
   }

  ngOnInit() {
    this.collection = this._CollectionService.getCollection();
  }

  addItem(item: Item): void {
    this._CollectionService.addItem(item);
  }

}
