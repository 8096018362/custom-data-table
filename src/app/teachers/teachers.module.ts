import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentModule } from '../../common/data-table/data-table.module';


export const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
  },

];


@NgModule({
  declarations: [TeachersComponent],
  imports: [TableComponentModule, RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TeachersModule { }
