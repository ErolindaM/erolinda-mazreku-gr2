import { RouterModule, Routes } from "@angular/router";
import { AllTasksComponent } from "./components/all-tasks/all-tasks.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";
import { TaskDetailsComponent } from "./components/task-details/task-details.component";
import { TasksComponent } from "./tasks.component";
import { CreateTaskComponent } from "./components/create-task/create-task.component";

const routes:Routes=[
    {
        path:'tasks',component: TasksComponent, children:[
            {path:'all-tasks',component:AllTasksComponent},
            {path:'create-task',component:CreateTaskComponent},
            {path:'edit-task/:id',component:EditTaskComponent},
            {path:'task-details/:id',component:TaskDetailsComponent}

        ]
    }
];
export const TasksRoutingModule =RouterModule.forChild(routes);