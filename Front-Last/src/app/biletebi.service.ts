import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BiletebiService {

  constructor(private http:HttpClient) { }

  getData(){
    let Database="https://steprailway.webwide.ge/api/tickets"
    return this.http.get(Database);
  }
}
