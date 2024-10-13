import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../../Services/property.service';

@Component({
  selector: 'app-properties-for-agency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-for-agency.component.html',
  styleUrl: './properties-for-agency.component.css'
})
export class PropertiesForAgencyComponent  {
  products: any[] = [];
  agencyId: number = 60; 


  constructor(private propertyservices: PropertyService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.propertyservices.getProducts(this.agencyId).subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error.error);
      }
    );
}
}