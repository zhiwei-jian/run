
import { GridDataService } from '../service/grid-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ThrowStmt } from '@angular/compiler';


/**
 * Request item model
 */
 export interface UserInfo {
  /** Name */
  name: string;
  /** Nick Name */
  nickName: string;
  /** Age */
  age: BigInteger;
  /** Hobby */
  hobby: string;
  // /** Gender */
  // gender: string;
  // /** Email address */
  // email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  
  constructor(private service : GridDataService) { }

  userList = [];

  userName: string;

  nickName: string;

  hobby: string;

  age: BigInteger;

  title = 'User';

  genderList = ['Male','Female'];

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }
  
  onSave() {
    console.log(this.userName);
    console.log(this.nickName);
    console.log(this.hobby);
    console.log(this.age);

    this.userList = [];
    const userInfo: UserInfo = {
      name: this.userName,
      nickName: this.nickName,
      age: this.age,
      hobby: this.hobby,
      // gender: null,
      // email: null,
    };
    this.userList.push(userInfo);

    // this.service.getHello(this.userName).subscribe((response: any) => {
    //   this.userName = response;
    // });

    this.service.addUser(this.userList).subscribe();
  }

  onKey(event: KeyboardEvent) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onPortalSelected(event: MatSelectChange | string) {
    let a = event.toString;
    console.log(a);
    this.genderList=['F','M'];
  }
}

