import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable}     from 'rxjs/Observable';

export class Utente {
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }
}

@Injectable()
export class AppService {

    utenti: Utente[] = [];

    constructor(private http: Http) {
        this.utenti.push(new Utente("Mario", "Rossi"));
        this.utenti.push(new Utente("Giuseppe", "Bianchi"));
        this.utenti.push(new Utente("Carlo", "Verdi"));
        this.utenti.push(new Utente("Antonio", "Rossi"));
    }

    GetUtentByID(id: number): Utente {
        return this.utenti[id];
    }
}