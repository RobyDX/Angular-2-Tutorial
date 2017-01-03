import { Component, Input, Output, EventEmitter } from "@angular/core";
import {Persona} from "./Persona"

@Component({
    selector: "tablerow",
    templateUrl: "tablerow.component.html",
})
export class TableRowComponent {
    @Input() datarow: Persona;
    @Output() delete: EventEmitter<any> = new EventEmitter();

    Elimina(): void
    {
        this.delete.emit(this.datarow);
    }
}