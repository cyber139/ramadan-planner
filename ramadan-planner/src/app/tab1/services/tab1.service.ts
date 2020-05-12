import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

const apiUrl='https://api.azanpro.com/times/today.json';



@Injectable({
  providedIn: 'root'
})


export class Tab1Service {
  

  constructor(private http:HttpClient) { }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError('Something bad happened; please try again later.');
  // }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getDataUser(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData)
      // catchError(this.handleError)
      );
  }


}
