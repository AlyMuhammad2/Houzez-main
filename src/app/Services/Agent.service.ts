import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent, Agent2 } from '../Types/Agent.type';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiUrl = 'https://localhost:44350/api';  

  constructor(private http: HttpClient) { }

  addAgent(agencyId: number, newAgent: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(agencyId)
    return this.http.post(`${this.apiUrl}/Agency/${agencyId}/add-agency`, newAgent, { headers });
  }
  GetAllAgents(searchTerm: string = '', pageNumber: number = 1, pageSize: number = 10, sortColumn: string = '', sortDirection: string = 'asc'): Observable<any> {
    let params = new HttpParams()
      .set('SearchValue', searchTerm)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      .set('SortColumn', sortColumn)
      .set('SortDirection', sortDirection);
    return this.http.get<Agent2[]>(`${this.apiUrl}/Admin/agents`,{params}); //return all agencies For Admin
  }
  deleteAgent(id:any)
  {
    return this.http.delete(`${this.apiUrl}/Agency/${id}`)
  }

}
