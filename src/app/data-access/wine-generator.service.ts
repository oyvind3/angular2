import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineGeneratorService {

    private readonly httpClient = inject(HttpClient);

    public getWines(): Observable<string[]> {
      return this.httpClient.get<string[]>('https://apis.vinmonopolet.no/products/v0/details/');
    }
}
