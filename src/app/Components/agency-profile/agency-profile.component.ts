import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agency-profile',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterLink, RouterModule],
  templateUrl: './agency-profile.component.html',
  styleUrl: './agency-profile.component.css'
})
export class AgencyProfileComponent {

}
