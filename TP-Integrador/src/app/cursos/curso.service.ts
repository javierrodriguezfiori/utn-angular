import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from 'src/app/model/i-curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getCursos(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>('http://demo3744158.mockable.io/cursos');
  }
}
