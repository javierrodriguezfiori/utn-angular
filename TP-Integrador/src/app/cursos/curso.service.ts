import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from 'src/app/model/i-curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<ICurso[]>('http://demo3744158.mockable.io/cursos');
  }
}
