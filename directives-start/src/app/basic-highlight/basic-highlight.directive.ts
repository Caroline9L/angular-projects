import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]' //to make it be attribute vs element
})

export class BasicHighlightDirective implements OnInit {
	constructor(private elementRef: ElementRef) { //accesses the element we are on
	}

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = 'green';
	}
	
}

//this is not the ideal way to directly accesss elements, since sometimes a dom might not exist (ie service workers, angular hasnt rendered a dom)