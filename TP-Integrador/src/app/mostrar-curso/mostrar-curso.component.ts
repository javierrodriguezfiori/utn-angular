import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
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
  @Output() estadoElegido: EventEmitter<Estado> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public cambioEstado(event): void {
    this.cssClass = event.target.value;
    this.estadoElegido.emit(event.target.value);
  }
}

