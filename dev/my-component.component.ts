import {Component} from "angular2/core";
import {TestComponent} from "./test.component";
import {OnInit} from "angular2/core";
@Component({
    selector: 'my-component',
    template: `
        Hi, I'm <span [style.color]="inputElement.value == 'yes' ? 'red' : 'green'">{{name}}</span> and this my very first Angular2 component!  <span [class.is-awesome]="inputElement.value=='yes'">It's so awesome!</span>
        <br>
        <br>
        Is it awesome?
        <input type="text" #inputElement (keyup)="0">
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered</button>
        <test></test>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})

export class MyComponentComponent implements OnInit{

    name: string;


    ngOnInit():any {
        this.name = "JW Sims";
    }
}