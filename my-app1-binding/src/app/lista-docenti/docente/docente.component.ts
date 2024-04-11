import { Component, Input, input } from '@angular/core';
import { Docente } from './docente.model';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.css'
})
export class DocenteComponent {

  // la prop doccente sarà presa in input dal parent. posso inviare solo dal parent questa propr poiché li dentro vivono i dati e nel parent rederizzo il child per il selettore
  @Input() docente:Docente
  
}
