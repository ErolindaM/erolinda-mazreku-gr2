import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../users-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm:any=FormGroup;
  userDetails:any;
  userId:any;

  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['userId'];
    });
    this.editUserForm=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
    });
    this.fetchUserDetails()
  }

  fetchUserDetails(){
    this.userDetails=this.userService.getUserById(JSON.parse(this.userId));
    this.fillInputs();
  }
  fillInputs(){
    this.editUserForm.get('firstname').setValue(this.userDetails.firstname);
    this.editUserForm.get('lastname').setValue(this.userDetails.lastname);
    this.editUserForm.get('title').setValue(this.userDetails.title);
    this.editUserForm.get('status').setValue(this.userDetails.status);
  }
  onSubmit(){
    if(this.editUserForm.valid){
      try{
        let payload={
          id:JSON.parse(this.userId),
          firstname:this.editUserForm.value.firstname,
          lastname:this.editUserForm.value.lastname,
          title:this.editUserForm.value.title,
          status:this.editUserForm.value.status
        }

        this.userService.updateUser(payload);
        this.editUserForm.reset();
        window.alert('User edited. Click OK to see all users.');
        this.router.navigateByUrl('/users/all-users');
      }catch(error:any){
        console.error('Error editing user:',error);
        window.alert('Failed to edit user. Please try again.');
      }
    }
  }
}
