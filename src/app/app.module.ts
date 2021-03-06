import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatRadioModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
