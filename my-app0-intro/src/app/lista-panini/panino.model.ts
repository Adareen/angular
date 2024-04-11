export class Panino{
    nome: string;
    ingredienti:string[];
    prezzo:number;

    // le proprietà possono essere embeddate in costruttore
    constructor(nome:string, ingredienti: string[], prezzo: number){
        this.nome=nome;
        this.ingredienti=ingredienti;
        this.prezzo=prezzo; 
    }
}

// export class Panino{
//     constructor(public ,nome:string,public ingredienti: string[],public prezzo: number){
//         this.nome=nome;
//         this.ingredienti=ingredienti;
//         this.prezzo=prezzo; 
//     }
// }