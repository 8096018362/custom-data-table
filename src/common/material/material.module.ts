import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { A11yModule } from '@angular/cdk/a11y';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [MatTabsModule,MatIconModule,
        MatExpansionModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        A11yModule,
        MatGridListModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatSortModule,
        MatPaginatorModule
    ],
    exports: [MatTabsModule,MatIconModule,
        MatExpansionModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        A11yModule,
        MatGridListModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatSortModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }
