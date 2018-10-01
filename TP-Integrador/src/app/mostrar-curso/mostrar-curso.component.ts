import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ICurso } from '../i-curso';

@Component({
  selector: 'app-mostrar-curso',
  templateUrl: './mostrar-curso.component.html',
  styleUrls: ['./mostrar-curso.component.css']
})
export class MostrarCursoComponent implements OnInit {
  @Input() curso: ICurso;
  @HostBinding('attr.class') cssClass;

  constructor() { }

  ngOnInit() {
  }

  public cambioEstado(event): void {
    this.curso.estado = event;
    this.cssClass = event;
  }
}

