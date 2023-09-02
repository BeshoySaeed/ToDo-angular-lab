import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Output() newInputValue: any = new EventEmitter();
  note: string = '';

  submitted() {
    this.newInputValue.emit(this.note);

    this.note = '';
  }
}
