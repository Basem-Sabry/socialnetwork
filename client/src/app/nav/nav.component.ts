import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn:boolean =false;
  constructor(private accountService:AccountsService) {
   }

  ngOnInit(): void {
    this.getCurrentUser();
  }
      login(){
      this.accountService.login(this.model).subscribe(res=>{
        console.log(res)
        this.loggedIn=true
      },error =>{console.log(error)})

}
logout(){
  this.accountService.logout();
  this.loggedIn=false
}
getCurrentUser(){
  this.accountService.currentUser$.subscribe(user=>{
    //double !! is reverting the user type to boolean
    this.loggedIn=!!user;
  })
}
}
