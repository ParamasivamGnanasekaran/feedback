import { Component, OnInit } from '@angular/core';
import { LoginService } from './auth/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'feedback-collection';
  constructor(private loginService:LoginService){

  }
  ngOnInit() {
    this.loginService.autoLogin();
  }
}
