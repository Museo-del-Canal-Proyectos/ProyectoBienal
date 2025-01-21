import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { ServiceJsonService } from '../../service/service-json.service';
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

  }
  //cargar el mapa despues de que se crea la vista del html mejora rendimiento.
  ngAfterViewInit(): void {
    this.initMap();
  }

  //funcion para mostrar modal con imagenes usando libreria Sweetalert2
  modalImages(images: any) {
    Swal.fire({
      imageUrl: images,//parametro de variable que se recibe
      imageHeight: 250,//tamaño
      imageAlt: "A tall image"// referencia de la imagen  ¿
    });
  }

  //funcion para mostrar iconos en la region de America vienen de la clase service donde se carga la data del json local.
  dataPuntosAmerica(icons: any, map: any) {
    this.service.getPuntosAmerica().subscribe((data) => {
      data.forEach((element: any) => {//for de iteracion por los elementos que se encuentran en el json
        //icon:icono,
        var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
          icon: icons,//referenciamos el icono que se va a usar
          draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
        }).addTo(map).bindTooltip(element.pais, { permanent: true, interactive: false }).openTooltip();//abrimos tooltip de manera permanente comn el nombre del marcador
        markers.on("click", () => { //hacemos que se active  una funcion al dar click al marcador
          //llamamos a la funcion  ModalImages para mostrar imagen de cada elemento en la data del json 
          this.modalImages(element.image);
        });
      })
    })
  }
  //funcion para mostrar iconos en la region de europa vienen de la clase service donde se carga la data del json local.
  dataPuntosEuropa(icons: any, map: any) {

    this.service.getPuntosEuropa().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
      data.forEach((element: any) => {
        //icon:icono,
        var html = element.pais
        var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
          icon: icons,//referenciamos el icono que se va a usar
          draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
        }).addTo(map).bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();//abrimos tooltip de manera permanente comn el nombre del marcador
        markers.on("click", () => {
          //markers.openPopup();
        });
      })
    })
  }

  dataPuntosAmericaDelNorte(icons:any,map:any){
    this.service.getPuntosAmericaDelNorte().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
      data.forEach((element: any) => {
        //icon:icono,
        var html = element.pais
        var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
          icon: icons,//referenciamos el icono que se va a usar
          draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
        }).addTo(map).bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();//abrimos tooltip de manera permanente comn el nombre del marcador
        markers.on("click", () => {
          //markers.openPopup();
        });
      })
    });
  }


  dataPuntosCentroAmerica(icons:any,map:any){
    this.service.getPuntosCentroAmerica().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
      data.forEach((element: any) => {
        //icon:icono,
        var html = element.pais
        var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
          icon: icons,//referenciamos el icono que se va a usar
          draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
        }).addTo(map).bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();//abrimos tooltip de manera permanente comn el nombre del marcador
        markers.on("click", () => {
          //markers.openPopup();
        });
      })
    });
  }

  dataPuntosAmericaDelSur(icons:any,map:any){
    this.service.getPuntosAmericaDelSur().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
      data.forEach((element: any) => {
        //icon:icono,
        var html = element.pais
        var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
          icon: icons,//referenciamos el icono que se va a usar
          draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
        }).addTo(map).bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();//abrimos tooltip de manera permanente comn el nombre del marcador
        markers.on("click", () => {
          //markers.openPopup();
        });
      })
    });
  }


  americaNorte(event:any){
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [30, 30]
    })
    this.dataPuntosAmericaDelNorte(icons,this.map);
  }

  centroAmerica(event:any){
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [30, 30]
    })
    this.dataPuntosCentroAmerica(icons,this.map);
  }

  americaDelSur(event:any){
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [30, 30]
    })
    this.dataPuntosAmericaDelSur(icons,this.map);
  }
  

  europa(event: any) {
    this.cambiarColor(event);
    var iconsEAuropa = L.icon({
      iconUrl: '/images/placeholder.png',
      iconSize: [30, 30]
    })
    this.dataPuntosEuropa(iconsEAuropa, this.map);
  }

  onMarkerClick(): void {
    // Usar el router para navegar a otra página
    this.router.navigate(['/bienal']);
  }
}
