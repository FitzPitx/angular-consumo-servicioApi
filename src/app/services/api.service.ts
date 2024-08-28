import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL: string = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  private header = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json; charset=utf-8') // Fixed typo in 'chartset'
    .set('KEY', 'hiimakey');

  private options = { 
    headers: this.header 
  }; 

  public getData(endpoint: string) {
    return this.httpClient.get(this.URL + endpoint, this.options);
  }
}
