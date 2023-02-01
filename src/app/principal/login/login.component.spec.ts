import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { PrincipalModule } from '../principal.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, AppComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        AppRoutingModule,
        PrincipalModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  

  // Probando evento click de button btnEnviar
  it('Testing de login desde boton Login TRUE', () => {
    // Pasando valores a los atrbutos user y pwd
    component.user = 'luz';
    component.pass = '123456';
    component.user = 'stony';
    component.pass = '123456';
    component.user = 'araceli';
    component.pass = '123456';
    component.user = 'marwin';
    component.pass = '123456';
    
    // Detectar el evento click del boton btnEnviar
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();
    
    // Prueba
    expect(component.logeado).toEqual(true);
    });
  
    // Probando evento click de button btnEnviar
    it('Testing de login desde boton Login false', () => {
      component.user = 'luz';
      component.pass = 'xxxxxx';
      component.user = 'stony';
      component.pass = 'xxxxxx';
      component.user = 'araceli';
      component.pass = 'xxxxxx';
      component.user = 'marwin';
      component.pass = 'xxxxxx';
      
      // Detectar el evento click del boton btnEnviar
      const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
      btnEnviar.nativeElement.click();
      
      // Prueba
      expect(component.logeado).toEqual(false);
      });
});
