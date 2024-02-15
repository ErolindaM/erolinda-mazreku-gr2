import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails:any
  userId:any
  constructor(private userService:UserService,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.userId=params['userId'];
    });
   }

  ngOnInit(): void {
    this.fetchUserDetails();
  }
  fetchUserDetails(){
    this.userDetails=this.userService.getUserById(JSON.parse(this.userId));
  }

}
