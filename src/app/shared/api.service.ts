import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserIndikatoren } from './UserIndikatoren.model';
import { Filter } from './Filter.model';
import { TierwohlIndikatorenComponent } from '../components/tierwohl-indikatoren/tierwohl-indikatoren.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 baseUrl: string = 'http://localhost:4200/api/';
// /baseUrl: string = 'https://daten.ktbl.de/ws-bwa/';

  endpoint_filteranzahl: string = 'filteranzahl';
  refTierwohlIndikatoren: TierwohlIndikatorenComponent;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /*  postUserIndikatoren(userIndikatoren : UserIndikatoren) : Filter {
    return this.postDataToWebservice(this.endpoint_filteranzahl, userIndikatoren);
  } */

 /*  getDataFromWebservice(endPoint : string, paramsObject: any) : Observable<Object>  {
    let serviceUrl: string = this.baseUrl + endPoint;

    return this.http.get(
      serviceUrl,
      {
        params: new HttpParams({
          fromObject: paramsObject
        })
      }).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
 */

 /*  postDataToWebservice(endPoint : string, body: any) : any {
  let serviceUrl: string = this.baseUrl + endPoint;

  this.http.post(serviceUrl, body).pipe(retry(3), catchError(this.handleError)).subscribe(
    (response: any) =>{

      this.refTierwohlIndikatoren.filter = response;

      return response;
    }
  );

} */


  postDataToWebservice( body: UserIndikatoren) : any {
  let serviceUrl: string = this.baseUrl+this.endpoint_filteranzahl
  return this.http.post(serviceUrl,body).pipe(retry(1), catchError(this.handleError))
} 

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
