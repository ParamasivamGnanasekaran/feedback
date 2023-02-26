import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../auth/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  sideNav:boolean=false
constructor(private loginService: LoginService){
  
}
onLogout(){
this.loginService.logout()
}

}
