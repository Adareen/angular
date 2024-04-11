import { Component } from '@angular/core';
import { Studente } from './studente.model';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrl: './lista-studenti.component.css',
})
export class ListaStudentiComponent {
  listaStudenti: Studente[] = [
    new Studente('pippo', 'rossi', 1, true, ['angular', 'java', 'html']),
    new Studente('anna', 'verdi', 2, true, ['bootstrap', 'java', 'html']),
    new Studente('lollo', 'lollaro', 3, true, ['angular', 'js', 'db']),
    new Studente('dario', 'bianchi', 4, false)
  ];

  onCambiaPresenza(indice: number){
    console.log(indice);
    this.listaStudenti[indice].presenza=!this.listaStudenti[indice].presenza;
    
  }
}
