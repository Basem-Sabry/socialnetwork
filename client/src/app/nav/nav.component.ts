import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  constructor(public accountService:AccountsService) {
 

   }

  ngOnInit(): void {
  }
      login(){
      this.accountService.login(this.model).subscribe(res=>{
        console.log(res)
      },error =>{console.log(error)})

}
logout(){
  this.accountService.logout();
}

}
