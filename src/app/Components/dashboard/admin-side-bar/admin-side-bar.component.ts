import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
@Component({
  selector: 'app-admin-side-bar',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {
  constructor(private _AuthService:AuthService ,private myroute:Router)
  {
   
  
  }
  onLogout()
  {
    this._AuthService.logout();
  }
}