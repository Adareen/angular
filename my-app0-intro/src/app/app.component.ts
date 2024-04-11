import { Component } from '@angular/core';

// component è una classe con proprietà, app routing contiene i moduli  che sono strutture più piccole e che stanno sotto alla classe che permettono di dar corpo al framework

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app0-intro';
  autore: String = 'ciccino';

  studente: {
    nome: string;
    cognome: string;
    matricola: number;
  } = {
    nome: 'eliana',
    cognome: 'bove',
    matricola:1
  };

  benvenuto: string="";
  stampaInConsole(): string{
    let saluto:string ="ciao";
    console.log(saluto);
    return saluto;
    
  }

  onStampaBenvenuto(){
    this.benvenuto="ciao dal corso di angular";
  }
}
