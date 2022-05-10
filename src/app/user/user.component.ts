
import { GridDataService } from '../service/grid-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  
  constructor(private service : GridDataService) { }

  userName: string;

  nickName: string;

  hobby: string;

  age: BigInteger;

  title = 'User';

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  genderList = ['Male','Female'];

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }
  
  onSave() {
    console.log(this.userName);
    console.log(this.nickName);
    console.log(this.hobby);
    console.log(this.age);
    this.service.getHello(this.userName).subscribe((response: any) => {
      this.userName = response;
    });
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

