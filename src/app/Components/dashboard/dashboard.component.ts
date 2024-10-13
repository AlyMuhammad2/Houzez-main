import { Component } from '@angular/core';
import { AgentSideBarComponent } from "./agent-side-bar/agent-side-bar.component";
import { AgencySideBarComponent } from './agency-side-bar/agency-side-bar.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AgentSideBarComponent, AgencySideBarComponent, AdminSideBarComponent,ReactiveFormsModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
