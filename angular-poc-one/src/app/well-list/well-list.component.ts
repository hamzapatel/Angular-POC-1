import { Component, OnInit, ViewChild } from '@angular/core';
import { WellComponent } from '../well/well.component';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss'],
})
export class WellListComponent implements OnInit {
  wells: Array<any>;
  sourceKeys = [10001, 10002, 10003];
  @ViewChild('wellComponent', { static: false }) wellComp: WellComponent;
  constructor() {}

  ngOnInit(): void {
    this.wells = new Array<any>();
  }

  public addWell(well: any) {
    this.wells.push({ ...well });
  }

  public selectedSourceKey(sourceKey) {
    this.wellComp.form.controls.sourceKey.setValue(sourceKey);
    this.wellComp.form.controls.sourceKey.disable();
  }
}

export class Well {
  name: string;
  type: string;
  sourceKey: number;
}
