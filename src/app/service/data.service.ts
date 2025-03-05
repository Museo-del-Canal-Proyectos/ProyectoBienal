import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedCountryData: any;

  constructor() { }

  // Método para guardar los datos del país
  setCountryData(data: any): void {
    this.selectedCountryData = data;
  }

  // Método para obtener los datos del país
  getCountryData(): any {
    return this.selectedCountryData;
  }
}