import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import {TableComponent} from "./table/table.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {initFlowbite} from "flowbite";
import {LoginComponent} from "./login/login.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableComponent, NavbarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  datos = [
    {
      cedula: '1234567890',
      nombres: 'Marlon',
      apellidos: 'Gomez',
      telefono: '123-456-7890',
      correo: 'marlong@gmail.com',
      direccion: 'Santo Domiingo',
      imagen: '../assets/imagen/usuario1.jpg'
    },
    {
      cedula: '0987654321',
      nombres: 'Jacinto',
      apellidos: 'Loor',
      telefono: '987-654-3210',
      correo: 'jloor.@gmail.com',
      direccion: 'Quevedo',
      imagen: '../assets/imagen/usuario2.jpg'
    },
    {
      cedula: '5678901234',
      nombres: 'Juan',
      apellidos: 'Smith',
      telefono: '567-890-1234',
      correo: 'juan.smith@gmail.com',
      direccion: 'Guayas',
      imagen: '../assets/imagen/usuario3.jpg'
    }
  ];

  aceptar(dato: any) {
    // Lógica para aceptar el dato
    console.log('Aceptar:', dato);
  }

  rechazar(dato: any) {
    // Lógica para rechazar el dato
    console.log('Rechazar:', dato);
  }

  confirmarAceptacion(dato: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Se aceptará este registro!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.aceptar(dato);
        Swal.fire('¡Aceptado!', 'El registro ha sido aceptado.', 'success');
      }
    });
  }

  confirmarRechazo(dato: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Se rechazará este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, rechazar',
      cancelButtonText: 'Cancelar'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.rechazar(dato);
        Swal.fire('¡Rechazado!', 'El registro ha sido rechazado.', 'error');
      }
    });
  }


}
