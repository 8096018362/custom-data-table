import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule, Routes } from '@angular/router';

import { TableComponentModule } from '../../common/data-table/data-table.module';

export const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },

];

@NgModule({
  declarations: [StudentsComponent],
  imports: [TableComponentModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class StudentsModule { }
