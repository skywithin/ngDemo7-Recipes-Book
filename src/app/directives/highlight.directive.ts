import { Directive, OnInit, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2) { }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
}