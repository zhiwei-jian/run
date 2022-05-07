import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { GridDataService } from '../service/grid-data.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  title = 'Overview';
  mySite = 'Overview';
  constructor(private service : GridDataService) { }
  // constructor() { }
  ngOnInit(): void {
  }

  onSave() {
    this.service.getR().subscribe((response: any) => {
      this.mySite = response;
    });
  }

}
