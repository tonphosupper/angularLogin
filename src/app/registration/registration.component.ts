import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user= new User();
  msg='';
  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  registeruser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['/login'])
      },
      error =>{
        console.log("exception occured");
        this.msg=error.console.error();   
      }
    )
  }

}
