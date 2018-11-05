import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingModule } from 'src/app/routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [ HomeComponent, MenuComponent, HeaderComponent, FooterComponent],
  exports: [ MenuComponent, HeaderComponent, FooterComponent ]
})
export class CoreModule { }
