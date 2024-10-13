import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { property, properties } from '../Types/properties.type';
import { Product , Products } from '../Types/Product.type';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Database URL
  private readonly DB_URL = "https://localhost:44350/api";

  constructor(private readonly http: HttpClient) {}
  // fetch(url,{headers:{}, body:{},method:"post"})
  // Handel All Request ==> use HTTP[Methods]
  GetAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.DB_URL+"/Allproducts");
  }
  GetProductsByAgency(id: any) : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.DB_URL}/agency/${id}/products`);
  }
  GetProductsByAgent(id: any) : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.DB_URL}/agents/${id}/products`);
  }
  DeleteProduct(id: any,ProductType:any) {
    if(ProductType=="Apartment")
    return this.http.delete(this.DB_URL+"/Apartment/"+id);
else if(ProductType=="Villa")
    return this.http.delete(this.DB_URL+"/Villa/"+id);
else 
    return this.http.delete(this.DB_URL+"/House/"+id);

  }
}