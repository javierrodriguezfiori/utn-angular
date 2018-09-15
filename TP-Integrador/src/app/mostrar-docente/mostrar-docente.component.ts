import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-docente',
  templateUrl: './mostrar-docente.component.html',
  styleUrls: ['./mostrar-docente.component.css']
})
export class MostrarDocenteComponent implements OnInit {
  @Input() docente;

  constructor() { }

  ngOnInit() {
  }

}
