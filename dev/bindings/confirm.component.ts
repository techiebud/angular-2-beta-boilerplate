/**
 * Created by johnny on 2/19/16.
 */

import {Component, EventEmitter} from "angular2/core";


@Component({

    selector: 'my-confirm',
    template: `
        <h1>You submitted the following detail.  Is this correct?</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span>
        and you're <span class="highlight">{{myself.age}}</span>years old.
         Please click on 'Confirm' if you have made any changes.</p>
         <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyUp()">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyUp()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>

        <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})

export class ConfirmComponent {
    myself = {name: '', age: ''};
    isFilled : boolean = false;
    isValid: boolean = false;
    confirmed = new EventEmitter<{name: string, age: string}>();

    onKeyUp() {
        if (this.myself.name != '' && this.myself.age != '') {
            this.isFilled = true;
        }
        else {
            this.isFilled = false;
        }

        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
    }
    onConfirm() {
        this.confirmed.emit(this.myself);
    }




}