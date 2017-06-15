import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuFaInputComponent} from "./au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./common/input-ref.directive";
/**
 * Created by Pedro on 15.06.2017.
 */
@NgModule({
  imports:[CommonModule],
  declarations:[AuFaInputComponent, InputRefDirective],
  exports:[AuFaInputComponent, InputRefDirective]
})
export class AuInputModule{}
