import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GridDataService } from 'src/app/service/grid-data.service';
import { UserInfo } from '../user.component';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

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
    {
      field: 'id',
      minWidth: 180,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { field: 'name'},
    { field: 'age'},
    { field: 'nickName' },
    { field: 'hobby' }
  ];

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

  constructor(private service: GridDataService, private dialog: MatDialog) {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.setUsers();
    console.log(this.rowData);
  }

  setUsers() : void {
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
  }
  
  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  deleteUser(): void {
    let selectedUsers = <UserInfo[]>this.agGrid.api.getSelectedRows();
    if(selectedUsers == null || selectedUsers.length == 0) {
      window.alert("Please select users!");
      return;
    }

    this.dialog.open(DeleteUserComponent, {
      restoreFocus: false,
      width: '500px',
      data: {users: selectedUsers},
    }).afterClosed().subscribe(() => {
      this.setUsers();
    });

    // this.service.deleteUsers(selectedUsers).subscribe();
  }

  addUser(): void {
    const addUserDialogRef = this.dialog.open(AddUserComponent, {
      restoreFocus: false,
      width: '500px',
    });

    addUserDialogRef.afterClosed().subscribe(()=>{
      this.setUsers();
    });
  }

}
