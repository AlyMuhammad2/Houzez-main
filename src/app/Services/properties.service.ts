import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { property, properties } from '../Types/properties.type';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  // Database URL
  private readonly DB_URL = "http://rstatecompany.runasp.net/api/Allproducts";

  constructor(private readonly http: HttpClient) {}
  // fetch(url,{headers:{}, body:{},method:"post"})
  // Handel All Request ==> use HTTP[Methods]
  GetAllProperties() : Observable<property[]> {
    return this.http.get<property[]>(this.DB_URL);
  }
  GetPropertyById(id: any) {
    return this.http.get(this.DB_URL+"/"+id);
  }
}
