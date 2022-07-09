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
              public nacionalnostService: NacionalnostService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.nacionalnostService.addNacionalnost(this.data);
    this.snackBar.open('Uspešno dodata nacionalnost ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.nacionalnostService.updateNacionalnost(this.data);
    this.snackBar.open('Uspešno izmenjena nacionalnost ' + this.data.naziv, "U redu", {duration: 2000});
  }

  public delete(): void {
    this.nacionalnostService.deleteNacionalnost(this.data.id);
    this.snackBar.open("UspeŠno obrisana nacionalnost ' " + this.data.id, "U redu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'U redu', {duration:2000});
  }

}