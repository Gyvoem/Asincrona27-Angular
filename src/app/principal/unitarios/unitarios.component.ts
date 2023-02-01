import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unitarios',
  templateUrl: './unitarios.component.html',
  styleUrls: ['./unitarios.component.css']
})
export class UnitariosComponent {
  constructor(private rutaActiva: ActivatedRoute) { }
}
