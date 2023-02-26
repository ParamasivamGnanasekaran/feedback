import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap } from 'rxjs';
import { backendService } from 'src/app/constdata/const.data';
import { LoginUser } from 'src/app/model/role.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokenExpirationTimer: any;
  constructor(private http : HttpClient, private router: Router) { }

  loginUser( email:string, password:string): Observable<any>{
    const registerUser = {
      email: email,
      password: password,
    }
   return this.http.post(`${backendService}/api/user/login`,registerUser).pipe(
    catchError(async (err) => new Error("unable to login")),
    tap((resData:any) => {
     this.handleAuthentication(resData.user,resData.expiresIn, resData.token);
    })
  );
  }

  autoLogin() {
    const userData: LoginUser | null = JSON.parse(localStorage.getItem('userData')!);
    const expirationDate: string |null = JSON.parse(localStorage.getItem('expirationDate')!);
    const token: string | null= JSON.parse(localStorage.getItem('expirationDate')!);
    if (!userData) {
      return;
    }

    if (token) {
      const expirationDuration =
        new Date(expirationDate!).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(user:LoginUser,expiresIn:string,token:string) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
     this.autoLogout(+expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('expirationDate', JSON.stringify(expirationDate));
  }
}











// email?: string,
//   id?: number,
//   last_login?: string,
//   manager_name?: string | null,
//   password?: string,
//   register?: String,
//   role?: string,
//   team_name?: null | string,
//   username?: string
// resData.email
//       resData.id,
//       resData.last_login,
//       resData.manager_name,
//       resData.password,
//       resData.register,
//       resData.role,
//       resData.team_name,
//       resData.username