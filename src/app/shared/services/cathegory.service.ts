import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CathegoryService {

  constructor(private httpClient: HttpClient) {}

  private static API_URLS = {
    GET_ALL_CATHEGORIES: `${environment.apiProductUrl}/categoria`,
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

  public getCathegories() {
    return this.httpClient.get(CathegoryService.API_URLS.GET_ALL_CATHEGORIES)
  }

}
