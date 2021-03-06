import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán America';
  nombre2:string = 'lUcAs GAlveZ ChAmorRo';

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1250.5;
  fecha: Date = new Date();

  contrasena:string = 'k98d38f9fjs19dj';
  activar: boolean = false;

  idioma: string = 'fr';
  videoURL:string = 'https://www.youtube.com/embed/NXaKJDtjsHY';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
