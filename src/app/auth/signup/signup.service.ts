import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, map} from 'rxjs';
import { backendService } from 'src/app/constdata/const.data';
import { LoginUser } from 'src/app/model/role.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient, private loginService:LoginService) { }

  registerUser(username:string, email:string, role:string, password:string): Observable<any>{
    const registerUser = {
      username: username,
      email: email,
      role: role,
      password: password,
    }
   return this.http.post(`${backendService}/api/user/register`,registerUser).pipe(
    catchError(async (err) => new Error("unable to login")),
    map((resData:any) => {
     this.handleAuthentication(resData.user,resData.expiresIn, resData.token);
     return resData
    }))
  }

  private handleAuthentication(user:LoginUser,expiresIn:string,token:string) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
     this.loginService.autoLogout(+expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('expirationDate', JSON.stringify(expirationDate));
  }
}
