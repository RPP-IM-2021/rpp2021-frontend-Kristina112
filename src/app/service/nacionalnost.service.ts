import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Nacionalnost } from '../model/nacionalnost.model';

@Injectable()
export class NacionalnostService {

  //End Point u Development modu
  private readonly API_URL = 'http://localhost:8080/nacionalnost';

  //End Point u Deployment modu
  //private readonly API_URL = 'https://rpp-backend.herokuapp.com/nacionalnost/';

  dataChange: BehaviorSubject<Nacionalnost[]> = new BehaviorSubject<Nacionalnost[]>([]);

  constructor(private httpClient: HttpClient) {

  }

  public getAllNacionalnost(): Observable<Nacionalnost[]> {
    this.httpClient.get<Nacionalnost[]>(this.API_URL + "-all").subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addNacionalnost(nacionalnost: Nacionalnost): void {
    this.httpClient.post(this.API_URL, nacionalnost).subscribe();
  }

  public updateNacionalnost(nacionalnost: Nacionalnost): void {
    this.httpClient.put(this.API_URL + nacionalnost.id, nacionalnost).subscribe();
  }

  public deleteNacionalnost(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}