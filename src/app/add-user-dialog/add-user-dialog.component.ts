import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  user: User = new User();
  loading: boolean = false;
  birthDate: Date = new Date;
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
  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>) { }

  ngOnInit(): void {
  }

  resetValues(){
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.birthDate = "";
    this.user.street = "";
    this.user.zipCode = "";
    this.user.city = "";
  }

  async saveUser(){
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    await addDoc(collection(this.db,"users"), this.user.toJson());
    this.resetValues();
    this.loading = false;
    this.dialogRef.close();
    
  }
}
