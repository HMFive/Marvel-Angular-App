import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {AuthResponseData, AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import { Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  error: string = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let authObs: Subscription;

    const apiKey = form.value.apikey;

    localStorage.setItem('apikey',apiKey)
    console.log(apiKey)
    authObs = this.authService.login().subscribe(
      resData => {
        console.log("res",resData);
        this.authService.isLoggedIn = true;
        localStorage.setItem('apikey',apiKey)
        this.router.navigate(['/character-list']);
      },
      errorMessage => {
        console.log("err",errorMessage)
        this.authService.isLoggedIn = false;
        localStorage.removeItem('apikey')
        this.error = errorMessage.error.message;
      }
    );



    // authObs.subscribe(
    //   resData => {
    //     console.log("res",resData);
    //     this.authService.isLoggedIn = true;
    //
    //     this.router.navigate(['/character-list']);
    //   },
    //   errorMessage => {
    //     console.log("err",errorMessage)
    //     this.authService.isLoggedIn = false;
    //     this.error = errorMessage.error.message;
    //   }
    // )


    // this.authService.login(apiKey).sub(data => {
    //
    //   localsotrage ve yönlendirme
    // }, err => {
    //
    //   hata
    // });


    form.reset();
  }

}
