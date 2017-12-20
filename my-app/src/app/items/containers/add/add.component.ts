import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  collection: Item[];

  constructor(private _CollectionService: CollectionService, private _Router: Router) {
   }

  ngOnInit() {
    this.collection = this._CollectionService.getCollection();
  }

  addItem(item: Item): void {
    this._CollectionService.addItem(item);
    this._Router.navigate(['/list']);
  }

}
