// Importacion de modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';

// Importacion para ruteo con Hash
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Importacion de componentes
import { AppComponent } from './app.component';
import { AlumnosModule } from './alumnos/alumnos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CursosModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AlumnosModule
  ],
  providers: [
    { provide: LocationStrategy,
      useClass : HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
