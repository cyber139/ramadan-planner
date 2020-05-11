import { Injectable, Input } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Tab1Page } from "../app/tab1/tab1.page";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

// const apiUrl = "https://mpt.i906.my/mpt.json?code=kdh-4&filter=1";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url;
  constructor(private http: HttpClient) {
    console.log("Hai Snoot Dwight");
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error("An error occured:", error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status},` + `body was: ${error.error}`
  //     );
  //   }
  //   return throwError("Something bad happened; please try again later.");
  // }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || {};
  // }

  // getDataUser(): Observable<any> {
  //   return this.http
  //     .get(apiUrl, httpOptions)
  //     .pipe(map(this.extractData), catchError(this.handleError));
  // }
  //API prayer
  getPrayer(location1, location2) {
    return this.http.get(
      "https://mpt.i906.my/api/prayer/" + location1 + "," + location2
    );
    // .pipe(map((res: any) => res.json()));
  }
  //API prayer
}
