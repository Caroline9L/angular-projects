import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None will override other css, Native uses ShadowDom, Emulated is default
})
export class ServerElementComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string}; //defines element type. @Input() allows our custom element to be referenced outside of the folder -- in this case by the app.comp.ts. 'name' on the inside is its alias, which we see in [] in html
  @Input() name: string; //from element name in html ( {{ name }} ) -- this is primative type vs reference type
      //primative -- data type that is not an object & has no methods (string, #, boolean, null, undefined, symbol) - a value
      //refernce -- objects, arrays, functs -- can have methods worked upon it
  @ViewChild('heading') header: ElementRef; //will select #heading from html
  @ContentChild('contentParagraph') paragraph: ElementRef; //slects p from app.html



  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInint called');
    console.log('Text content ' + this.header.nativeElement.textContent); //outputs nothing because DOM has not yet been rendered
    console.log('Text content of p: ' + this.paragraph.nativeElement.textContent); //outputs nothing because DOM has not yet been rendered
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text content of p: ' + this.paragraph.nativeElement.textContent); 
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngfterViewInit called');
    console.log('Text content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

 
}
