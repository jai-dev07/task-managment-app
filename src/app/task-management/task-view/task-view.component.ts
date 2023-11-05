import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksDataService } from 'src/app/tasks-data.service';
import { ITasks } from '../models/tasks.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  taskDetail!:ITasks;
  constructor(
    private dataService : TasksDataService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.dataService.getAlltasks().subscribe(res =>{
    //   console.log(res);
      
    // })
    this.route.data.subscribe(({tasksData})=>{
      this.taskDetail = tasksData
      console.log(tasksData);

    })
  }

}
