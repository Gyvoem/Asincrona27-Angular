import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { UnitariosComponent } from './unitarios/unitarios.component';
import { ErrorComponent } from './error/error.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    UnitariosComponent,
    ErrorComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[
    ErrorComponent,
    LoginComponent,
    MenuComponent,
    NotfoundComponent,
    UnitariosComponent,


  ],
})
export class PrincipalModule { }
