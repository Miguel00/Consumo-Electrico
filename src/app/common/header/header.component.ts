import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _authService: AuthenticationService, public _router: Router) { }

  ngOnInit() {
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
