import {AfterViewInit, Component, OnInit} from '@angular/core';
import M from 'materialize-css';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{

  isAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    M.AutoInit();
    // this.authService.isLoggedIn.subscribe(log => {
    //   this.isAuthenticated = log;
    // })
    console.log(this.isAuthenticated);
  }

  onLogout() {
    this.authService.logout();
  }
}
