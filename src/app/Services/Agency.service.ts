import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { property, properties } from '../Types/properties.type';
import { Agency } from '../Types/Agency.type';
import { Agent } from '../Types/Agent.type';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  // Database URL
  private readonly DB_URL = "https://localhost:44350/api/Agency";
  constructor(private readonly http: HttpClient ,private auth:AuthService) {}
  // fetch(url,{headers:{}, body:{},method:"post"})
  // Handel All Request ==> use HTTP[Methods]
 
  GetAgencyById(id: any) {
    return this.http.get(this.DB_URL+"/"+id);
  }
  GetAllAgentsForAgency(id: number){
    return this.http.get<Agent[]>(this.DB_URL+"/"+id+"/agents");
  }
  GetAllAgencies(searchTerm: string = '', pageNumber: number = 1, pageSize: number = 10, sortColumn: string = '', sortDirection: string = 'asc'): Observable<any> {
    let params = new HttpParams()
      .set('SearchValue', searchTerm)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      .set('SortColumn', sortColumn)
      .set('SortDirection', sortDirection);
    return this.http.get<Agency[]>("https://localhost:44350/Admin/Agency",{params}); //return all agencies For Admin
  }
  deleteAgency(id:any)
  {
    return this.http.delete("https://localhost:44350/api/Admin/"+id)
  }
  // addAgent(agencyId: number ,agent: Agent): Observable<Agent> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<Agent>(this.DB_URL+"/"+{agencyId}+"/add-agency", agent);
  // }
  deleteAgentById(id: number) {
    return this.http.delete(this.DB_URL + "/" + id);
  }

 
}