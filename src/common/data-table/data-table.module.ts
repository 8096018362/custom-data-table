import { NgModule } from '@angular/core';
import { TableComponent } from './data-table';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [TableComponent],
    exports: [TableComponent]
})
export class TableComponentModule { }
