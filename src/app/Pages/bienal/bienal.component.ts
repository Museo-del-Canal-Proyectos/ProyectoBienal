import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { routes } from '../../app.routes';
import { DataService } from '../../service/data.service';  // Importa el servicio
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bienal',
  imports: [RouterModule,CommonModule],
  templateUrl: './bienal.component.html',
  styleUrl: './bienal.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class BienalComponent implements OnInit {
  idioma: string = 'es';
  countryData: any;  // Para almacenar los datos del país

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Obtener los datos del país desde el servicio
    this.countryData = this.dataService.getCountryData();
  }

  cambiarIdioma() {
    this.idioma = this.idioma === 'es' ? 'en' : 'es';
  }
}
