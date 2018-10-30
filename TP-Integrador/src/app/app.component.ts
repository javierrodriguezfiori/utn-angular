import { Component } from '@angular/core';

import { ICurso } from './model/i-curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TP-Integrador';

  curso: ICurso;

  public cambiarEstado(event) {
    this.curso.estado = event;
  }
}
