/**
 * Created by johnny on 2/19/16.
 */
import {Component} from "angular2/core";
import {HighlightDirective} from "./highlight.directives";

@Component({
    selector: "my-attribute-directives",
    template: `
        <div [myHighlight]="'red'">
            Highlight me
        </div>
        <br><br>
        <div myHighlight>You too, Bubba</div>

    `,
    directives: [HighlightDirective]


})
export class AttributeDirectivesComponent {


}