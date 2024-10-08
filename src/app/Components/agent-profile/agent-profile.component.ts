import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agent-profile',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, RouterModule],
  templateUrl: './agent-profile.component.html',
  styleUrl: './agent-profile.component.css'
})
export class AgentProfileComponent {

}
