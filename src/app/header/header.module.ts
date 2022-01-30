import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header.routing';
import { AngularModule } from '../shared/angular/angular.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    AngularModule
  ],

  declarations: [HeaderComponent]
})
export class TesteModule { }
