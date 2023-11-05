import { Component, OnInit, ViewChild } from '@angular/core';
// import {CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
// import {DragDropModule} from '@angular/cdk/drag-drop';

import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDragHandle} from '@angular/cdk/drag-drop'; 
import { ITasks } from '../models/tasks.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'description','status','priority','dueDate'];
  dataSource : ITasks[]= [
    {
    id:2,
    position:1,
    title:"Test task 1",
    description:"Description of task 1",
    status:"In progress",
    priority:"High",
    dueDate:"12-11-2023"
   },
   {
    id:3,
    position:2,
    title:"Test task 1",
    description:"Description of task 1",
    status:"Failed",
    priority:"High",
    dueDate:"10-11-2023"
   },
   {
    id:5,
    position:3,
    title:"Test task 3",
    description:"Description of task 3",
    status:"Completed",
    priority:"High",
    dueDate:"17-11-2023"
   }

];
@ViewChild('table', { static: true }) table?: MatTable<ITasks>;
ngOnInit(): void {
}
dragDisabled = true;

  drop(event: CdkDragDrop<ITasks[]>) {
    // Return the drag container to disabled.
    this.dragDisabled = true;

    const previousIndex = this.dataSource.findIndex((d) => d === event.item.data);

    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table?.renderRows();
  }
}
