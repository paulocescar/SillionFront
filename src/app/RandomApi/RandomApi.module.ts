import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { RandomApiComponent } from './RandomApi.component';
import { RandomApiListComponent } from './RandomApiList/RandomApiList.component';
import { RandomApiProfileComponent } from './RandomApiProfile/RandomApiProfile.component';
import { CustomerCardComponent } from './RandomApiList/CustomerCard/CustomerCard.component';
import { ListComponentComponent } from './RandomApiList/ListComponent/ListComponent.component';
import { RandomApiService } from './RandomApiService';
import { HttpClientModule } from '@angular/common/http';

let routes = RouterModule.forChild([
  { path: "", component: RandomApiComponent,
    children: [
      { path: "prodifle", component: RandomApiProfileComponent }
    ]
  }
])

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routes,
    MatSlideToggleModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    RandomApiComponent,
    RandomApiListComponent,
    ListComponentComponent,
    CustomerCardComponent
  ],
  providers: [
    RandomApiService
  ]
})
export class RandomApiModule { }
