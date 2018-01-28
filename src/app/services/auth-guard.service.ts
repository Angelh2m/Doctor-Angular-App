import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {



  constructor(
    private auth: AuthService,
  private router: Router ) { }

  canActivate(){

    return this.auth.user$.map( user => {

      if( user ) { return true; }


      this.router.navigate(['/']);
      return false;
    });



  }

}
