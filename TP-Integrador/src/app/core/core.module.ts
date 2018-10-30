import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingModule } from 'src/app/routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [ HomeComponent, MenuComponent],
  exports: [ MenuComponent ]
})
export class CoreModule { }
