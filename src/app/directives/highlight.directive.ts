import { Directive, OnInit, Renderer2, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2) { }

    ngOnInit(){
        
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
    
    @HostListener('mouseleave') mouselease(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
}