export class Studente{
    nome: string;
    cognome: string;
    corsi: string[];
    presenza:boolean;
    immagine:string;
    constructor(nome:string, cognome:string, corsi:string[], presenza:boolean,immagine:string)
    {
        this.nome=nome;
        this.cognome=cognome;
        this.corsi=corsi;
        this.presenza=presenza;
        this.immagine=immagine;
    }
}