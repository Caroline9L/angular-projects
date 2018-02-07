import { animate, state, style, transition, trigger, keyframes, group } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger('divState', [
			state('normal', style({
				'background-color': 'red',
				transform: 'translateX(0)'
			})),
			state('highlighted', style({
				backgroundColor: 'blue',
				transform: 'translateX(100px)'
			})),
			// transition('normal => highlighted', animate(500)),	 //from state to state, action
			// transition('highlighted => normal', animate(800))	 //returning
			transition('normal <=> highlighted', animate(800))	 //both directions
		]),
		trigger('wildState', [
			state('normal', style({
				'background-color': 'red',
				transform: 'translateX(0) scale(1)',
				borderRadius: '0px'
			})),
			state('highlighted', style({
				backgroundColor: 'blue',
				transform: 'translateX(100px) scale(1)',
				borderRadius: '0px'
			})),
			state('shrunken', style({
				backgroundColor: 'green',
				transform: 'translateX(0) scale(0.5)',
				borderRadius: '0px'
			})),
			transition('normal => highlighted', animate(300)),
			transition('highlighted => normal', animate(800)),
			// transition('shrunken <=> *', animate(500, style({// *(wildcard) means any possible state
			// 	borderRadius: '50px'
			// }))) //this method causes an ugly jump at the end
			transition('shrunken <=> *', [//phased transition
				style({
					backgroundColor: 'orange'
				}),
				animate(1000, style({
					borderRadius: '50px'
				})),
				animate(500) //prevents the jump
			])
		]),
		trigger('list1', [
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			transition('void => *', [
				style({
					opacity: 0,
					transform: 'translateX(-100px)'
				}),
				animate(300)
			]),	 //void is for an element which exists in the end state but doesn't start in the dom -- ie user input -- so this is 'from nonexistent to any state'. this needs an initial style set in the array to work
			transition('* => void', [
				animate(300, style({
					transform: 'translateX(100px)',
					opacity: 0
				}))
			])	 
		]),
		trigger('list2', [
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			transition('void => *', [
				animate(1000, keyframes([//controls state/transition time
					style({
						transform: 'translateX(-100px)',
						opacity: 0,
						offset: 0 //at what point in the total time this happens
					}),
					style({
						transform: 'translateX(-50px)',
						opacity: 0.5,
						offset: 0.3 
					}),
					style({
						transform: 'translateX(-20px)',
						opacity: 1,
						offset: 0.5 
					}),
					style({
						transform: 'translateX(0px)',
						opacity: 1,
						offset: 1
					})
				]))
			]),
			transition('* => void', [
				group([ //takes animations that happen in sync
					animate(300, style({
						color: 'red'
					})),
					animate(800, style({
						transform: 'translateX(100px)',
						opacity: 0
					}))
				])
			])
		]),

	]
})
export class AppComponent {
	state = 'normal';
	wildState = 'normal';
	list = ['Milk', 'Sugar', 'Bread'];

	onAnimate() {
		this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
		this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';

	}

	onShrink() {
		this.wildState = 'shrunken';
	}

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}

	animationStarted(event) {
		console.log(event);
	}

	animationEnded(event) {
		console.log(event);
	}
}
