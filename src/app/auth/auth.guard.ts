import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/role.model';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
      const userData: LoginUser | null = JSON.parse(localStorage.getItem('userData')!)
    // const expirationDate: string |null = JSON.parse(localStorage.getItem('expirationDate')!);
    // const token: string | null= JSON.parse(localStorage.getItem('expirationDate')!);
    if (!userData) {
      return this.router.createUrlTree(['auth']);
    }
    return true;
  }
}
