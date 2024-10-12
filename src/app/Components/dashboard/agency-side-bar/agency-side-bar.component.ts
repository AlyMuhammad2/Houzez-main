import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-agency-side-bar',
  standalone: true,
  imports: [RouterLink, RouterModule,ReactiveFormsModule],
  templateUrl: './agency-side-bar.component.html',
  styleUrl: './agency-side-bar.component.css'
})
export class AgencySideBarComponent {
constructor(private _AuthService:AuthService ,private myroute:Router)
{
 

}
onLogout()
{
  this._AuthService.logout();
}
}
