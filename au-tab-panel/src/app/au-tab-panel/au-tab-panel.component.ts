import {
  Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, ViewChild,
  Input
} from '@angular/core';
import {AuTabComponent} from "../au-tab/au-tab.component";

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class AuTabPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(AuTabComponent) tabs: QueryList<AuTabComponent>;
 // @ViewChild(TemplateRef)
  @Input()
  headerTemplate:TemplateRef<any>;

  constructor() {
  }

  get tabsContext(){
    return {
      tabs:this.tabs
    }
  }

  ngOnInit() {
  }



  ngAfterContentInit(): void {
    console.log(this.tabs);
    const selectedTab = this.tabs.find(t => t.selected);
    if (!selectedTab && this.tabs.first) this.tabs.first.selected = true;
  }

  selectTab(tab: AuTabComponent): void {
    console.log("selected", tab);
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }
}
