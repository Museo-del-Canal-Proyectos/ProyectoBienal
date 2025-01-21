import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {Map, Marker,marker, tileLayer} from 'leaflet'
import { Router } from '@angular/router';
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';
@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent  {
 
 
  private imagenAnterior: HTMLImageElement | null = null;
  cambiarColor(event: any) {
    const img = event.target as HTMLImageElement;
    // Si hay una imagen previamente clickeada, quita la clase 'rojo'
    if (this.imagenAnterior && this.imagenAnterior !== img) {
      this.imagenAnterior.classList.remove('rojo');
    }
    // Alterna la clase 'rojo' en la imagen actual
    img.classList.toggle('rojo');
    // Actualiza la imagen previamente clickeada
    this.imagenAnterior = img;
  }

  

  constructor(private router: Router) {}
  title = 'Leaflet en Angular';
  map: L.Map | undefined;
  ngOnInit(): void {
     // Crear el mapa
     this.map = L.map('map', {
      center: [45.4324246,12.3479238], // Coordenadas del centro del mapa
      zoom: 15 // Nivel de zoom
    });

    // Agregar capa de mapa base (puedes usar otros proveedores de mapas)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
   
    // Coordenadas para el marcador y el círculo
    const markerLat = 45.4369446;
    const markerLng = 12.3419915;

    const markerLat2 = 45.4345725;
    const markerLng2 = 12.3228442;

    const markerLat3=45.4284795;
    const markerLng3=12.3542474;
    
    // Agregar un marcador
    const marker = L.marker([markerLat, markerLng]).addTo(this.map).bindPopup("Pabellon de Panama en Venecia");
    const marker2 = L.marker([markerLat2, markerLng2]).addTo(this.map).bindPopup("Otro enlace")
    const marker3 = L.marker([markerLat3, markerLng3]).addTo(this.map).bindPopup("Giardini")
    marker.bindTooltip("Pabellon de Panama en Venecia").openTooltip();
    marker2.bindTooltip("Otro Punto").openTooltip();
    marker3.bindTooltip("Giardini de la Bienale", { permanent: true, direction: "top" }).openTooltip();
    

    // Agregar un círculo alrededor del marcador
    L.circle([markerLat, markerLng], {
      color: 'red',
      fillColor: '#30f',
      fillOpacity: 0.3,
      radius: 100 // Radio en metros
    }).addTo(this.map);



    marker.on('popupopen', () => {
      // Llamar a la función para navegar a otra página o realizar alguna acción
      this.onMarkerClick();
    });
   

  }

  onMarkerClick(): void {
    // Usar el router para navegar a otra página
    this.router.navigate(['/bienal']);
  }


  oceania(event:any){
    this.cambiarColor(event);
  }

  amNorte(event:any){
    this.cambiarColor(event);
  }

  amCentral(event:any){
    this.cambiarColor(event);
  }

  Suramerica(event:any){
    this.cambiarColor(event);
  }

  Europa(event:any){
    this.cambiarColor(event);
  }

  Africa(event:any){
    this.cambiarColor(event);
  }

  Asia(event:any){
    this.cambiarColor(event);
  }
}
