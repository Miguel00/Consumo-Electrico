import { Component } from '@angular/core';
import { AuthenticationService } from './common/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this._authService.logout();
  }
}
