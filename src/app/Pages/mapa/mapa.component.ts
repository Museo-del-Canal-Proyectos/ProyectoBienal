import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { ServiceJsonService } from '../../service/service-json.service';
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';
@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {


  private imagenAnterior: HTMLImageElement | null = null;
  isActive = {
    americaNorte: false,
    centroAmerica: false,
    americaDelSur: false,
    europe: false
  }

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

    //funciones de los datos de los markers de america
  
  }



  constructor(private router: Router, public service: ServiceJsonService) { }
  private map!: L.Map | undefined;//Objeto a la libreria de Leaflet referente 
  private initMap(): void { //Funcion contenedora de la libreria para creacion del mapa

    this.map = L.map('map', {
      closePopupOnClick: false,
      center: [31.0830688, -26.263346], //coordenadas de ubicacion al cargar el mapa
      zoom: 2 //zoom de inicio
    });
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',/*estilo de mapa */ {
      maxZoom: 18,//maximo zoom
      minZoom: 2.5,//minimo zoom
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'//contribuidor del mapa
    });

    //creacion de icono personalizable region de america
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [30, 30]
    })
    //crreacion de icono personalizable region de europa
    var iconsEAuropa = L.icon({
      iconUrl: '/images/placeholder.png',
      iconSize: [30, 30]
    })
    //anexamos el contenido de la referencia del mapa para cargarlo en el componente html
    tiles.addTo(this.map);

    //funciones de los datos de los markers de Europa
  }
  ngOnInit(): void {
     // Crear el mapa
     this.map = L.map('map', {
      center: [45.4324246,12.3479238], // Coordenadas del centro del mapa
      zoom: 15 // Nivel de zoom
    });

    // Agregar capa de mapa base (puedes usar otros proveedores de mapas)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
   
    // Coordenadas para el marcador y el círculo
    const markerLat = 45.4324246;
    const markerLng = 12.3479238;
    const markerLat2 = 45.4345725;
    const markerLng2 = 12.3228442;

    
    // Agregar un marcador
    const marker = L.marker([markerLat, markerLng]).addTo(this.map).bindPopup("Panama Pabillion");
    const marker2 = L.marker([markerLat2, markerLng2]).addTo(this.map)
    marker.bindTooltip("Panama Pabillion").openTooltip();
    

    // Agregar un círculo alrededor del marcador
    L.circle([markerLat, markerLng], {
      color: 'red',
      fillColor: '#30f',
      fillOpacity: 0.3,
      radius: 100 // Radio en metros
    }).addTo(this.map);

    marker.on('popupopen', () => {
      // Una vez que el popup se haya abierto, ejecuta esta función
      console.log("Popup abierto!");
      
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
