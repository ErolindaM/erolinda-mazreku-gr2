import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";


const routes:Routes=[
    {path:'',component:ViewsComponent,children:[
    {path:'',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
]}
];
export const ViewsRoutingModule =RouterModule.forChild(routes);