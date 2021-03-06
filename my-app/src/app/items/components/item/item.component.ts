import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../../shared/interfaces/item-id.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  state = State;
  @Input('item') item: ItemId;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  changeState(item: ItemId, newState: State) {
    this._CollectionService.updateItem(item, newState);
  }
}
