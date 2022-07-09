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
              public artiklService: NacionalnostService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.nacionalnostService.addNacionalnost(this.data);
    this.snackBar.open('Uspešno dodat nacionalnost ' + this.data.naziv, 'Uredu', {duration: 2000});
  }

  public update(): void {
    this.nacionalnostService.updateNacionalnost(this.data);
    this.snackBar.open('Uspešno izmenjen nacionalnost ' + this.data.naziv, "Uredu", {duration: 2000});
  }

  public delete(): void {
    this.nacionalnostService.deleteNacionalnost(this.data.id);
    this.snackBar.open("UspeŠno obrisan nacionalnost ' " + this.data.id, "Uredu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'Uredu', {duration:2000});
  }

}
