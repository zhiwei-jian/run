
import { GridDataService } from '../service/grid-data.service';
import { MatSelectChange } from '@angular/material/select';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';


/**
 * Request item model
 */
 export interface UserInfo {
  /** Name */
  name: string;
  /** Nick Name */
  nickName: string;
  /** Age */
  age: Number;
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
