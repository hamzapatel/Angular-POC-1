import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { WellListComponent } from './well-list/well-list.component';

const routes: Routes = [{
  path:'user',
  component:UsersComponent
},{
  path:'welllist',
  component:WellListComponent
},{
  path:'layout',
  component:LayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
