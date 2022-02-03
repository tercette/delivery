import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterOrderComponent } from './register-order.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularModule } from 'src/app/shared/angular/angular.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterOrderComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterOrderComponent]
})
export class RegisterOrderModule { }
