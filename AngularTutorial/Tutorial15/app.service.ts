import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable}     from 'rxjs/Observable';

@Injectable()
export class AppService {

    constructor(private http: Http) {

    }

    Aggiorna(): Observable<Response> {
        return this.http.get('http://services.groupkt.com/country/get/all');
    }
}