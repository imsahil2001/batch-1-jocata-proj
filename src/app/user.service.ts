import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:3000/usersave';
  constructor(private http: HttpClient) { }



  savePersonalDetails(data: any) {
    return this.http
      .post<any>(this.baseUrl, JSON.stringify(data))
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
