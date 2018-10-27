import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ HomeComponent, MenuComponent],
  exports: [ MenuComponent ]
})
export class CoreModule { }
