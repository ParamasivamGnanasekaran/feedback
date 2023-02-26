import {Component, Inject} from '@angular/core';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginUser, Role } from 'src/app/model/role.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({});
  roles:Role [] = [
    {value: 'employee', viewValue: 'Employee'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'manager', viewValue: 'Manager'},
  ];
  flag: boolean = true;
  data:any=[];
  constructor(public dialogRef: MatDialogRef<UserComponent>,@Inject(MAT_DIALOG_DATA) public employeedetails:any, private userService:UserService) {
    this.data = employeedetails.employeeDetail
  }
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      userName:new FormControl(this.data.username,),
      email:new FormControl(this.data.email),
      role: new FormControl(this.data.role),
     managerName:new FormControl(this.data.manager_name),
     teamName:new FormControl(this.data.team_name),
    });
    this.employeeForm.get('userName')?.disable();
    this.employeeForm.get('email')?.disable();
  }

  saveDetails() {
    this.userService.updateUser(this.employeeForm.get('role')?.value, this.employeeForm.get('managerName')?.value, this.employeeForm.get('teamName')?.value, this.data.id)
    .subscribe((response)=>{
     this.dialogRef.close();
    })
   }
   
}
