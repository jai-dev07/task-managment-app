import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef ,MatDialog} from '@angular/material/dialog';
import { ITasks } from '../../models/tasks.model';
import { Priority, Status } from '../../models/task.enum';
@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  taskUpdateForm!:FormGroup;
  status = [
    {
    value:"In Progress",
    viewValue:Status.inProgress
  },
  {
    value:"Completed",
    viewValue:Status.completed
  }
]
priorities = [
  {
    value:"High",
    viewValue:Priority.high
  },
  {
    value:"Medium",
    viewValue:Priority.medium
  },
  {
    value:"Low",
    viewValue:Priority.low
  }
]
newTask:ITasks | any={"data":"data"};
  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITasks,
  ) {
    this.taskUpdateForm=new FormGroup({
      id:new FormControl(''),
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      priority: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),
      dueDate: new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
    console.log(this.data);
    if(this.data && this.data.id) 
      this.taskUpdateForm.patchValue({
        id:this.data.id,
        title:this.data.title,
        description:this.data.description,
        status:this.data.status,
        priority:this.data.priority,
        dueDate:this.data.dueDate
      })
  }
 
  addNew() {
    // this.dialogRef.close({ data :  })
    console.log(this.newTask);
    
  }
  onNoClick(): void {

    this.dialogRef.close();
  }
}
