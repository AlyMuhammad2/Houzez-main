import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseUrl = 'https://localhost:44350/api';  // قاعدة URL للـ API

  constructor(private http: HttpClient) { }

  // الدالة لإضافة فيلا
  addVilla(villaData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/villa`, villaData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`  // إضافة التوكين من الـ localStorage
      })
    });
  }

  // الدالة لإضافة شقة
  addApartment(apartmentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/apartment`, apartmentData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

  // الدالة لإضافة بيت
  addHouse(houseData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/house`, houseData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }
}
