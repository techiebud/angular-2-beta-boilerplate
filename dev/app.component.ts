import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `

         Hello, Techiebud
    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {


}

