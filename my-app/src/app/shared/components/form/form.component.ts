import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  stateChoiceList = State;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;
  @Output() dataItem: EventEmitter<Item> = new EventEmitter();

  constructor(private _FormBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  process(): void {
    this.dataItem.emit(this.form.value);
    this.reset();
  }

  reset(): void {
    this.form.reset();
    this.stateCtrl.setValue(State.ALIVRER);
  }

  checkError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

  createForm(): void {
    this.nameCtrl = this._FormBuilder.control('', [
      Validators.required,
      Validators.minLength(5)]);
    this.refCtrl = this._FormBuilder.control('', [
      Validators.required,
      Validators.minLength(4)]);
    this.stateCtrl = this._FormBuilder.control(State.ALIVRER);

    this.form = this._FormBuilder.group({
      name: this.nameCtrl,
      reference: this.refCtrl,
      state: this.stateCtrl
    });
  }
}
