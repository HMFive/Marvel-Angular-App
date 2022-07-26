import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

export interface AuthResponseData {
  apiKey: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  isLoggedIn;


  constructor(private http: HttpClient, private router: Router) {
  }

  login(){

    return this.http.get<AuthResponseData>(
      'https://gateway.marvel.com:443/v1/public/characters?'
    ).pipe(catchError(err => {
      if (err) {
        this.isLoggedIn = false;
      }
      return throwError(err);
    }))

    console.log()
  }

   autoLogin() {
     const apiKey = localStorage.getItem('apikey');
     if (localStorage.getItem('apikey')){
       this.isLoggedIn = true;
     }
     this.login();
   }

  logout(){
    localStorage.removeItem('apikey');
    this.router.navigate(['/auth']);
    this.isLoggedIn = false;
  }
}
