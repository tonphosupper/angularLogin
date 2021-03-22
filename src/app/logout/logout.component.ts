import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.service.logOut();
    this.router.navigate(['/login'])
  }

}
