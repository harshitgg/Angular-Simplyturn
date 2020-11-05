import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:ViewdataComponent,
    path:'list'
  },
  {
    component:HomeComponent,
    path:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
