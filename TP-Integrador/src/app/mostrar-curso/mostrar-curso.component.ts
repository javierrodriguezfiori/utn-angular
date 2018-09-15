import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-curso',
  templateUrl: './mostrar-curso.component.html',
  styleUrls: ['./mostrar-curso.component.css']
})
export class MostrarCursoComponent implements OnInit {
  @Input() curso;

  constructor() { }

  ngOnInit() {
  }

}
