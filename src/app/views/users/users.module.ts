import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    AllUsersComponent,
    CreateUsersComponent,
    EditUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
