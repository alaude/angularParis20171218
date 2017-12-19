import { Directive, Input, OnChanges, ElementRef, Renderer2} from '@angular/core';
import { log } from 'util';
import { State } from '../../enums/state.enum';

@Directive({
  selector: '[appState]'
})

export class StateDirective implements OnChanges {


  @Input('appState') appState;

  constructor(private _Elementref: ElementRef, private _Renderer2: Renderer2) { }

  ngOnChanges(): void {

    const elementNode = this._Elementref.nativeElement;
    const className = `state-${this.appState}`;
    let text: string;

    // tslint:disable-next-line:one-line
    switch (this.appState){
      case State.ALIVRER:
        text = 'Commande à livrer';
        break;
      case State.ENCOURS:
        text = 'Commande en cours';
        break;
      case State.LIVREE:
        text = 'Commande livrée';
        break;
      default:
        console.log(this.appState);
    }

    this._Renderer2.addClass(elementNode, className);
    elementNode.textContent = text;

  }
}
