
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
   msg = '';

  constructor(private service: RegistrationService, private router: Router ) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        sessionStorage.setItem('user',this.user.emailId)
        let user = sessionStorage.getItem('user')
        sessionStorage.setItem('roles',data)
        let roles = sessionStorage.getItem('roles')
        console.log(roles)
        console.log(user)
        console.log("reponse recieved"),
        this.router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured"),
        this.msg="Bad credentials, please enter valid emailId and password"

      }
    )
  }
}
