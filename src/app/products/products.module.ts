import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentModule } from '../../common/data-table/data-table.module';


export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

];

@NgModule({
  declarations: [ProductsComponent],
  imports: [TableComponentModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductsModule { }
