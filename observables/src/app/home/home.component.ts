import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //necessary for observable operators like interval
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription; //stores first subscription
  customObsSubscription: Subscription; //stores other subscription

  constructor() { }

  ngOnInit() { //creating a custom observable
    const myNumbers = Observable.interval(1000)//.interval with a number argument will wait that many miliseconds between emitting data. This is a complete observable.
      .map( //wraps data in another observable
        (data: number) => {
          return data * 2;
        }
      ); 
    this.numbersObsSubscription = myNumbers.subscribe( //can have three arguments -- callback for handling normal data, errors, and completions
      (number: Number) => {//emits an increasing number
        console.log(number); 
      } //this never ends, even if you switch pages -- not good! Need to unsubscribe to kill the process
    );

    const myObservable = Observable.create((observer: Observer<string>) => { // create takes an async function as argument. <> defines the data it will emit -- like a string or boolean
      setTimeout(() => {
        observer.next('first package'); //do this after 2 seconds. next pushes the next data package
      }, 2000); //at what point is the previous done
      setTimeout(() => { //timeouts are not nested, so they start at the same time rather than sequentially
        observer.next('second package'); 
      }, 4000); 
      setTimeout(() => {
        // observer.error('does not work'); //error
        observer.complete(); //completion data. Signals that the program is done, break the loop
      }, 5000); 
      setTimeout(() => {
        // observer.error('does not work'); //error
        observer.next('third package'); //won't ever show up because it's called after complete
      }, 6000); 

    }); 
    this.customObsSubscription = myObservable.subscribe( //this.etc will store the subscription in the object above
      (data: string) => { console.log(data); },//what kind of data is the normal data callback passing? documentation will tell you -- in this case I wrote a string, ergo.
      (error: string) => { console.log(error); }, //same story
      () => { console.log('All Done!'); } //does not receive any data as per above, so () has no argument. Passes string so we know it happened (which it won't cause we gave it no reason to).
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe(); //breaks the loop/unsubscribes on nav away from the section
    this.customObsSubscription.unsubscribe();
  }

}
