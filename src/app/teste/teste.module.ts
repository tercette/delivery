import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { TesteRoutingModule } from './teste.routing';
import { AngularModule } from '../shared/angular/angular.module';

@NgModule({
  imports: [
    CommonModule,
    TesteRoutingModule,
    AngularModule
  ],

  declarations: [TesteComponent]
})
export class TesteModule { }
