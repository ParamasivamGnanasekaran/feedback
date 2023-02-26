import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendService } from 'src/app/constdata/const.data';
import { catchError, map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient, private router: Router) { }

  getAllUsers(): Observable<any>{
    return this.http.get(`${backendService}/api/home`).pipe(
      catchError(async (err) => new Error("unable to login")),
      map((resData:any) => {
       return resData.response
      })
    );
  }

  deleteUser(id:number): Observable<any>{
    return this.http.delete(`${backendService}/api/home/${id}`).pipe(
      catchError(async (err) => new Error("unable to login")),
      map((resData:any) => {
       return resData.response
      })
    );
  }
}
