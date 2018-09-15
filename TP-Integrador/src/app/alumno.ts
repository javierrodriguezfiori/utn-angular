import { IAlumno } from './i-alumno';

export class Alumno implements IAlumno{
    dni: number;
    nombre: string;
    apellido: string;
}
