import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GridDataService } from 'src/app/service/grid-data.service';
import { UserInfo } from '../user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  ngOnInit(): void {
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'name'},
    { field: 'age'},
    { field: 'nickName' },
    { field: 'hobby' }
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];

    rowData = [];
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private service: GridDataService, private http: HttpClient) {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    // this.rowData = this.service.getUsers();
    
    this.service.getUsers().subscribe((data: any[]) => {
      // let jsonObj: any = JSON.parse(String(data)); // string to generic object first
      let users: UserInfo[] = <UserInfo[]>data;
      // data.forEach((item) => {
      //   console.log(item);
      //   let jsonObj: any = JSON.parse(employeeString); // string to generic object first
      //   let employee: Employee = <Employee>jsonObj;
      // })
      console.log(users);
      this.rowData = users;
    });

    console.log(this.rowData$);
  }
  

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}
