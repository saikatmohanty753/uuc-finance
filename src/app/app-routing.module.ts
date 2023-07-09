import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    canActivate:[authGuard]
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
