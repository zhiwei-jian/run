import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GridDataService } from 'src/app/service/grid-data.service';
import { UserInfo } from '../user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userList = [];

  userName: string;

  nickName: string;

  hobby: string;

  age: BigInteger;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>, private service: GridDataService
  ) {}

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    console.log(this.userName);
    console.log(this.nickName);
    console.log(this.hobby);
    console.log(this.age);

    this.userList = [];
    const userInfo: UserInfo = {
      name: this.userName,
      nickName: this.nickName,
      age: Number(this.age),
      hobby: this.hobby,
      // gender: null,
      // email: null,
    };
    this.userList.push(userInfo);

    // this.service.getHello(this.userName).subscribe((response: any) => {
    //   this.userName = response;
    // });

    this.service.addUser(this.userList).subscribe();
    this.dialogRef.close();
  }
}
