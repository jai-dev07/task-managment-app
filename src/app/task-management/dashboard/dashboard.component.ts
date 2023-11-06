import { Component, OnInit, ViewChild } from '@angular/core';
// import {CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { MatTable, MatTableDataSource } from '@angular/material/table';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';
import { ITasks } from '../models/tasks.model';
import { TaskUpdateComponent } from '../dialog/task-update/task-update.component';
import { Priority, Status } from '../models/task.enum';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TasksDataService } from 'src/app/tasks-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Priority = Priority;
  Status = Status;
  options = [
    {
      viewValue: "Title",
      value: "title"
    },
    {
      viewValue: "Status",
      value: "status"
    },
    {
      viewValue: "Priority",
      value: "priority"
    },
    {
      viewValue: "Due date",
      value: "dueDate"
    }
  ]
  searchForm: FormGroup;
  displayedColumns: string[] = ['position', 'title', 'description', 'status', 'priority', 'dueDate', 'actions'];

  // ELEMENT_DATA : ITasks[] = [
  //   {
  //     id: 2,
  //     position: 1,
  //     title: "Test task 1",
  //     description: "Description of task 1",
  //     status: Status.completed,
  //     priority: Priority.low,
  //     dueDate: "12-11-2023"
  //   },
  //   {
  //     id: 3,
  //     position: 2,
  //     title: "Test task 2",
  //     description: "Description of task 2",
  // status: Status.inProgress,
  //     priority: Priority.medium,
  //     dueDate: "10-11-2023"
  //   },
  //   {
  //     id: 5,
  //     position: 3,
  //     title: "Test task 3",
  //     description: "Description of task 3",
  //     status: Status.completed,
  // priority: Priority.medium,
  //     dueDate: "17-11-2023"
  //   }

  // ];
  dataSource!: MatTableDataSource<ITasks>;
  //  = new MatTableDataSource();
  @ViewChild('table', { static: true }) table?: MatTable<ITasks>;

  constructor(public dialog: MatDialog, private router: Router, private taskDataService: TasksDataService) {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
      searchOption: new FormControl('')
    })
  }
  ngOnInit(): void {
    this.taskDataService.getAlltasks().subscribe((res: ITasks[]) => {
      console.log(res);
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res
    })
  }
  filterChange(option: any) {

    console.log(option);

  }
  dragDisabled = true;
  // CdkDragDrop<MatTableDataSource<ITasks>
  drop(event: CdkDragDrop<MatTableDataSource<ITasks>>) {

    this.dragDisabled = true;
    const previousIndex = this.dataSource.data.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
    this.table?.renderRows();
  }

  edit(data: ITasks): void {
    this.openDialog(data);
    console.log(data);
  }
  create() {
    this.openDialog();
  }
  view(id: number): void {
    this.router.navigate(['view/' + id])
  }
  delete(data: ITasks) {
    // this.dataSource.data.splice(this.dataSource.data.indexOf(data),1)
    this.dataSource.data = this.dataSource.data.filter(res => res.id !== data.id)

  }
  applyFilter(filterValue: Event) {
    console.log("filter");
    let filterVal = (filterValue.target as HTMLInputElement).value;
    filterVal = filterVal.trim();
    filterVal = filterVal.toLowerCase();
    this.dataSource.filter = filterVal;
  }
  markAsComplete(index: number, currentStatus: string) {
    if (currentStatus == Status.inProgress) {
      this.dataSource.data[index].status = Status.completed
    }
  }
  openDialog(data?: ITasks): void {
    const dialogRef = this.dialog.open(TaskUpdateComponent, {
      data: data,
      width: 'auto',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((result: ITasks) => {
      console.log(result);
      if (result && result.id) {
        let index = this.dataSource.data.indexOf(this.dataSource.data.find(a => a.id == data?.id)!)
        console.log(this.dataSource.data[index])
        this.dataSource.data[index].description = result.description,
          this.dataSource.data[index].status = result.status,
          this.dataSource.data[index].priority = result.priority,
          this.dataSource.data[index].title = result.title,
          this.dataSource.data[index].dueDate = result.dueDate
      }
      if(result && result.id?.toString()=='') {
        let newdata = {...result,id:Math.floor((Math.random() * 100) + 1)}
        // this.dataSource.data = 
        this.dataSource.data.push(newdata)
      this.dataSource._updateChangeSubscription()
      }
    });
  }
}
