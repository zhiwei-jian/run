import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GridDataService } from 'src/app/service/grid-data.service';
import { UserInfo } from '../user.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor (  
    public dialogRef: MatDialogRef<DeleteUserComponent>, 
    public service : GridDataService,
    @Inject(MAT_DIALOG_DATA) public users: UserInfo[]
  ) { }

  selectedUsers: UserInfo[];

  ngOnInit(): void {
    // this.selectedUsers = this.users;
    this.selectedUsers = (<any[]>Object.values(this.users))[0];
    // console.log(op);
    console.log(this.selectedUsers);
  }

  cancel(): void{
    this.dialogRef.close();
  }

  confirm(): void{
    this.service.deleteUsers(this.selectedUsers).subscribe();
    this.dialogRef.close();
  }
}
