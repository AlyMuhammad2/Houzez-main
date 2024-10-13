import { Component, OnInit } from '@angular/core';
import { Agents, Agent2, Agents2 } from '../../../../Types/Agent.type';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { AgentService } from '../../../../Services/Agent.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-get-agent',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  providers: [AgentService],
  templateUrl: './get-agents.component.html',
  styleUrl: './get-agents.component.css'
})
export class GetAgentComponent implements OnInit {
  Agents: Agents2 = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 6;
  sortColumn: string = '';
  sortDirection: string = 'asc';
  totalItems: number = 0;
  isModalVisible = false;
  selectedAgentId: number | null =null;
  isFreeAgents: boolean = false;

  openModal(agentId: number): void {
    this.selectedAgentId = agentId;
    this.isModalVisible = true;
    console.log(agentId)
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedAgentId = null;
  }
  constructor(private agentService: AgentService) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentService.GetAllAgents(this.searchTerm, this.currentPage, this.pageSize, this.sortColumn, this.sortDirection).subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.Agents = response.items; // Adjust based on the actual API response structure
        this.totalItems = response.totalItems; // Assuming your backend returns total items count
        console.log(this.totalItems)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSearch(): void {
    this.currentPage = 1; // Reset to first page on search
    this.loadAgents();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAgents();
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      // Toggle the sort direction if the same column is clicked
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new sort column and default sort direction to ascending
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.loadAgents();
  }
  getPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  onUpdate(id: number): void {
    console.log(`Update agency with ID: ${id}`);
  }

  onDelete(id: number): void {
    console.log(id);
this.agentService.deleteAgent(id).subscribe({
  next: () => {
    this.Agents = this.Agents.filter(agent => agent.id !== id);
    this.onSearch(); // Re-filter after deletion
    console.log('Agent deleted successfully');
  },
  error: (err) => {
    console.log(err);
  }
});   
  }
  onFreeAgentsToggle(): void {
    if(this.isFreeAgents==true)
    this.searchTerm = 'Free'; 
  else
  this.searchTerm='';
    this.loadAgents();
  }
}
