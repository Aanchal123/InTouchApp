import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client Side Error or network Error
      console.error(`An Error Occured: ${error.error.message}`);
    } else {
      console.error(`
      Backend Returned Code: ${error.status}, \n
      Body was : ${error.error}
      `);
    }
    return throwError(`Something bad happened at the client side`);
  }

  getContacts() : Observable<any> {
    return this.http.get('/assets/contacts_file.json')
    .pipe(
      map((res:any) => {        
        if(res){
          return res;
        }
      }),
      catchError(this.handleError)
    );
  }
}