import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-agency-side-bar',
  standalone: true,
  imports: [RouterLink, RouterModule,ReactiveFormsModule, CommonModule ],
  templateUrl: './agency-side-bar.component.html',
  styleUrl: './agency-side-bar.component.css'
})
export class AgencySideBarComponent {
constructor(private _AuthService:AuthService ,private myroute:Router)
{
 

}
showSubMenu: boolean = false;

toggleSubMenu() {
  this.showSubMenu = !this.showSubMenu;
}
onLogout()
{
  this._AuthService.logout();
}
}
