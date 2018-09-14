import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import { Hero }    from '../hero';
 
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {

 @Output() loggedIn = new EventEmitter<Hero>();
 form: FormGroup; 
  
 constructor(private fb: FormBuilder) {
}

ngOnInit() { 
  this.form = this.fb.group({
    name: ['', [
      Validators.required]],
    number: ['', [
      Validators.required,
      Validators.pattern("[0-9]+")]],
    email: ['', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]],
    income: ['', [
      Validators.required]],
    });
}

   login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      console.log(`Emitting`);
    
      this.loggedIn.emit(new Hero(
      this.form.value.name,
      this.form.value.number,
      this.form.value.email,
      this.form.value.income));   
    }
  }
 /* login(name,number,email, income) {
    
    console.log(`Login ${email}`);
   
    if (name && number && email && income) {
      console.log(`Emitting`);
     
      this.loggedIn.emit(new Hero(name, number,email,income));
    }
  }*/
}