import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { AngularModule } from '../../shared/angular/angular.module';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularModule
  ],
  declarations: [
    HomeComponent,
    CardsComponent,
    TabsComponent
  ],
  providers: []
})
export class HomeModule { }
