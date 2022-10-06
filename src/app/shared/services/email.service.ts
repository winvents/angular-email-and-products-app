import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { EmailList } from '../model/email-list.model';
import { Email } from '../model/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private static API_URLS = {
    GET_ALL_EMAILS: `${environment.apiEmailUrl}/email`
  }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  public getEmails() {
    return this.http.get(EmailService.API_URLS.GET_ALL_EMAILS)
  }

}
