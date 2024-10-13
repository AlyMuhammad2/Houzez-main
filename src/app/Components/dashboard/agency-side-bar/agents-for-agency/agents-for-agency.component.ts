import { Component } from '@angular/core';
import { AgencyService } from '../../../../Services/Agency.service';
import { Agent } from '../../../../Types/Agent.type';
import { AuthService } from '../../../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agents-for-agency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agents-for-agency.component.html',
  styleUrl: './agents-for-agency.component.css'
})
export class AgentsForAgencyComponent {
  agents: Agent[] = []; 
constructor(private agencyService: AgencyService , private auth:AuthService  ){
}
agencyId :number | undefined;

ngOnInit(): void {
  this.getAllAgents();
}
getAllAgents() {
  this.agencyId=this.auth.agencyId;
  console.log(this.agencyId)
  this.agencyService.GetAllAgentsForAgency(Number(this.agencyId)).subscribe(
    (data: Agent[]) => {
      this.agents = data; 
    },
    error => {
      console.error('Error ', error.error);
    }
  );
}
reloadAgents() {
  this.getAllAgents();
}
deleteAgent(agentId: number) {
  if (confirm("Are you sure you want to delete this agent?")) {
    this.agencyService.deleteAgentById(agentId).subscribe(
      response => {
        this.agents = this.agents.filter(agent => agent.id !== agentId);
        console.log("Agent deleted successfully.");
      },
      error => {
        console.error("Error deleting agent:", error);
      }
    );
  }
}
}
