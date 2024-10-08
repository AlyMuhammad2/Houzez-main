import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import  {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup;
constructor(private _AuthService:AuthService ,private myroute:Router){
  this.loginForm=new FormGroup({
    email : new FormControl(null,[
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
    ]),
    password : new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),
  })
 }

 handelLogin(loginForm:FormGroup)
  {
     if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe({
        next : (response:any)=> {
        this._AuthService.storeToken(response.token);
        const decodedToken: any = jwtDecode(response.token);
        const userRole = decodedToken.Roles;
        const userid=decodedToken.sub;
        localStorage.setItem("userid",userid);
       if(userRole=="Agency")
        this.myroute.navigate(["/dashboard"]);
      else if(userRole=="Agent")
        this.myroute.navigate(["/dashboard"]);
      else if(userRole=="Admin")
        this.myroute.navigate(["/dashboard"]);
        },

        error : (err)=> console.log(err)
      })
     }
  }
}

