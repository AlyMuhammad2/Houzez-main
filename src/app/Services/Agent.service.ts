import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiUrl = 'https://localhost:44350/api/Agency/';  

  constructor(private http: HttpClient) { }

  addAgent(agencyId: number, newAgent: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}${agencyId}/add-agency`, newAgent, { headers });
  }
}
