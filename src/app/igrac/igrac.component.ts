import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IgracDialogComponent } from '../dialog/igrac-dialog/igrac-dialog.component';
import { Igrac } from '../model/igrac.model';
import { IgracService } from '../service/igrac.service';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit {

  displayedColumns = ['id', 'ime', 'prezime', "brojReg", "datumRodjenja"];

  dataSource: MatTableDataSource<Igrac>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public IgracService: IgracService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.IgracService.getAllIgrac().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          default: return "default";
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, ime: string, prezime: string, brojReg: string, datumRodjenja: Date) {
    const dialog = this.dialog.open(IgracDialogComponent, {data: {id: id, ime: ime, prezime: prezime, brojReg: brojReg, datumRodjenja: datumRodjenja}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string){
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}