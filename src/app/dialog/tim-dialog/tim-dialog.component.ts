import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/model/liga.model';
import { Tim } from 'src/app/model/tim.model';
import { LigaService } from 'src/app/service/liga.service';
import { TimService } from 'src/app/service/tim.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit {

  public flag: number;

  tim: Tim[];
  liga: Liga[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<TimDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Tim,
              public timService: TimService,
              public ligaService: LigaService ) { }

  ngOnInit(): void {
    this.ligaService.getAllLiga().subscribe(liga =>
    this.liga = liga);
  }

  public add(): void {
    this.timService.addTim(this.data);
    this.snackBar.open('Uspešno dodata tim ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public update(): void {
    this.timService.updateTim(this.data);
    this.snackBar.open('Uspešno izmenjena tim ' + this.data.id, "Uredu", {duration: 2000});
  }

  public delete(): void {
    this.timService.deleteTim(this.data.id);
    this.snackBar.open("UspeŠno obrisana porudžbina ' " + this.data.id, "Uredu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'Uredu', {duration:2000});
  }

}