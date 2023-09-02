import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  @Input() itemComp: any;
  @Output() removeFun: any = new EventEmitter();
  @Output() editFun: any = new EventEmitter();

  ButtonEdit: string = 'Pause It';
  editCondition: boolean = false;

  removeFunction(item: string) {
    this.removeFun.emit(item);
  }

  editBtn(itemEdit: ElementRef) {
    this.editFun.emit(itemEdit);
    if (!this.editCondition) {
      this.ButtonEdit = 'Continue';
      this.editCondition = true;
    } else {
      this.ButtonEdit = 'Pause It';
      this.editCondition = false;
    }
  }
}
