import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  longText = `
  Nos alegra comunicarle que su información ha sido aprobada por nuestro equipo. A continuación, le proporcionamos los detalles de su aprobación:
  `;

  shortText = `
  Además, le extendemos una cordial invitación a cargar una foto de autenticación donde aparezca usted sosteniendo su cédula. Puede hacerlo haciendo clic en el siguiente enlace:
  `;
  infoText = `
  Si requiere información adicional, no dude en ponerse en contacto con nuestro equipo de soporte.
  `;
  autenticacionFile: File | null = null;
  hojaVidaFile: File | null = null;

  handleFileChange(event: any, fileType: string): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      if (fileType === 'autenticacion' && file.type === 'image/png') {
        this.autenticacionFile = file;
      } else if (fileType === 'hojaVida' && file.type === 'application/pdf') {
        this.hojaVidaFile = file;
      } else {
        console.error('Archivo Invalido');
      }
    }
  }

  enviarDatos(): void {
    if (this.autenticacionFile && this.hojaVidaFile) {
      this.mostrarVentanaEmergente('Datos enviados correctamente');
    } else {
      this.mostrarVentanaEmergente('Por favor, suba ambos archivos antes de enviar.');
    }
  }

  mostrarVentanaEmergente(mensaje: string): void {
    alert(mensaje);
  }
}
