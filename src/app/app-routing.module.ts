import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: "",
      loadChildren: () => import('./RandomApi/RandomApi.module').then(mod => mod.RandomApiModule),
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
