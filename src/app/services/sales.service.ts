import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sales } from '../models/sales.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private readonly API = 'http://localhost:3000/leiloes'

  constructor(private http: HttpClient) { }

  list(): Observable<Sales[]> {
    return this.http.get<Sales[]>(this.API)
  }
}
