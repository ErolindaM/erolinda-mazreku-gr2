import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { AllUsersComponent } from "./components/all-users/all-users.component";
import { CreateUsersComponent } from "./components/create-users/create-users.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

const routes:Routes=[
    {
        path:'users',component: UsersComponent, children:[
            {path:'all-users',component:AllUsersComponent},
            {path:'create-users',component:CreateUsersComponent},
            {path:'edit-user/:id',component:EditUserComponent},
            {path:'user-details/:id',component:UserDetailsComponent}

        ]
    }
];
export const UsersRoutingModule =RouterModule.forChild(routes);