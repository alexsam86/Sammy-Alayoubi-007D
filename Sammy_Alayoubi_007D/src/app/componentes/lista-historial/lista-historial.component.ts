import { Component,Input } from '@angular/core';
import { Historial } from 'src/app/Modelos/historial';
@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input() public historialarray!:Historial[];
}
