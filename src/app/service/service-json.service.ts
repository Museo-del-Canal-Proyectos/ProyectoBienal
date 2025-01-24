import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos } from '../model/puntos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceJsonService {
  constructor(public http: HttpClient) {}

  getPuntosAmerica(): Observable<Datos[]> {
    const url = '/data/marker.json';
    return this.http.get<Datos[]>(url);
  }

  getPuntosEuropa(): Observable<Datos[]> {
    const url = '/data/europa-marker.json';
    return this.http.get<Datos[]>(url);
  }

  getPuntosAmericaDelNorte(): Observable<Datos[]> {
    const url = '/data/america-norte.json';
    return this.http.get<Datos[]>(url);
  }

  getPuntosCentroAmerica(): Observable<Datos[]> {
    const url = '/data/centro-america.json';
    return this.http.get<Datos[]>(url);
  }

  getPuntosAmericaDelSur(): Observable<Datos[]> {
    const url = '/data/america-sur.json';
    return this.http.get<Datos[]>(url);
  }

  getPuntosAsia(): Observable<Datos[]> {
    const url = '';
    return this.http.get<Datos[]>(url);
  }

  getPuntosAfrica(): Observable<Datos[]> {
    const url = '';
    return this.http.get<Datos[]>(url);
  }

  getPuntosOceania(): Observable<Datos[]> {
    const url = '';
    return this.http.get<Datos[]>(url);
  }


}
