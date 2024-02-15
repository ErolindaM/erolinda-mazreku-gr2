import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../users-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  createUserForm:any=FormGroup;

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    this.createUserForm=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    if(this.createUserForm.valid){
      try{
        this.userService.addUser(this.createUserForm.value);
        this.createUserForm.reset();
        window.alert('User created.Click OK to see all users.');
        this.router.navigateByUrl('/users/all-users');
      }catch(error:any){
        if(error.message==='A user with these details already exists'){
        window.alert('A user with these details already exists. Please check your input.');
      }else{
        console.error('Error creating user:',error);
        window.alert('Failed to create user.Please try again.');
      }
      }
    }else{
      window.alert('Form is not valid.Please check your input.');
    }
  }
}
