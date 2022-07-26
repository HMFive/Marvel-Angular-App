import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const APIKey = localStorage.getItem('apikey');

    //req.params['apikey'] =  getAPI;
    //req.params.append('apikey', APIKey)

    let params = new HttpParams();

    params = params.set('apikey', APIKey);
    console.log("r1",params)

    req.params.keys().forEach((item) => {
      params = params.set(item, req.params.get(item))
    });

    const authReq = req.clone({params});
    return next.handle(authReq).pipe(catchError(err => {
      console.log(err.status)
      return throwError(err);
    }));
  }

}
