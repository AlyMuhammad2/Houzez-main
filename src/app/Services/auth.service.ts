import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private _httpClint: HttpClient) { }
  public isLoggedIn: boolean = false;
  // userdata = null;
  // decodeUserData() {
  //   let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
  //   let decodedToken:any = jwtDecode(encodedToken);
  //   this.userdata = decodedToken
  // }

  register(userData: object): Observable<any> {
    //console.log(userData);
    return this._httpClint.post('https://localhost:44350/api/Authentication/Register' , userData)
  }
  login(userData: object): Observable<any> {
    return this._httpClint.post('https://localhost:44350/api/Authentication', userData)
  }
  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }
  // Retrieve the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Logout (clear the token)
  logout(): void {
    localStorage.removeItem('token');
  }
  getUserId(token:any){
   const decodedToken: any = jwtDecode(token);
   const userid=Number(decodedToken.sub);
   console.log(userid);
   return userid;
  }
}