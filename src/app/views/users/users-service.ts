import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class UserService{
    private localStorageKey='users';

    constructor(){
        this.initUsers();
    }

    initUsers(){
        if(!localStorage.getItem(this.localStorageKey)){
            localStorage.setItem(this.localStorageKey,JSON.stringify([]));
        }
    }

    getUsers():any[]{
        const users=localStorage.getItem(this.localStorageKey);
        return users?JSON.parse(users):[];
    }

    addUser(user:any){
        const users=this.getUsers();
        const isDuplicate=users.some(existingUser=>
            existingUser.firstname===user.firstname &&
            existingUser.lastname===user.lastname &&
            existingUser.title===user.title &&
            existingUser.status===user.status
        );
        
        if(isDuplicate){
            throw new Error('A user with these details already exists.');
        }
        user.id=new Date().getTime();
        users.push(user);
        localStorage.setItem(this.localStorageKey,JSON.stringify(users));
    }
    deleteUser(userId:number){
        let users=this.getUsers();
        users=users.filter(user=>user.id!==userId);
        localStorage.setItem(this.localStorageKey,JSON.stringify(users));
    }
    
    getUserById(userId:number):any{
        const users=this.getUsers();
        return users.find(user=>user.id===userId);
    }

    updateUser(updatedUser: any) {
        let users = this.getUsers();
        const index = users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          users[index] = updatedUser;
          localStorage.setItem(this.localStorageKey, JSON.stringify(users));
        }
      }
    }