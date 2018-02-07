import { Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {//+ implements OnInit
  @Input() defaultColor: string = 'transparent'; //make colors changed based on user input. Adding the selector in () binds it to the property, so it must be in [] in the html and just has a property passed to it
  @Input() highlightColor: string = 'lightblue'; //make colors changed based on user input

  // @Input('appBetterHighlight') highlightColor: string = 'lightblue'; // Adding the selector in () binds it to the property, so it must be in [] in the html and just has a property passed to it


  //@HostBinding('style.backgroundColor') backgroundColor: string = 'yellow'; //binds property to value, () defines the property of the hosting element we are binding to. That property needs to be camelcase 
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef,//imports how to reference dom element
    private renderer: Renderer2) { } //imports styles to render

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //this.elref.etc is which elelement, 2nd is the style property to set, 3rd is style value, 4th is flags -- optional, ie important. This is static
    this.backgroundColor = this.defaultColor; //changes background to default w. data binding method -- uses info added in html to override default color above
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {//adds listening event -- decorator('string of supported event') + action(event Data - can be custom), + event/activity
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //replaces the ngOnInit property so that it isn't static
  // }
    // this.backgroundColor = 'blue'; //works with listener & Hostbinding
    this.backgroundColor = this.highlightColor; //when binding with outside input
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  // }
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }



}
//https://angular.io/api/core/Renderer2