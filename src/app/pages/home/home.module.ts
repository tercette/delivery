import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { AngularModule } from '../../shared/angular/angular.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularModule
  ],

  declarations: [HomeComponent]
})
export class HomeModule { }
