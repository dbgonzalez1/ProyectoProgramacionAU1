import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  form:FormGroup;

  constructor(
    public fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.ValidadorCedula = this.ValidadorCedula.bind(this);

    this.form = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(10), this.ValidadorCedula]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha:['', [Validators.required, this.fechaValida.bind(this)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      educacion: ['', Validators.required]
    });
  }

  valideInputNumber(event: KeyboardEvent) {
    const tecla = event.key;
    const codigoTecla = event.keyCode || event.which;
    if (/[0-9]|ArrowLeft|ArrowRight|Delete|Backspace|'+'/.test(tecla)) {
      return true;
    }
    return false;
  }

  valideInputText(event: KeyboardEvent) {
    const tecla = event.key;
    const codigoTecla = event.keyCode || event.which;
    if (/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]|ArrowLeft|ArrowRight|Delete|Backspace/.test(tecla) && !/[0-9\-"'¨´@¿?^]/.test(tecla)) {
      return true;
    }
    event.preventDefault();
    return false;
  }

  onSubmit(): void {
    const formData = this.form.value;
    console.log('Formulario Enviado:', formData);
  }

  ValidadorCedula(control: AbstractControl): { [key: string]: any } | null {
    const cedula = control.value;
    if (cedula && cedula.length === 10) {
      const isValid = this.CedulaEcuatoriana(cedula);

      if (!isValid) {
        return { 'cedulaInvalida': true };
      }
    }
    return null;
  }

  private CedulaEcuatoriana(cedula: string) {
    if (cedula.length === 10) {  
      const digitoRegion = cedula.substring(0, 2);
        if (digitoRegion >= String(0) && digitoRegion <= String(24)) {
          const ultimoDigito = Number(cedula.substring(9, 10));
          const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
  
        let numeroUno: any = cedula.substring(0, 1);
        numeroUno = (numeroUno * 2);
        if (numeroUno > 9) {
          numeroUno = (numeroUno - 9);
        }
  
        let numeroTres: any = cedula.substring(2, 3);
        numeroTres = (numeroTres * 2);
        if (numeroTres > 9) {
          numeroTres = (numeroTres - 9);
        }
  
        let numeroCinco: any = cedula.substring(4, 5);
        numeroCinco = (numeroCinco * 2);
        if (numeroCinco > 9) {
          numeroCinco = (numeroCinco - 9);
        }
  
        let numeroSiete: any = cedula.substring(6, 7);
        numeroSiete = (numeroSiete * 2);
        if (numeroSiete > 9) {
          numeroSiete = (numeroSiete - 9);
        }
  
        let numeroNueve: any = cedula.substring(8, 9);
        numeroNueve = (numeroNueve * 2);
        if (numeroNueve > 9) {
          numeroNueve = (numeroNueve - 9);
        }
  
        const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
        const sumaTotal = (pares + impares);
  
        const primerDigitoSuma = String(sumaTotal).substring(0, 1);
        const decena = (Number(primerDigitoSuma) + 1) * 10;
  
        let digitoValidador = decena - sumaTotal;
  
        if (digitoValidador === 10) {
          digitoValidador = 0;
        }
  
        if (digitoValidador === ultimoDigito) {
          return true;
        } else {
          return false;
        }
  
      } else {
        return false;
      }
    } else {
      return false;
    }
  
  }
  fechaValida(control: AbstractControl): { [key: string]: any } | null {
    const fechaIngresada = control.value;
  
    if (fechaIngresada) {
      const fechaActual = new Date();
      const fechaSeleccionada = new Date(fechaIngresada);
  
      if (fechaSeleccionada > fechaActual) {
        return { 'fechaInvalida': true };
      }
    }
  
    return null;
  }

}
