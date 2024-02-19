import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../tasks-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  createTaskForm:any=FormGroup

  constructor(private tasksService:TasksService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.createTaskForm=new FormGroup({
      title:new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    if(this.createTaskForm.valid){
      try{
        this.tasksService.addTask(this.createTaskForm.value);
        this.createTaskForm.reset();
        window.alert('Task created.Click OK to see all tasks.');
        this.router.navigateByUrl('/tasks/all-tasks');
      }catch(error:any){
        if(error.message==='A task with these details already exists'){
        window.alert('A task with these details already exists. Please check your input.');
      }else{
        console.error('Error creating task:',error);
        window.alert('Failed to create task.Please try again.');
      }
      }
    }else{
      window.alert('Form is not valid.Please check your input.');
    }
  }
}
