import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { sub } from '../Types/subdata.type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // Database URL
  private readonly DB_URL = "https://localhost:44350/api/Admin/";

  constructor(private readonly http: HttpClient) {}

  GetAllsubscription(searchTerm: string = '', pageNumber: number = 1, pageSize: number = 10, sortColumn: string = '', sortDirection: string = 'asc'): Observable<any> {
    let params = new HttpParams()
      .set('SearchValue', searchTerm)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      .set('SortColumn', sortColumn)
      .set('SortDirection', sortDirection);
    return this.http.get<sub[]>(this.DB_URL+"subscriptions",{params});
  }
  
    
  
}