import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteAppComponent } from './note-app/note-app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ShowComponent } from './show/show.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteAppComponent,
    InputFieldComponent,
    ShowComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
