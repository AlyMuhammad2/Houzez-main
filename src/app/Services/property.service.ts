import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApartmentRequestDto } from '../Types/ApartmentRequestDto';
import { HouseRequestDTO } from '../Types/HouseRequestDTO';
import { VillaRequestDTO } from '../Types/VillaRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private mainUrl = 'https://localhost:44350/api/';
  private GetPro='https://localhost:44350/api/agency/60/products';

  private ApartmentUrl = 'https://localhost:44350/api/Apartment';  

  private HouseUrl = 'https://localhost:44350/api/House';  

  private VillaUrl = 'https://localhost:44350/api/Villa';

    constructor(private http: HttpClient) {}
  
    addProperty(formData: FormData): Observable<any> {
      return this.http.post(this.ApartmentUrl, formData);
    }
    addApartment(apartment: ApartmentRequestDto): Observable<any> {
      return this.http.post<any>(`${this.ApartmentUrl}`, apartment);
    }
    addHouse(house:HouseRequestDTO):Observable<any>{
      return this.http.post<any>(`${this.HouseUrl}`,house)
    }
    addVilla(villa:VillaRequestDTO):Observable<any>{
      return this.http.post<any>(`${this.VillaUrl}`,villa)
    }  
    getProducts(agencyId: number):Observable<any>{
      return this.http.get<any>(`${this.mainUrl}agency/${agencyId}/products`);
    }
}
