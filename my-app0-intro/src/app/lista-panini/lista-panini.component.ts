import { Component } from '@angular/core';
import { Panino } from './panino.model';

@Component({
  selector: 'app-lista-panini',
  templateUrl: './lista-panini.component.html',
  styleUrl: './lista-panini.component.css'
})
export class ListaPaniniComponent {

  listaPanini: Panino[]=[
    {
      nome:"poldo",
      ingredienti:["hamburger", "pomodoro", "insalta"],
      prezzo: 6.5
    },
    {
      nome:"bruto",
      ingredienti:["hamburger", "bacon", "carciofi", "cheddar"],
      prezzo: 9.5
    },
    {
      nome:"olivia",
      ingredienti:["hamburger", "olive", "insalta", "burrata"],
      prezzo: 12
    },
    {
      nome:"braccio di ferro",
      ingredienti:["maionese", "spinaci", "doppio burger di tonno","camembert"],
      prezzo: 14.5
    },
  ]
}
