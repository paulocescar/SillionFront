import { Component, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  }

  loadimg(idImage: string = ""){
    const skeletonImage = document.getElementById(idImage) as HTMLImageElement;
    skeletonImage.style.display = 'none';
  }
}
