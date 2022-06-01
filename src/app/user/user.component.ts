import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, collection, getDocs } from "firebase/firestore";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  firebaseConfig: any = {
    apiKey: "AIzaSyBUoLE1rdno3i4ohOH7gkCe4ESudwRYJ3M",
    authDomain: "simple-crm-7ccda.firebaseapp.com",
    projectId: "simple-crm-7ccda",
    storageBucket: "simple-crm-7ccda.appspot.com",
    messagingSenderId: "909531329180",
    appId: "1:909531329180:web:db649327e6bc562017f359"
  };
  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);
  allUsers: any = [];
  
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.showChanges()
  }

  async showChanges() {
  let docs = await getDocs(collection(this.db, "users"));
  docs.forEach(doc => {
    this.allUsers.push(doc.data());
    console.log(this.allUsers);
    
  });
  
  
}

  openDialog(){
    this.dialog.open(AddUserDialogComponent)
  }

}
