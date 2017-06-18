import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {AuTabPanelComponent} from "./au-tab-panel/au-tab-panel.component";
import {AuTabComponent} from "./au-tab/au-tab.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement,
    tabPanel: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabPanelComponent, AuTabComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));
    fixture.detectChanges();
  });

it('should create the test application', async(()=>{
      expect(component).toBeTruthy();
}));


  it('should find only one tab inside the container', async(()=>{
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));


  it('should find the Login tab button marked as active', async(()=>{
    const selectedBt = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedBt).toBeTruthy();
    expect(selectedBt.textContent).toBe("Login");
  }));

  it('should find the Login tab input', async(()=>{
    const inputEmail = tabPanel.query(By.css('.login-email'));
    expect(inputEmail).toBeTruthy();
  }));

  it('should render title in e-mail:  label tag', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   fixture.detectChanges();
   const compiled = fixture.debugElement.nativeElement;
   expect(compiled.querySelector('.form-field label').textContent).toContain('Email:');
   }));


  it('should render title in password: label tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form div:last-child label').textContent).toContain('Password:');
  }));


  it('shoud switch to the Signup tab  and  should be last label text Confirm Password:', async(() => {
    //const fixture = TestBed.createComponent(AppComponent);

    const tabButtons= tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    expect(tabButtons.length).toBe(3);
    tabButtons[1].nativeElement.click();
    fixture.detectChanges();
    const selectedBt = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedBt).toBeTruthy();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form div:last-child label').textContent).toContain('Confirm Password:');

  }));

  it('shoud switch to the Signup tab  and  should be first label text Confirm Password:', async(() => {
    //const fixture = TestBed.createComponent(AppComponent);

    const tabButtons= tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    expect(tabButtons.length).toBe(3);
    tabButtons[1].nativeElement.click();
    fixture.detectChanges();
    const selectedBt = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedBt).toBeTruthy();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form div:first-child label').textContent).toContain('Email:');

  }));

  it('shoud switch to the Signup tab  and  should be second label text Confirm Password:', async(() => {
    //const fixture = TestBed.createComponent(AppComponent);

    const tabButtons= tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    expect(tabButtons.length).toBe(3);
    tabButtons[1].nativeElement.click();
    fixture.detectChanges();
    const selectedBt = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedBt).toBeTruthy();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form div:nth-child(2) label').textContent).toContain('Password:');

  }));


  /*it('should create the app', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
   }));*/

  /* it(`should have as title 'app works!'`, async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app.title).toEqual('app works!');
   }));*/

  /*it('should render title in a h1 tag', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   fixture.detectChanges();
   const compiled = fixture.debugElement.nativeElement;
   expect(compiled.querySelector('h1').textContent).toContain('app works!');
   }));*/
});
