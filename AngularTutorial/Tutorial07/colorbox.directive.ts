import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[colorbox]'
})
export class ColorBox {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @Input('colorbox') color: string;

    @HostListener('keyup') onClick() {

        var size = (this.el.nativeElement as HTMLInputElement).value.length;
        
        if (size > 20) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'red'");
        } else if (size > 15) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'violet'");
        } else if (size > 10) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'orange'");
        } else if (size > 5) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'yellow'");
        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'green'");
        }

    }

}