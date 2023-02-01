import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './principal/login/login.component';
import { MenuComponent } from './principal/menu/menu.component';
import { NotfoundComponent } from './principal/notfound/notfound.component';
import { UnitariosComponent } from './principal/unitarios/unitarios.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule, ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        NotfoundComponent,
        UnitariosComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'act-27'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('act-27');
  });

  it('Titulo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('angular');
  });
});
