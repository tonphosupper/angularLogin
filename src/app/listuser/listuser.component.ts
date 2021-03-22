import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private service: RegistrationService) { }
  users: User[];
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.service.getAllListUser().subscribe(
      data => {
        this.users = data;
      },
      error => console.log('ERROR: ' + error)
    );
  }
  deleteUser(id: number) {
    this.service.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
