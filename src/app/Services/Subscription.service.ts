import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Subscription, Subscriptions } from '../Types/subscription.type';
import { AgencyService } from './Agency.service';

@Injectable({
  providedIn: 'root'
})
export class subscriptionsService {
  // Database URL
  private readonly DB_URL = "https://localhost:44350/api/subscription";
  private readonly apiUrl = 'https://localhost:44350/api/Payment';

  constructor(private readonly http: HttpClient, private agencyserveice:AgencyService ) {}
  // fetch(url,{headers:{}, body:{},method:"post"})
  // Handel All Request ==> use HTTP[Methods]
  GetAllsubscription() : Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.DB_URL);
  }
  GetsubscriptionById(id: any) {
    return this.http.get(this.DB_URL+"/"+id);
  }
   GetAgencyAndSubscription(id: any): Observable<any> {
    return this.agencyserveice.GetAgencyById(id).pipe(
      switchMap((agency: any) => {
        const subscriptionId = agency.subscriptionId;
        console.log(subscriptionId) 
        return this.GetsubscriptionById(subscriptionId);
      })
    );
  }
  OnlinePayment(id: number) {
    const token = localStorage.getItem('token'); // Get the JWT token from localStorage (or however you store it)
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
     this.http.post(`${this.apiUrl}/subscribe/${id}`, {},{headers})
      .pipe(
      ).subscribe({
        next:(response:any)=>{
        
        window.location.href=response.url
        },
        error: (err) => { console.log(err) },
      })
  }
}