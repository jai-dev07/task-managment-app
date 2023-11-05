import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskUpdateComponent } from './dialog/task-update/task-update.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path:'',  
      component:DashboardComponent
    },
    {
      path:'dashboard',  
      component:DashboardComponent
    },
   
    {
      path:'view/:id',
      component:TaskViewComponent
    },
    {
      path:'update',
      component:TaskUpdateComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class TaskManagementRoutingModule {

}