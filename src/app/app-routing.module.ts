import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>ProductsModule
  },
  {
    path: 'students',
    loadChildren: () =>StudentsModule
  },
  {
    path: 'teachers',
    loadChildren: () =>TeachersModule
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { ModuleWithProviders } from "@angular/core"
// import { Routes, RouterModule } from '@angular/router';
// import { TargetVsActualComponent } from './target-actual.component';
// import { AuthGuard } from '../../+auth/guards/index';
// import { UserRoleGuard } from '../../+auth/guards/userRole.guard';

// export const routes: Routes = [
//     {
//         path: '',
//         component: TargetVsActualComponent,
//     },

// ];

// export const routing = RouterModule.forChild(routes);


// export const routedComponent = [
//     TargetVsActualComponent
// ]
