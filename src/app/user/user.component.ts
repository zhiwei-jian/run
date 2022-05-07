import { Component, OnInit } from '@angular/core';
// import { GridDataService } from '../service/grid-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = 'User';
  mySite = 'User';
  // constructor(private service : GridDataService) { }
  constructor() { }
  ngOnInit(): void {

  }

}
