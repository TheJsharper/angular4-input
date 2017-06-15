import {Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() placeholder: string;

  @ContentChild(InputRefDirective) input: HTMLInputElement;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if(!this.input){
      console.error("no present");
      return;
    }
    console.log("input", this.input);
  }

  get classes() {
    const cssClasses = {
      'fa': true
    };
    if (this.icon) cssClasses[`fa-${this.icon}`] = true;
    return cssClasses;
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus :false;
  }
}
