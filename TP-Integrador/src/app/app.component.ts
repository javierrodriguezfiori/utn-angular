import { Component } from '@angular/core';

import { ICurso } from './model/i-curso';
import { Estado } from './model/estado.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TP-Integrador';

  curso: ICurso = {
    titulo: 'Angular',
    estado: Estado.Activo,
  };

  public cambiarEstado(event) {
    this.curso.estado = event;
  }
}
