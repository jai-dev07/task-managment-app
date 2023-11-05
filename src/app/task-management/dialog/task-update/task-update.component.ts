import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef ,MatDialog} from '@angular/material/dialog';
import { ITasks } from '../../models/tasks.model';
@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  taskUpdateForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<TaskUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITasks,
  ) {
    this.taskUpdateForm=new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      priority: new FormControl(''),
      status: new FormControl(''),
      dueDate: new FormControl(''),
    })
   }

  ngOnInit(): void {
    console.log(this.data);
    this.taskUpdateForm.patchValue({
      title:this.data.title,
      description:this.data.description,
      status:this.data.status,
      priority:this.data.priority,
      dueDate:this.data.dueDate
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
