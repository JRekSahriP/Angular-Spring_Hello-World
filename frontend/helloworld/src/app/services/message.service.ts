import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http:HttpClient) { }

  getMessage(text:string): Observable<string> {
    return this.http.get(`${API_URL}${text}`, {responseType: 'text'});
  }

}
