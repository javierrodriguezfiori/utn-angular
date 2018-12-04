import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlumno  } from 'src/app/model/i-alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<IAlumno[]> {
    return this.http.get<IAlumno[]>('https://demo3744158.mockable.io/alumnos');
  }
}
