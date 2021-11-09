import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http : HttpClient ) { }
  private extractData(res: any) {
    const body = res;
    return body || {};
  }

  getHomeServicedetails(): Observable<any> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(
     map(this.extractData),
     catchError(this.handleError<any>('addProduct'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
