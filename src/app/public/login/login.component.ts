import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../common/services/authentication.service';
import {SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = <any>{};

  constructor(public _authService: AuthenticationService,
              public _locker: SessionStorageService,
              public _router: Router ) { }
    
  ngOnInit() {
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this._authService.logIn(this.user.username, this.user.password).subscribe(
      (data) => {
          this._authService.user = data;
          this._authService.hasSession = true;
          this._locker.store('user', data);
          this._router.navigate(['/home']);
      },
      err => {
        console.error(err);
        this._authService.hasSession = false;
      }
    );
  }
}
