import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/role.model';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  signupForm: FormGroup = new FormGroup({});
  flag: boolean = true;
  roles:Role [] = [
    {value: 'employee', viewValue: 'Employee'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'manager', viewValue: 'Manager'},
  ];
  constructor(private signupservice:SignupService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userName:new FormControl(null, [Validators.required]),
      email:new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      role: new FormControl(this.roles[0].value, [Validators.required])
    });
  }

  saveDetails() {
   this.signupservice.registerUser(this.signupForm.get('userName')?.value, this.signupForm.get('email')?.value, this.signupForm.get('role')?.value, this.signupForm.get('password')?.value)
   .subscribe((response)=>{
    this.router.navigate(['/home']);
   })
  }
}
