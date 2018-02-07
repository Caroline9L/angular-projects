import { Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //property - to make event assign value
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //@Output makes event listenable, ('') creates alias for html. blueprintCreated doesn't change because it doesn't see the outside world
  //newServerName = ''; //not needed with local reference
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; // ('') is the name of the local reference - string or component. ElementRef is discovered in the devtools after entering the servername -- is a property. This accesses the elements in the template & dom


  constructor() { }

  ngOnInit() { //lifecycle hook
  }

  onAddServer(nameInput: HTMLInputElement) { // () references local reference
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInput.value, //w local reference
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value //.nativeElement accesses underlying element, which has a value
    }); //uses event emitter above
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
