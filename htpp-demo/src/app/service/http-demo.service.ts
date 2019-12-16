import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { throwError } from 'rxjs';
import { map , catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDemoService {

  constructor(private _http : Http) { 
  }

  stroreServer(serevers : any[])
  {
    const header = new Headers( { 'Content-Type' : 'application/json'});
    return this._http.put('https://angular-http-demo-6e774.firebaseio.com/data.json', serevers, { headers : header  });
  }

  getServers()
  {
    // https://angular-http-demo-6e774.firebaseio.com/data for error
    return this._http.get('https://angular-http-demo-6e774.firebaseio.com/data.json').pipe(
      map(
      (response : Response ) => {
        const data = response.json();        
        
        for(const server of data )
        {
          server.name = "LOCAL_SERVER " + server.name;
        }
        return data;
      }
    )).pipe( catchError( error => {
      return throwError('Some thing went wrong')
    }));
  }
}
  