import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from '@angular/router';
import { TaskUpdateComponent } from './dialog/task-update/task-update.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksDataService } from '../tasks-data.service';
import { ITasks } from './models/tasks.model';
import { EMPTY, Observable, map, mergeMap, of, pluck } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TaskViewResolve implements Resolve<ITasks | undefined> {
  constructor(
    private dataService: TasksDataService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<ITasks | undefined> | Observable<never> |Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.dataService.getAlltasks().pipe(
        map( tasks1 => {
          console.log(tasks1);
          
          return tasks1.find(task =>{
            return task.id == id
          })
        })
      )
        // map((plan: ITasks) => {
        //   // if (plan) {
        //     return  plan.find(res =>{
        //       res.id == id
        //       return of(obj);
        //     })
        //   })
            
          // } 
          // else {
          //   this.router.navigate(['404']);
          //   return EMPTY;
          // // }
        
      // );
    }
    this.router.navigate(['404']);
    return EMPTY;
  }
}
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
      component:TaskViewComponent,
      resolve : 
      {
        tasksData : TaskViewResolve
      }
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