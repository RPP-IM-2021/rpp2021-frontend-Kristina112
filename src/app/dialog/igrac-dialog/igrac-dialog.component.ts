import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IgracService } from 'src/app/service/igrac.service';
import { Igrac } from 'src/app/model/igrac.model';
import { Nacionalnost } from 'src/app/model/nacionalnost.model';
import { Tim } from 'src/app/model/tim.model';
import { NacionalnostService } from 'src/app/service/nacionalnost.service';
import { TimService } from 'src/app/service/tim.service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {

  public flag: number;

  nacionalnosti: Nacionalnost[];

  timovi: Tim[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<IgracDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Igrac,
              public nacionalnostService: NacionalnostService,
              public timService: TimService,
              public igracService: IgracService ) { }

  ngOnInit(): void {
    this.nacionalnostService.getAllNacionalnost().subscribe(nacionalnosti =>
    this.nacionalnosti = nacionalnosti);

    this.timService.getAllTim().subscribe(timovi =>
      this.timovi = timovi);
  }

  public add(): void {
    this.igracService.addIgrac(this.data);
    this.snackBar.open('Uspešno dodat igrač ' + this.data.ime, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.igracService.updateIgrac(this.data);
    this.snackBar.open('Uspešno izmenjen igrač ' + this.data.ime, "U redu", {duration: 2000});
  }

  public delete(): void {
    this.igracService.deleteIgrac(this.data.id);
    this.snackBar.open("Uspešno obrisan igrač ' " + this.data.id, "U redu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'U redu', {duration:2000});
  }

  compareTo(a: any, b: any) {
    if (a === null || b === null) {
      return false;
    }
    return a.id === b.id;
  }

}