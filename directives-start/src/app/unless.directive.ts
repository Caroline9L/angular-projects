import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {//condition as an input. set turns the selector appUnless into a method, wchih receieves the value the property would normally get as an input  (value: boolean) is also acceptable
    if (!condition) { //if the condition is not true
      this.vcRef.createEmbeddedView(this.templateRef); //vcref will call createEview when the conditions change. view will create the templateref or whatever is in the () (&noted below)
    } else {
      this.vcRef.clear(); //otherwise this will clear everything out of that place in the dom
    }
  }

  //will inject property into listed items in (), particularly the ng template that doesn't exist yet. Template is ngtemplate, vcref marks the place of where this will go in the document
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
