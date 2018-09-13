import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {Hero} from '../hero';
import { HeroFormComponent } from './hero-form.component';
import {By} from "@angular/platform-browser";

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  let nameEl: DebugElement;
  let numberEl: DebugElement;
  let emailEl: DebugElement;
  let incomeEl: DebugElement;
  let submitEl:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nameEl = fixture.debugElement.query(By.css('input[id=name]'));
    numberEl = fixture.debugElement.query(By.css('input[id=number]'));
   emailEl = fixture.debugElement.query(By.css('input[type=email]'));
    incomeEl = fixture.debugElement.query(By.css('input[id=income]'));
    submitEl = fixture.debugElement.query(By.css('button'));
  });

  it('should create HeroFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Entering Hero details emits loggedIn event', () => {
    let user: Hero;
    nameEl.nativeElement.value = "Test User";
    numberEl.nativeElement.value = 8888888888;
    emailEl.nativeElement.value = "test@example.com";
    incomeEl.nativeElement.value = 123456;

    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct
    //expect(user.email).toBe("test@example.com");
    expect(user.name).toBe("Test User");
    expect(user.number).toBe("8888888888");
    expect(user.email).toContain("@example.com");
    expect(user.income).toBeGreaterThan(100000);
   
  });

});
