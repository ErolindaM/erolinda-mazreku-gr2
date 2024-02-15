import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class AuthService{
    private validCredentials=[
        {email:'user1@example.com',password:'password1'},
        {email:'user2@example.com',password:'password2'},
    ];

    login(credentials:{email:string; password:string}):Observable<boolean>{
        return of(this.isValidCredentials(credentials)).pipe(delay(1000));
    }

    private isValidCredentials(credentials:{email:string; password:string}):boolean{
        return this.validCredentials.some(
            (validCreds)=>validCreds.email===credentials.email && validCreds.password===credentials.password
        );
    }
}