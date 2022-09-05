import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NacionalnostService } from 'src/app/service/nacionalnost.service';
import { Nacionalnost } from 'src/app/model/nacionalnost.model';

@Component({
  selector: 'app-nacionalnost-dialog',
  templateUrl: './nacionalnost-dialog.component.html',
  styleUrls: ['./nacionalnost-dialog.component.css']
})
export class NacionalnostDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NacionalnostDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Nacionalnost,
<<<<<<< HEAD
              public nacionalnostService: NacionalnostService ) { }
=======
              public artiklService: NacionalnostService ) { }
>>>>>>> master

  ngOnInit(): void {
  }

  public add(): void {
    this.nacionalnostService.addNacionalnost(this.data);
<<<<<<< HEAD
    this.snackBar.open('Uspešno dodata nacionalnost ' + this.data.naziv, 'U redu', {duration: 2000});
=======
    this.snackBar.open('Uspešno dodat nacionalnost ' + this.data.naziv, 'Uredu', {duration: 2000});
>>>>>>> master
  }

  public update(): void {
    this.nacionalnostService.updateNacionalnost(this.data);
<<<<<<< HEAD
    this.snackBar.open('Uspešno izmenjena nacionalnost ' + this.data.naziv, "U redu", {duration: 2000});
=======
    this.snackBar.open('Uspešno izmenjen nacionalnost ' + this.data.naziv, "Uredu", {duration: 2000});
>>>>>>> master
  }

  public delete(): void {
    this.nacionalnostService.deleteNacionalnost(this.data.id);
<<<<<<< HEAD
    this.snackBar.open("Uspešno obrisana nacionalnost ' " + this.data.id, "U redu", {duration: 2000});
=======
    this.snackBar.open("UspeŠno obrisan nacionalnost ' " + this.data.id, "Uredu", {duration: 2000});
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
