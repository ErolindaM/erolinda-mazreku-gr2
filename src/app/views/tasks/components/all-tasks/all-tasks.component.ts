import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks-service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  taskList:any = []
  deleteTaskModal:boolean = false
  clickedTaskData:any
  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.fetchTasks()
  }

  fetchTasks(){
    this.taskList=this.tasksService.getTasks();
  }

  deleteTask(item:any){
    this.clickedTaskData = item
    this.deleteTaskModal = true
  }
  deleteTaskFromTable(taskId: number) {
    this.tasksService.deleteTask(taskId);
    this.fetchTasks();
    window.alert('Task deleted, Click ok to see all tasks')
    this.deleteTaskModal = false
  }

  closeDeleteTaskModal(){
    this.deleteTaskModal = false
  }
}
