import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'console';


@Injectable({
  providedIn: 'root',
})
export class EmailService {

  private apiUrl = 'http://localhost:3000/send-email'; 

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    console.log("service");
    
    return this.http.post(this.apiUrl, emailData);
  }
}

