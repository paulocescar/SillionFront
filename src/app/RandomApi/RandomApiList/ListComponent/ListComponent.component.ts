import { Component, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ListComponent',
  templateUrl: './ListComponent.component.html',
  styleUrls: ['./ListComponent.component.css']
})
@Injectable()
export class ListComponentComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any> | any;

  displayedColumns: string[] = ['id', 'Foto', 'Nome', 'E-mail', 'Numero'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;

  constructor() { }

  ngOnInit() { 

  }
  

}
