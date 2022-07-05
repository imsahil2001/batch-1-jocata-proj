import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:8081/batch1_controller/saveEmployeeDetails';
  constructor(private http: HttpClient) { }

  savePersonalDetails(data: any) {

    const requestOptions = { headers: new HttpHeaders({ 'content-type': "application/json" }) };

    return this.http
      .post<any>(this.baseUrl, JSON.stringify(data), requestOptions)
      .subscribe((response: any) => {
        console.log(response.emp_id);
      });
  }
}
