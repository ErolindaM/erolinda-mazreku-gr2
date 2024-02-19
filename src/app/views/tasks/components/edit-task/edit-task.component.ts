import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../tasks-service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm:any=FormGroup;
  taskDetails:any;
  taskId:any;

  constructor(private route:ActivatedRoute,private tasksService:TasksService,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.taskId=params['taskId'];
    });
    this.editTaskForm=new FormGroup({
      title:new FormControl('',Validators.required)
    });
    this.fetchTaskDetails()
  }

  fetchTaskDetails(){
    this.taskDetails=this.tasksService.getTaskById(JSON.parse(this.taskId));
    this.fillInputs();
  }
  fillInputs(){
    this.editTaskForm.get('title').setValue(this.taskDetails.title);
  }
  onSubmit(){
    if(this.editTaskForm.valid){
      try{
        let payload={
          id:JSON.parse(this.taskId),
          title:this.editTaskForm.value.title
        }

        this.tasksService.updateTask(payload);
        this.editTaskForm.reset();
        window.alert('Task edited. Click OK to see all tasks.');
        this.router.navigateByUrl('/tasks/all-tasks');
      }catch(error:any){
        console.error('Error editing task:',error);
        window.alert('Failed to edit task.Please try again.');
      }
    }
  }
}
