import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskDetails:any
  taskId:any
  constructor(private tasksService:TasksService,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params=>{
      this.taskId=params['taskId'];
    });
  }

  ngOnInit(): void {
    this.fetchTaskDetails();
  }
  fetchTaskDetails(){
    this.taskDetails=this.tasksService.getTaskById(JSON.parse(this.taskId));
  }
}
