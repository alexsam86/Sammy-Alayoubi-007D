import { Component,Output,EventEmitter} from '@angular/core';
//import modelo seccion:
import { Seccion } from 'src/app/Modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  //Emiter de seccion:
  @Output() public enviarseccion = new EventEmitter<Seccion>();
  //variable de tipo seccion(empieza vacia/default)
  public nuevaseccion:Seccion={
    id:0,
    nombre_seccion:'',
  }
  //variable contador para id:
  public idactual:number=1;
  //Funcion escucha evento y asigna nombre seccion:
  public nombreseccionevent(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaseccion.nombre_seccion=elemento.value;
  }
  //funcion asigna id=contador,crea copia de la seccion,
  //emite y reinicia seccion:
  public confirmarseccion():void{
    this.idactual=this.idactual+1;
    this.nuevaseccion.id=this.idactual;
    const copia:Seccion={
      ...this.nuevaseccion
    }
    this.enviarseccion.emit(copia);
    this.nuevaseccion.id=0;
    this.nuevaseccion.nombre_seccion='';
  }
}
