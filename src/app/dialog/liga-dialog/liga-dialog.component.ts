import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/model/liga.model';
import { LigaService } from 'src/app/service/liga.service';

@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LigaDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Liga,
              public ligaService: LigaService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.ligaService.addLiga(this.data);
<<<<<<< HEAD
    this.snackBar.open('Uspešno dodata liga ' + this.data.naziv, 'U redu', {duration: 2000});
=======
    this.snackBar.open('UspeÅ¡no dodat lige ' + this.data.naziv, 'Uredu', {duration: 2000});
>>>>>>> master
  }

  public update(): void {
    this.ligaService.updateLiga(this.data);
<<<<<<< HEAD
    this.snackBar.open('Uspešno izmenjena liga ' + this.data.naziv, "U redu", {duration: 2000});
=======
    this.snackBar.open('UspeÅ¡no izmenjen lige ' + this.data.naziv, "Uredu", {duration: 2000});
>>>>>>> master
  }

  public delete(): void {
    this.ligaService.deleteLiga(this.data.id);
<<<<<<< HEAD
    this.snackBar.open("Uspešno obrisana liga ' " + this.data.id, "U redu", {duration: 2000});
=======
    this.snackBar.open("UspeÅ no obrisan liga ' " + this.data.id, "Uredu", {duration: 2000});
>>>>>>> master
  }

  public cancel(): void {
    this.dialogRef.close();
<<<<<<< HEAD
    this.snackBar.open("Odustali ste", 'U redu', {duration:2000});
  }

}
=======
    this.snackBar.open("Odustali ste", 'Uredu', {duration:2000});
  }

}
>>>>>>> master
