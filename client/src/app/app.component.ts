import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { User } from './_models/user';
import { AccountsService } from './_services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users :any;
  constructor( private accountService:AccountsService, private http : HttpClient){

  }
  ngOnInit() {

    this.setCurrentUser();
  }
  setCurrentUser(){
    const user : User =JSON.parse(localStorage.getItem('user')||'{}')
  }



  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response=>{
      this.users = response;
    },error =>{
      console.log(error)
    })
  }

}
