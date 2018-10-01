import { Component, OnInit, Input, Output, HostBinding } from '@angular/core';
import { ICurso } from '../i-curso';
import { Estado } from 'src/app/estado.enum';

@Component({
  selector: 'app-mostrar-curso',
  templateUrl: './mostrar-curso.component.html',
  styleUrls: ['./mostrar-curso.component.css']
})
export class MostrarCursoComponent implements OnInit {
  @Input() curso: ICurso;
  @HostBinding('attr.class') cssClass;
  @Output() estado: Estado;

  constructor() { }

  ngOnInit() {
  }

  public cambioEstado(event): void {
    this.curso.estado = event.target.value;
    this.cssClass = event.target.value;
  }
}

