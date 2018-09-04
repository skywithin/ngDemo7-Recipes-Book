import { 
    Directive, 
    OnInit, 
    Renderer2, 
    ElementRef, 
    HostListener, 
    HostBinding, 
    Input} from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') textColor: string = 'black';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2) { }

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
        //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
        this.textColor = 'white';
    }
    
    @HostListener('mouseleave') mouselease(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
        //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
        this.textColor = 'black';
    }
}