import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, CountingComponent,Lab4Component
  ],
  imports: [
    BrowserModule //,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }