import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {DialogComponent} from "../dialog/dialog.component";
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatChipsModule} from "@angular/material/chips";

export interface dataTable{
  id?:number,
  nombre:string,
  FechaNacimiento:string,
  Telefono:string,
  Correo:string,
  Estado:string,

}

const data: dataTable[] = [
  {id:1,nombre: 'Juan Guanin', FechaNacimiento: '12/12/12', Telefono: '123456789', Correo: 'juan@espe.edu.ec', Estado:'En Revision'},
  {id:2,nombre: 'Mackensi Guanin', FechaNacimiento: '12/12/12', Telefono: '123456789', Correo: 'pedro@espe.edu.ec', Estado:'En Revision'},
  {id:3,nombre: 'Madame Lesly', FechaNacimiento: '12/12/12', Telefono: '123456789', Correo: 'lesly@espe.edu.ec', Estado:'En Revision'},
  {id:4,nombre: 'Juan Guanin', FechaNacimiento: '12/12/12', Telefono: '123456789', Correo: 'juan@espe.edu.ecc', Estado:'En Revision'},
  {id:5,nombre: 'Jonathan Lopex', FechaNacimiento: '12/12/12', Telefono: '123456789', Correo: 'lopex@espe.edu.ec', Estado:'En Revision'},
];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, DialogComponent, MatChipsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})


export class TableComponent {
@Input() dataToTable: dataTable[] = data;


  constructor(public dialog: MatDialog) {
  }


  data: dataTable[] = data;



  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }



}
