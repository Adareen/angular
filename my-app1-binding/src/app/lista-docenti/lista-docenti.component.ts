import { Component } from '@angular/core';
import { Docente } from './docente/docente.model';

@Component({
  selector: 'app-lista-docenti',
  templateUrl: './lista-docenti.component.html',
  styleUrl: './lista-docenti.component.css'
})
export class ListaDocentiComponent {


  // questo componenet è il parent di docenteComponent. qui vivranno i dati che verranno smistati al figlio o ai figli
  // parent -> child: invio dati dal parent al child

  listaDocenti: Docente[]= [
    {

      nome:"dario",
      cognome:"mennillo",
      corso:"angular e js"
    },
    {

      nome:"oscar",
      cognome:"vecchione",
      corso:"db"
    },
    {

      nome:"mauro",
      cognome:"bogliaccino",
      corso:"java"
    }
  ]


}
