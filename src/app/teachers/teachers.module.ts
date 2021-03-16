import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
  },

];


@NgModule({
  declarations: [TeachersComponent],
  imports: [ RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TeachersModule { }
