import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collection';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  public collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

}
