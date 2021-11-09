import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterModule} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  constructor(private router : Router) {
    
   }   

  ngOnInit(): void {
   
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.username.hasError('required') ? 'Please type Username' : '';

  }
  getPassErrorMessage() {
    return this.password.hasError('required') ? 'Please type Password' :'';

  }

  login() : void {

    if(this.password.value == '')
    {
     alert('Enter password')

    }else

  
    if(this.username.value == 'admin' && this.password.value == 'admin')
    {
      this.router.navigateByUrl('/home');

     return

    }
    else {
      alert("Invalid credentials");
    }
  }

}
