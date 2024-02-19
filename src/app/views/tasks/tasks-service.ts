import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TasksService{
    private localStorageKey='tasks';

    constructor(){
        this.initTasks();
    }

    initTasks(){
        if(!localStorage.getItem(this.localStorageKey)){
            localStorage.setItem(this.localStorageKey,JSON.stringify([]));
        }
    }

    getTasks():any[]{
        const tasks=localStorage.getItem(this.localStorageKey);
        return tasks?JSON.parse(tasks):[];
    }

    addTask(task:any){
        const tasks=this.getTasks();
        const isDuplicate=tasks.some(existingTask=>
            existingTask.title===task.title
        );
        
        if(isDuplicate){
            throw new Error('A task with these details already exists.');
        }
        task.id=new Date().getTime();
        tasks.push(task);
        localStorage.setItem(this.localStorageKey,JSON.stringify(tasks));
    }
    
    deleteTask(taskId:number){
        let tasks=this.getTasks();
        tasks=tasks.filter(task=>task.id!==taskId);
        localStorage.setItem(this.localStorageKey,JSON.stringify(tasks));
    }
    
    getTaskById(taskId:number):any{
        const tasks=this.getTasks();
        return tasks.find(task=>task.id===taskId);
    }

    updateTask(updatedTask: any) {
        let tasks = this.getTasks();
        const index = tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          tasks[index] = updatedTask;
          localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
        }
      }
    }