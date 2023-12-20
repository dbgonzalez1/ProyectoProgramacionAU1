import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {TableComponent} from "../table/table.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatInputModule, FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  constructor(public dialog: MatDialog,private snackBar:MatSnackBar) { }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Acción confirmada', 'Cerrar', {
          duration: 2000,
        });      } else {
        this.snackBar.open('Acción cancelada', 'Cerrar', {
          duration: 2000,
        });      }
    });
  }

}

