import { Component, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { RandomApiService } from '../../RandomApiService';
import { RandomDataModel } from '../../Model/RandomDataModel';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-CustomerCard',
  templateUrl: './CustomerCard.component.html',
  styleUrls: ['./CustomerCard.component.scss']
})
@Injectable()
export class CustomerCardComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;
  constructor() {
   }

  ngOnInit() { 
    console.log(this.dataSource)
  }
}
