import { Estado } from './estado.enum';
import { IDocente } from 'src/app/model/i-docente';

export interface ICurso {
    id: string;
    titulo: string;
    fechaInicio: Date;
    fechaFin: Date;
    asistentes: string[];
    profesor: IDocente;
    laboratorio: number;
    estado: Estado;
}
