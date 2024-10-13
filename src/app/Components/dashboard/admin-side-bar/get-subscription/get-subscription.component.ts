import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { subscriptionsService } from '../../../../Services/Subscription.service';
import { sub } from '../../../../Types/subdata.type';
import { AdminService } from '../../../../Services/Admin.Service';

@Component({
  selector: 'app-get-subscription',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [subscriptionsService],
  templateUrl: './get-subscription.component.html',
  styleUrls: ['./get-subscription.component.css']
})
export class GetSubscriptionComponent implements OnInit {
  subscriptions: sub[] = []; // Changed from Agencies to Subscriptions
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 6;
  sortColumn: string = '';
  sortDirection: string = 'asc';
  totalItems: number = 0;

  constructor(private AdminService: AdminService) {}

  ngOnInit(): void {
    this.loadSubscriptions();
  }

  loadSubscriptions(): void {
    this.AdminService.GetAllsubscription(this.searchTerm, this.currentPage, this.pageSize, this.sortColumn, this.sortDirection).subscribe({
      next: (response: any) => {
        this.subscriptions = response.items; // Adjust based on the actual API response structure
        this.totalItems = response.totalItems; // Assuming your backend returns total items count
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSearch(): void {
    this.currentPage = 1; // Reset to first page on search
    this.loadSubscriptions();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadSubscriptions();
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.loadSubscriptions();
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  onUpdate(id: number): void {
    console.log(`Update subscription with ID: ${id}`);
  }

  
  
}
