import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {Hero} from '../hero';
import { HeroFormComponent } from './hero-form.component';
import {By} from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  /*let nameEl: DebugElement;
  let numberEl: DebugElement;
  let emailEl: DebugElement;
  let incomeEl: DebugElement;
  let submitEl:DebugElement;*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    /*nameEl = fixture.debugElement.query(By.css('input[id=name]'));
    numberEl = fixture.debugElement.query(By.css('input[id=number]'));
    emailEl = fixture.debugElement.query(By.css('input[type=email]'));
    incomeEl = fixture.debugElement.query(By.css('input[id=income]'));
    submitEl = fixture.debugElement.query(By.css('button'));*/
  });

  it('should create HeroFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('email field validity', () => {
    let email = component.form.controls['email']; 
    expect(email.valid).toBeFalsy(); 
  });

  it('email field validity: check that email is required', () => {
    let errors = {};
    let email = component.form.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('email field validity: check that email contains @', () => {
    let errors = {};
    let email = component.form.controls['email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy(); 
  });

  it('Hero Form fields validity: returns false before setting the fields values', () => {
    expect(component.form.valid).toBeFalsy();
    });

  it('Hero Form fields validity: returns true after setting the fields values', () => {
    component.form.controls['name'].setValue("Test Hero");
    component.form.controls['number'].setValue(8888888888);
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['income'].setValue(123456789);
    expect(component.form.valid).toBeTruthy();
      });

  it('Hero Form Login: submitting a form emits a Hero', () => {
    let user: Hero;
    expect(component.form.valid).toBeFalsy();
    
    component.form.controls['name'].setValue("Test Hero");
    component.form.controls['number'].setValue(8888888888);
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['income'].setValue(123456789);
    expect(component.form.valid).toBeTruthy();

    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.login();

    // Now we can check to make sure the emitted value is correct
    expect(user.name).toBe("Test Hero");
    expect(user.number).toBe(8888888888);
    expect(user.email).toContain("@test.com");
    expect(user.income).toBeGreaterThan(123456780);
  });
  /*it('Entering Hero details emits loggedIn event', () => {
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
   
  });*/

});
