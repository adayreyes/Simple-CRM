import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  user: User = new User();
  birthDate: Date = new Date;
  constructor() { }

  ngOnInit(): void {
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    
  }
}
