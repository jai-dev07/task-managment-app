import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth/authguard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
  path:'',
  canActivate :[AuthGuard],
  loadChildren:()=> import('./task-management/task-management.module').
  then(m => m.TaskManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
