import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ErrorComponent } from "../error/error.component";
import { RouterLink } from '@angular/router';
import { ResetPasswordComponent } from '../header/reset-password/reset-password.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, ErrorComponent, RouterLink, ResetPasswordComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
