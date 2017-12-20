import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../../shared/interfaces/item-id.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection: Observable<ItemId[]>;

  constructor(private _CollectionService: CollectionService) {
   }

  ngOnInit() {
    this.collection = this._CollectionService.getCollection();
    this.collection.subscribe(data => (console.log (data))) ;
  }

}
