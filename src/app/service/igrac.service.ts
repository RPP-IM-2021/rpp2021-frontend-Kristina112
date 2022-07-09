import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Igrac } from '../model/igrac.model';

@Injectable()
export class IgracService {

  //End Point u Development modu
  //private readonly API_URL = 'http://localhost:8082/liga/';

  //End Point u Deployment modu
  private readonly API_URL = 'https://rpp-backend.herokuapp.com/igrac/';

  dataChange: BehaviorSubject<Igrac[]> = new BehaviorSubject<Igrac[]>([]);

  constructor(private httpClient: HttpClient) {

  }

  public getAllIgrac(): Observable<Igrac[]> {
    this.httpClient.get<Igrac[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addIgrac(igrac: Igrac): void {
    this.httpClient.post(this.API_URL, igrac).subscribe();
  }

  public updateIgrac(igrac: Igrac): void {
    this.httpClient.put(this.API_URL + igrac.id, igrac).subscribe();
  }

  public deleteIgrac(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}