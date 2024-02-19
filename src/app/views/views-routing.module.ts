import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";


const routes:Routes=[
    {path:'',component:ViewsComponent,children:[
    {path:'',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
    {path:'',loadChildren:()=>import('./tasks/tasks.module').then(m=>m.TasksModule)}
]}
];
export const ViewsRoutingModule =RouterModule.forChild(routes);