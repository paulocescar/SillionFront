import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { RandomApiService } from '../../RandomApi/RandomApiService';
import { RandomDataModel } from '../../RandomApi/Model/RandomDataModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-RandomApiList',
  templateUrl: './RandomApiList.component.html',
  styleUrls: ['./RandomApiList.component.scss']
})
export class RandomApiListComponent implements OnInit {
  randomData: RandomDataModel | any;
  displayedColumns: string[] = ['id', 'Foto', 'Nome', 'E-mail', 'Numero'];
  dataSource: MatTableDataSource<any>;
  searchTerm: string = '';
  listFormat: boolean | any;
  pageSize: number = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  currentPageData: any[] | undefined;

  constructor(private randomApiService: RandomApiService) { 
    this.dataSource = new MatTableDataSource<RandomDataModel>([]);
  }

  ngOnInit() { 
    this.randomApiService.getData().subscribe((response) => {
        this.randomData = response.data;
        this.dataSource.data = this.randomData;
        this.dataSource.paginator = this.paginator;
        this.initPageFilter();
    }, (error) => {
        console.error('Erro:', error);
    });

    this.listFormat = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data, filter) => {
      return data.first_name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.currentPageData = this.dataSource.filteredData
    this.initPageFilter();
  } 

  onPageChange(event: any) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
  
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
  
    const currentPageData = this.randomData.slice(startIndex, endIndex);
  
    this.currentPageData = currentPageData;
  }

  initPageFilter(){
    this.onPageChange({
      length: this.dataSource.paginator?.length ?? 0,
      pageIndex: this.dataSource.paginator?.pageIndex ?? 0,
      pageSize: this.dataSource.paginator?.pageSize  ?? 10,
      previousPageIndex: 0
    })
  }
}