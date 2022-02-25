import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterOrderComponent } from './register-order.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularModule } from 'src/app/shared/angular/angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsService } from '../tabs/tabs.service';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ],
  declarations: [RegisterOrderComponent],
  providers: [TabsService]
})
export class RegisterOrderModule { }
