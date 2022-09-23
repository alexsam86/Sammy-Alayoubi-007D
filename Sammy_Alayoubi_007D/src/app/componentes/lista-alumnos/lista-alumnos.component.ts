import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Seccion } from './../../Modelos/seccion';
import { Historial } from './../../Modelos/historial';
import { Alumno } from './../../Modelos/alumno';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  @Input() public alumnos:Alumno[]=[];
}
