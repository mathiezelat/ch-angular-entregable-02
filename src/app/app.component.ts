import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public alumnos = [
    {
      name: 'Juan',
      promedio: 8.5,
      top: false,
    },
    {
      name: 'Sofía',
      promedio: 9,
      top: false,
    },
    {
      name: 'Mariano',
      promedio: 10,
      top: true,
    },
    {
      name: 'Juliana',
      promedio: 6.5,
      top: false,
    },
    {
      name: 'Mateo',
      promedio: 8,
      top: false,
    },
  ];
}
