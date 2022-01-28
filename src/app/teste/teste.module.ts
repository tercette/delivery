import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { TesteRoutingModule } from './teste.routing';

@NgModule({
  imports: [
    CommonModule,
    TesteRoutingModule
  ],

  declarations: [TesteComponent]
})
export class TesteModule { }
