import { Component, OnInit, ViewChild } from '@angular/core';
// import {CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';
import { ITasks } from '../models/tasks.model';
import { TaskUpdateComponent } from '../dialog/task-update/task-update.component';
import { Priority, Status } from '../models/task.enum';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Priority = Priority;
  Status = Status;
  displayedColumns: string[] = ['position', 'title', 'description', 'status', 'priority', 'dueDate', 'actions'];
  dataSource: ITasks[] = [
    {
      id: 2,
      position: 1,
      title: "Test task 1",
      description: "Description of task 1",
      status: Status.completed,
      priority: Priority.low,
      dueDate: "12-11-2023"
    },
    {
      id: 3,
      position: 2,
      title: "Test task 2",
      description: "Description of task 2",
      status: Status.inProgress,
      priority: Priority.medium,
      dueDate: "10-11-2023"
    },
    {
      id: 5,
      position: 3,
      title: "Test task 3",
      description: "Description of task 3",
      status: Status.completed,
      priority: Priority.medium,
      dueDate: "17-11-2023"
    }

  ];
  @ViewChild('table', { static: true }) table?: MatTable<ITasks>;

  constructor(public dialog: MatDialog,private router:Router) {

  }
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

  edit(data: ITasks): void {
    this.openDialog(data);
    console.log(data);

  }
  view(id:number): void {
      this.router.navigate(['view/'+id])
  }
  delete(data: ITasks) {

    console.log(data);

  }

  openDialog(data: ITasks): void {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: data,
      width: 'auto',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }
}
