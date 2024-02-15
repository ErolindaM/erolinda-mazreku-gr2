import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";

const routes:Routes=[
    {
        path:'',component: AuthComponent, children:[
        {path:'login',component: LoginComponent},
        ]
    }
];
export const AuthRoutingModule =RouterModule.forChild(routes);