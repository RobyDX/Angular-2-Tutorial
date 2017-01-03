import { Pipe, PipeTransform } from '@angular/core';
import {Persona, Sesso} from './persona'

@Pipe(
    {
        name: 'userpipe',
        pure: false,
    })
export class UserPipe implements PipeTransform {
    transform(value: Persona, args: string): any {

        if (!value) return value;

        var part = "";
        if (args == 'am') {
            if (value.sesso == Sesso.Maschio)
                return "Buongiorno signor " + value.nome + " " + value.cognome;
            else
                return "Buongiorno signora " + value.nome + " " + value.cognome;
        } else {
            if (value.sesso == Sesso.Maschio)
                return "Buonasera signor " + value.nome + " " + value.cognome;
            else
                return "Buonasera signora " + value.nome + " " + value.cognome;
        }
    }
}