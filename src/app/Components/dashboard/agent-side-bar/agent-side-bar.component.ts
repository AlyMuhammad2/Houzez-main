import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-agent-side-bar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './agent-side-bar.component.html',
  styleUrl: './agent-side-bar.component.css'
})
export class AgentSideBarComponent {

}
