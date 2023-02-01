import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(login: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private autenticacion: AutenticacionService, private router: Router){}
  redireccion='/unitarios';

  //USUARIOS Y CONTRASEÑAS

  datos: any[]=[
      {username: 'stony', pass: '123456'},
      {username: 'luz', pass: '123456'},
      {username: 'araceli', pass: '123456'},
      {username: 'marwin', pass: '123456'},
    ]

    user: string = "";
    pass: string = "";
    logeado=false;
    errorLogin = "";


Logearse(){
//Ejecucion de una api para obtener credenciales
  if(this.user == "" || this.pass == ""){
  return;
// proceso si se valida las credenciales
}else{
// proceso si no se valida
for(let i=0; i<this.datos.length; i++){
  if(this.datos[i].username==this.user && this.datos[i].pass==this.pass){
    alert("Datos ingresado");
    this.autenticacion.login();
    this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = '/unitarios';
    this.router.navigate([this.redireccion]);
    this.logeado=true;
  }else{
    this.errorLogin = 'Los datos inválidos.'
  }
}
}

}
}

