import { Directive,  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
//This was way easier than what I tried to do...
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

// my solution -- can only click to open

// import OnInit, ElementRef, Output, Renderer2
// export class DropdownDirective implements OnInit { // add .open to open menus & toggle off 

//   constructor(private renderer: Renderer2, 
//     private elRef: ElementRef) { }

//   ngOnInit () {
//     this.renderer.addClass(this.elRef.nativeElement, 'closed');
//   }
  
//   @HostListener('mousedown') mousedown(eventData: Event) {
//     this.renderer.addClass(this.elRef.nativeElement, 'open');
//   }

//   @HostListener('mouseout') mouseout(eventData: Event) {
//     this.renderer.removeClass(this.elRef.nativeElement, 'open');
//   }


// }


