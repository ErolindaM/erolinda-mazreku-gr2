import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users-service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  userList:any = []
  deleteUserModal:boolean = false
  clickedUserData:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.userList=this.userService.getUsers();
  }

  deleteUser(item:any){
    this.clickedUserData = item
    this.deleteUserModal = true
  }
  deleteUserFromTable(userId: number) {
    this.userService.deleteUser(userId);
    this.fetchUsers();
    window.alert('User deleted, Click ok to see all users')
    this.deleteUserModal = false
  }

  closeDeleteUserModal(){
    this.deleteUserModal = false
  }
}
