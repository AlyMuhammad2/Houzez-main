import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { property, properties } from '../Types/properties.type';
import { Agency } from '../Types/Agency.type';
import { Agent } from '../Types/Agent.type';
@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  // Database URL
  private readonly DB_URL = "https://localhost:44350/api/Agency";
  constructor(private readonly http: HttpClient) {}
  // fetch(url,{headers:{}, body:{},method:"post"})
  // Handel All Request ==> use HTTP[Methods]
  GetAllAgencies() : Observable<Agency[]> {
   
    return this.http.get<Agency[]>(this.DB_URL+"/Admin/Agency"); //return all agencies For Admin
  }
  GetAgencyById(id: any) {
    return this.http.get(this.DB_URL+"/api/Agency/"+id);
  }
  GetAllAgentsForAgency(id: any){
    return this.http.get<Agent[]>(this.DB_URL+{id}+"/agents");
  }

  // addAgent(agencyId: number ,agent: Agent): Observable<Agent> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.post<Agent>(this.DB_URL+"/"+{agencyId}+"/add-agency", agent);
  // }
}