import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { backendService } from 'src/app/constdata/const.data';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private router: Router) { }

  updateUser(role:string,managername:string,teamname:string,id:number): Observable<any>{
    const employeeInfo={
      role:role ? role : '',
      manager_name:managername? managername:"",
      team_name:teamname? teamname:"",
    }
    return this.http.put(`${backendService}/api/home/${id}`,employeeInfo).pipe(
      catchError(async (err) => new Error("unable to login")),
      map((resData:any) => {
        console.log(resData)
      //  return resData.response
      })
    );
  }
}
