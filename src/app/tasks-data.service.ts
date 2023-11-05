import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasks } from './task-management/models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {

  constructor(private http:HttpClient) {

   }

   getAlltasks() : Observable<ITasks[]> {
      return this.http.get<ITasks[]>('app/data/taskData.json');
   }
}
