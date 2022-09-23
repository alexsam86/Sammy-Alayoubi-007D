import { Component,EventEmitter,Output,Input} from '@angular/core';
//import modelos alumno, seccion:
import { Alumno } from 'src/app/Modelos/alumno';
import { Seccion } from 'src/app/Modelos/seccion';
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{
  // input del array secciones (desde app.component):
  @Input() public secciones:Seccion[]=[]
  //emiter de alumno:
  @Output() enviaralumno=new EventEmitter<Alumno>();
  //variable default de tipo alumno:
  public alumnoregistro:Alumno={
    rut:'',
    nombre:'',
    apellido:'',
    edad:0,
    seccionorigen:{id:0,nombre_seccion:''},
  }
  public cambiarut(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumnoregistro.rut =elemento.value;
  }
  public cambianombre(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumnoregistro.nombre =elemento.value;
  }
  public cambiaapellido(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumnoregistro.apellido =elemento.value;
  }
  public cambiaedad(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumnoregistro.edad =parseInt(elemento.value)||0;
  }
  public cambiaseccion(evento:Event):void{
    const elemento = evento.target as HTMLSelectElement;
    this.alumnoregistro.seccionorigen.nombre_seccion =elemento.value;

  }
  public confirmaralumno():void{
    const copia:Alumno={
      ...this.alumnoregistro
    }
    this.enviaralumno.emit(copia)
    this.alumnoregistro.rut='';
    this.alumnoregistro.nombre='';
    this.alumnoregistro.apellido='';
    this.alumnoregistro.edad=0;
    this.alumnoregistro.seccionorigen={id:0,nombre_seccion:''};
  }
}
