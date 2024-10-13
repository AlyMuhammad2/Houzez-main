import { Component, OnInit } from '@angular/core';
import { Agencies, Agency } from '../../../../Types/Agency.type';
import { AgencyService } from '../../../../Services/Agency.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";
import { ProductService } from '../../../../Services/Product.service';

@Component({
  selector: 'app-get-agency',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  providers: [AgencyService],
  templateUrl: './get-agency.component.html',
  styleUrl: './get-agency.component.css'
})
export class GetAgencyComponent implements OnInit {
  Agencies: Agencies = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 6;
  sortColumn: string = '';
  sortDirection: string = 'asc';
  totalItems: number = 0;
  isModalVisible = false;
  selectedAgencyId: number | null =null;

  openModal(agencyId: number): void {
    this.selectedAgencyId = agencyId;
    this.isModalVisible = true;
    console.log(agencyId)
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedAgencyId = null;
  }
  constructor(private agencyService: AgencyService,private ProductService:ProductService) {}

  ngOnInit(): void {
    this.loadAgencies();
  }

  loadAgencies(): void {
    this.agencyService.GetAllAgencies(this.searchTerm, this.currentPage, this.pageSize, this.sortColumn, this.sortDirection).subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.Agencies = response.items; // Adjust based on the actual API response structure
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
    this.loadAgencies();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadAgencies();
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
    this.loadAgencies();
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
this.agencyService.deleteAgency(id).subscribe({
  next: () => {
    this.Agencies = this.Agencies.filter(agency => agency.id !== id);
    this.onSearch(); 
    console.log('Agency deleted successfully');
  },
  error: (err) => {
    console.log(err);
  }
});   
  }
}
