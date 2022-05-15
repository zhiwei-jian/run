import { GridDataService } from '../service/grid-data.service';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  inputColor: string;

  message: string;

  introduction = 'This is a test website';

  fontColor = '#111111'

  keyboardValues = '';

  canClick = false;

  constructor(private service : GridDataService) { }

  ngOnInit(): void {
  }

  setColor(){
    this.fontColor = this.inputColor;
  }

  sayMessage(){
    this.message = this.keyboardValues;
    alert(this.message);
  }

  onSave() {
    this.canClick = !this.canClick;
  }

  onKey(event: KeyboardEvent) {
    this.keyboardValues = (<HTMLInputElement>event.target).value;
  }


  //------------ngIf----------
  ngMessage = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.ngMessage = 'You can edit me!';
    } else {
      this.ngMessage = "I'm read only!";
    }
  }


}
