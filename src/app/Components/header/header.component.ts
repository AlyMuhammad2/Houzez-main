import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RegisterComponent,
    LoginComponent,
    RouterLink,
    ResetPasswordComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isNavVisible: boolean = false;
  isUserMenuVisible: boolean = false;
  constructor() { }
  ngOnInit(): void { }
  toggleNavVisibility(): void {
    this.isNavVisible = !this.isNavVisible;
  }
  toggleUserMenuVisibility(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }
}
