import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    Salva(model: any): void {
        alert("salvato");
    }
}