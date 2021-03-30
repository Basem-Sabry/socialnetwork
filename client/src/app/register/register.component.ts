import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent:any;
  @Output() cancelRegister =new EventEmitter();
  model :any ={}
  constructor(private accountService:AccountsService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
register(){
   this.accountService.register(this.model).subscribe(res=>{
     console.log(res);
     this.cancel()
     
   },error=>{
     console.log(error);
     this.toastr.error(error.error)
     
   });
}
cancel(){
  this.cancelRegister.emit(false);
}
}
