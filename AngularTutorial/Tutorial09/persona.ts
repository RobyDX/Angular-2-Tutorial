export enum Sesso {
    Maschio = 1,
    Femmina = 2
}

export class Persona {
    nome: string;
    cognome: string;
    sesso: Sesso;
    constructor(nome: string, cognome: string, sesso: Sesso) {
        this.nome = nome;
        this.cognome = cognome;
        this.sesso = sesso;
    }
}