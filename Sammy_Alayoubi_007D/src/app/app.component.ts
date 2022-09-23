import { Component } from '@angular/core';
import { Seccion } from './Modelos/seccion';
import { Historial } from './Modelos/historial';
import { Alumno } from './Modelos/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AsistenciaAPP';
  public arrayseccion:[Seccion]=[
    {
      id:1,
      nombre_seccion:'007D',
    },
  ]
  public arrayalumno:[Alumno]=[
    {
      rut:'21729588-2',
      apellido:'alayoubi',
      edad:20,
      nombre:'sammy',
      seccionorigen:{id:1,nombre_seccion:'007D'},
    },
  ]
  public arrayhistorial:[Historial]=[
    {
      alumnoregistro:{ rut:'21729588-2',apellido:'alayoubi',edad:20,nombre:'sammy',seccionorigen:{id:1,nombre_seccion:'007D'} },
      fecha:new Date() ,
    },
  ]
  public escucharseccion(evento:Seccion):void{
    this.arrayseccion.push(evento);
  }
  public escucharalumno(evento:Alumno):void{
    const historialguardar:Historial={
      alumnoregistro:evento,
      fecha:new Date(),
    }
    this.arrayalumno.push(evento);
    this.arrayhistorial.push(historialguardar);
  }
}
