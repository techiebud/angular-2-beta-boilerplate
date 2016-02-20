import {Component} from 'angular2/core';
import {AttributeDirectivesComponent} from "./attirbute-directives-component";
import {StructuralDirectives} from "./structural-directives";

@Component({
    selector: 'app',
    template: `
            <my-attribute-directives></my-attribute-directives>
            <br>
            <h1>Structural Directives</h1>
           <my-structural-directives></my-structural-directives>

    `,
    directives: [AttributeDirectivesComponent, StructuralDirectives]

})
export class AppComponent {


}

