import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  detallesGenerales = `
  Nos alegra comunicarle que su información ha sido aprobada por nuestro equipo. 
  A continuación, le proporcionamos los detalles de su aprobación:`;

  validacion = `
  Además, le extendemos una cordial invitación a cargar una foto de autenticación 
  donde aparezca usted sosteniendo su cédula. Puede hacerlo haciendo clic en el siguiente enlace:`;

  ayudaGeneral = `
  Si requiere información adicional, no dude en ponerse en contacto con nuestro equipo de soporte.`;

  negacionGeneral = ` Lamentamos informarle que los datos proporcionados no han sido aprobados por nuestro equipo. 
  A continuación, encontrará los detalles de la negación:`;

  negacionDatos =` Desafortunadamente, no cumple con los requisitos necesarios para aprobar su solicitud en esta ocasión. 
  Puede intentarlo nuevamente llenando el formulario mediante el siquiente botón.`;

  negacionGeneral2 = `Agradecemos su interés en nuestra aplicación y lamentamos cualquier inconveniente que esto pueda causar.`;

  aprobacionGeneral = `¡Nos complace informarte que tu registro ha sido enviado de forma exitosa! Agradecemos tu interés en completar nuestro 
  formulario. A continuación, encontrarás los detalles de tu registro:`;

  ingresoInformacion = `Hemos recibido tus datos y estamos revisando cuidadosamente la información proporcionada. 
  Actualmente, tus datos están en proceso de validación por nuestro equipo. Te notificaremos tan pronto como la validación sea completada.`;

  validacionDocumentos = `Nos complace informarte que la foto y el documento que enviaste para la validación de tu perfil ha sido revisada y 
  validada exitosamente por nuestro equipo. Apreciamos tu cooperación en este proceso y queremos felicitarte por 
  completar con éxito el paso de validación`;

  documentosValidos = `La foto y el documento que has proporcionado cumple con nuestros requisitos y ahora tu perfil está completamente validado. 
  Esto significa que tienes acceso completo a todas las funcionalidades y beneficios de nuestra plataforma.`;

  denegacionDocumentos = `Lamentamos informarte que la foto y el documento que enviaste para la validación de tu perfil ha sido denegada por nuestro equipo. 
  Tras revisar cuidadosamente la imagen y el documento, hemos determinado que no cumple con nuestros requisitos de validación.
  `;
  denegacionDocumentos1 = `Entendemos que esto puede resultar decepcionante y te pedimos disculpas por cualquier inconveniente que esto pueda haber causado. Para asegurarnos de mantener la integridad de nuestros perfiles, es importante que la foto cumpla con nuestros criterios establecidos.
  `;
  denegacionDocumentos2 = `Te recomendamos enviar una nueva foto que cumpla con los requisitos mencionados en nuestras pautas. Si necesita más información, no dude en ponerse en contacto con nuestro equipo de soporte
  `;
  denegacionDocumentos3 = `Agradecemos tu comprensión y tu interés en completar la validación de tu perfil. Esperamos recibir una nueva foto y documento que cumpla con nuestros requisitos para poder completar exitosamente el proceso de validación.
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
