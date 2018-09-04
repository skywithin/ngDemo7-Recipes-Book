import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    @HostBinding('style.color') textColor: string = 'black';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2) { }

    ngOnInit(){
        
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'blue';
        //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
        this.textColor = 'white';
    }
    
    @HostListener('mouseleave') mouselease(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
        //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
        this.textColor = 'black';
    }
}