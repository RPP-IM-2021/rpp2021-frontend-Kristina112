import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Tim } from '../model/tim.model';

@Injectable()
export class TimService {

  //End Point u Development modu
  private readonly API_URL = 'http://localhost:8080/tim/';
  private readonly API_URL_P = 'http://localhost:8080/tim/';

  dataChange: BehaviorSubject<Tim[]> = new BehaviorSubject<Tim[]>([]);

  success = false;

  constructor(private httpClient: HttpClient) {

  }

  public getAllTim(): Observable<Tim[]> {
    this.httpClient.get<Tim[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addTim(tim : Tim): void {
    this.httpClient.post(this.API_URL, tim).subscribe();
  }

  public updateTim(tim: Tim): void {
    this.httpClient.put(this.API_URL + tim.id, tim).subscribe();
  }

  public deleteTim(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}