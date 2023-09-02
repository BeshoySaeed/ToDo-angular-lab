import { Component } from '@angular/core';

@Component({
  selector: 'app-note-app',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.scss'],
})
export class NoteAppComponent {
  noteList: string[] = [];

  inputValue(input: string) {
    this.noteList.push(input);
    console.log(this.noteList);
  }

  removeChild(noteString: string) {
    console.log(noteString);
    this.noteList = this.noteList.filter((x) => x != noteString);
  }

  editButton(item: string) {
    console.log(item);
    let element = this.noteList.indexOf(item);
  }
}
