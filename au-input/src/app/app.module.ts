import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

import 'rxjs/add/operator/map';
import {AuFaInputComponent} from './lib/au-fa-input/au-fa-input.component';
import {InputRefDirective} from './lib/common/input-ref.directive';
import {AuInputModule} from "./lib/au-input.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AuInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
