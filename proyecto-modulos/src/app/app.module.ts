import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';

import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items/items.component';
import { HomeComponent } from './home/home/home.component'; 

import { AppComponent } from './app.component';

const ROUTES: Routes = [
  { path: "items", component: ItemsComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    HomeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
