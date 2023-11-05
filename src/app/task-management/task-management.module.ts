import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskManagementRoutingModule } from './task-management.routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TaskUpdateComponent,
    TaskViewComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DragDropModule,
    TaskManagementRoutingModule,
   
  ]
})
export class TaskManagementModule { }
