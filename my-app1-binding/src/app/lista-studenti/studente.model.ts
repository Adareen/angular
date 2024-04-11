export class Studente {

    // con il ? rendo una prop opzionale. implemento due costruttori diversi in una botta sola. la proprietà opzionale deve andare al fondo
    constructor(public nome:string, public cognome:string, public matricola:number, public presenza:boolean | string, public corsi?:string[]){

    }
}