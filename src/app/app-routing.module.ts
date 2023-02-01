import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandeactiveGuard } from './candeactive.guard';
import { ErrorComponent } from './principal/error/error.component';
import { LoginComponent } from './principal/login/login.component';
import { NotfoundComponent } from './principal/notfound/notfound.component';
import { UnitariosComponent } from './principal/unitarios/unitarios.component';

const routes: Routes = [
  {path:'', component: LoginComponent, title:'Iniciar sesion'},
  {path:'login', component: LoginComponent, title:'Iniciar sesion'},
  {path:'error', component: ErrorComponent, title:'Sin permisos'},

  {path:'unitarios/:username', component: UnitariosComponent, title:'Home ALL', canActivate: [CanactivateGuard]},
  {path:'unitarios', component: UnitariosComponent, title:'Home', canActivate:[CanactivateGuard], canDeactivate:[CandeactiveGuard]},

  {path:'**', component: NotfoundComponent, title: 'Pagina no encontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
