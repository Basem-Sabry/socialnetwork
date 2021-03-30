import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountsService } from '../_services/accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService:AccountsService, private toastr:ToastrService){

  }
  //no |boolean
  canActivate(): Observable<boolean> |boolean{
    return true
    
    // this.accountService.currentUser$.pipe(
    //   map(user=>{
    //     if(user) return true;
    //     this.toastr.error('you shall not pass')
    //   })
    // );
  }
  
}
