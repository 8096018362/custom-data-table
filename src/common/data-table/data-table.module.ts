import { NgModule } from '@angular/core';
import { TableComponent } from './data-table';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [TableComponent],
    exports: [TableComponent]
})
export class TableComponentModule { }
