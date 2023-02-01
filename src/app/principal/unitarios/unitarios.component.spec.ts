import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from '../login/login.component';


import { UnitariosComponent } from './unitarios.component';

describe('UnitariosComponent', () => {
  let component: UnitariosComponent;
  let fixture: ComponentFixture<UnitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitariosComponent , AppComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
