import { Component, Input } from '@angular/core';
import { Alumno } from './../../Modelos/alumno';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  @Input() alumno!:Alumno;
}
