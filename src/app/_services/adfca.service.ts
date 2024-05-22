import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdfcaService {

  constructor(private http: HttpClient) { }

 // Handle API errors
 handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  //Get Server Time
  getServerTime(p1, p2, _payload) {
    return this.http.post<any>('http://dev-mobilebus.adafsa.gov.ae/ADFCACommonService.svc/'+p1+'/'+p2+'/GetServerDateTime', _payload)
      .pipe(
        catchError(this.handleError)
      )
  }
}
