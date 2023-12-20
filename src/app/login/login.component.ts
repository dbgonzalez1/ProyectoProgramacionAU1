import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    // other dependencies
    private snackBar: MatSnackBar
  ) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.snackBar.open('Inicio de sesion Correcto!', 'Close', { duration: 3000 });
    }else {
      this.snackBar.open('Revise su Correo o Contraseña', 'Close', { duration: 3000 });
    }
  }
}
