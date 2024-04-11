import { Component } from '@angular/core';
import { Studente } from './studente.model';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})
export class StudentiComponent {

  listaStudenti: Studente[]=
  [
    {
      "nome": "enrico",
      "cognome": "riso",
      "corsi": ["a", "b"],
      "presenza": true,
      "immagine": "https://www.focusjunior.it/content/uploads/2018/10/giraffe-2222908_960_720-e1548405712185.jpg"
    },
    {
      "nome": "giulia",
      "cognome": "rossi",
      "corsi": ["c", "d"],
      "presenza": false,
      "immagine": "https://www.ilpost.it/wp-content/uploads/2023/06/08/1686218680-giraffa-animali.jpg"
    },
    {
      "nome": "marco",
      "cognome": "verdi",
      "corsi": ["x", "y", "z"],
      "presenza": true,
      "immagine": "https://www.scienzainrete.it/files/styles/molto_grande/public/zoo-4821484_1920.jpg?itok=0e2lccD7"
    },
    {
      "nome": "Anna",
      "cognome": "Bianchi",
      "corsi": ["e", "f", "g"],
      "presenza": true,
      "immagine": "https://www.changethefuture.it/assets/uploads/2020/05/animali-selvatici.jpg"
    },
    {
      "nome": "Luca",
      "cognome": "Neri",
      "corsi": ["h", "i"],
      "presenza": false,
      "immagine": "https://amicidicasa.it/wp-content/uploads/2023/08/quokka-curiosita-1024x670.jpg"
    },
    {
      "nome": "Sara",
      "cognome": "Giallo",
      "corsi": ["m", "n"],
      "presenza": true,
      "immagine": "https://www.montecarlonews.it/typo3temp/pics/n_5a66d5ec72.jpg"
    }
  ]
  

}
