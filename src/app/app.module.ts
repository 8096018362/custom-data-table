import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponentModule } from '../common/data-table/data-table.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../common/material/material.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    TableComponentModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
