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
  constructor( private accountService:AccountsService){

  }
  ngOnInit() {

    this.setCurrentUser();
  }
  setCurrentUser(){
    const user : User =JSON.parse(localStorage.getItem('user')||'{}')
  }

}
