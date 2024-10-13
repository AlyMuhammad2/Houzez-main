import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../../Services/Product.service';
import { HttpClient } from '@angular/common/http';
import { Product, Products } from '../../../../Types/Product.type';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() agencyid!: number|null; 
  @Input() agentid!: number|null; 

  Products: Products = [];

  constructor(private productservice: ProductService, private readonly http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Check if the show input changed and is now true
    if (changes['show'] && changes['show'].currentValue === true) {
      this.loadProducts(); // Call the method to load products
    }
  }

  loadProducts(): void {
    if (this.agencyid) {
      this.productservice.GetProductsByAgency(this.agencyid).subscribe({
        next: (data: Products) => {
          this.Products = data;
          console.log(data);
        },
        error: (err) => { console.log(err); },
      });
    }
   else if (this.agentid) {
      this.productservice.GetProductsByAgent(this.agentid).subscribe({
        next: (data: Products) => {
          this.Products = data;
          console.log(data);
        },
        error: (err) => { console.log(err); },
      });
    }
  }

  closeModal() {
    this.close.emit();  // Emit event to parent
  }

  deleteProduct(productId: number,productType:string) {
    // Handle delete logic here
this.productservice.DeleteProduct(productId,productType).subscribe({
  next: () => {
    this.Products = this.Products.filter(product => product.id !== productId);
    console.log('product deleted successfully');
  },
  error: (err) => {
    console.log(err);
  }
});     }
}
