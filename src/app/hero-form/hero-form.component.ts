import {Component, EventEmitter, Output} from '@angular/core';
import { Hero }    from '../hero';
 
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {
 
 //model = new Hero('Dr IQ', 9650472965, 'iq@tcs.com', 20000);
 @Output() loggedIn = new EventEmitter<Hero>();
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  login(name,number,email, income) {
    
    console.log(`Login ${email}`);
   
    if (name && number && email && income) {
      console.log(`Emitting`);
     
      this.loggedIn.emit(new Hero(name, number,email,income));
    }
  }

 // newHero() {
   // this.model =new Hero('',9650472965 , '', 20000);
  //}
}