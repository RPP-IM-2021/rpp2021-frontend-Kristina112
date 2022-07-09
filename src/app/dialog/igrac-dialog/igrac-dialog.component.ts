import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IgracService } from 'src/app/service/igrac.service';
import { Igrac } from 'src/app/model/igrac.model';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<IgracDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Igrac,
              public igracService: IgracService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.igracService.addIgrac(this.data);
    this.snackBar.open('Uspešno dodat igrac ' + this.data.ime, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.igracService.updateIgrac(this.data);
    this.snackBar.open('Uspešno izmenjen igrac ' + this.data.ime, "U redu", {duration: 2000});
  }

  public delete(): void {
    this.igracService.deleteIgrac(this.data.id);
    this.snackBar.open("UspeŠno obrisan igrac ' " + this.data.id, "U redu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'U redu', {duration:2000});
  }

}