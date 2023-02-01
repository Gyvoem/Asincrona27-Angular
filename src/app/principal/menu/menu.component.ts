import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public authentication: AutenticacionService) {}
  //constructor(public authentication: AuthenticationService) { }

  userLogin = false;

  ngOnInit() {
    this.userLogin = this.authentication.isLoggedIn('');
    this.authentication.changeLoginStatus$.subscribe(
      (estado: boolean) => this.userLogin = estado
    );
  }

  logout(){
    this.authentication.logout();
  }

}
