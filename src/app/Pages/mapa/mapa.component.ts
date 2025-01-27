import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';

import { ServiceJsonService } from '../../service/service-json.service';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})

export class MapaComponent {
  variable: any;
  isAtivedMaker = {
    americaDelNorte: false,
    centroAmerica: false,
    americaDelSur: false,
    europa: false
  }

  private imagenAnterior: HTMLImageElement | null = null;
  dataGroupAmericaDelSur: any;
  grupoAmericaDelSur = L.layerGroup();//layersGroup para agrupar los marcadores de la region de america del sur
  grupoAmericaDelNorte = L.layerGroup();//layersGroup para agrupar los marcadores de la region de america del norte
  grupoEuropa = L.layerGroup();//layersGroup para agrupar los marcadores de la region de europa
  grupoCentroAmerica = L.layerGroup();//layersGroup para agrupar los marcadores de la region de centro america
  grupoGlobal = L.layerGroup();//layersGroup para agrupar los marcadores de la region global
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
    const tiles = L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=IBJcHJ9m39u7wV0trYip',/*estilo de mapa */ {
      maxZoom: 18,//maximo zoom
      minZoom: 14,//minimo zoom
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
    //Punto de Panamá
    var panama = L.marker([45.4323754, 12.3501436], {
      icon: icons,
      draggable: false,
    }).addTo(this.map)
      .bindPopup("Panamá", { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false })
      .openPopup();
    
    panama.on('click', function() {
      window.location.href = './bienal';
    });
    // var panama = L.marker([45.4323754, 12.3501436], {//creamos el marcador con las coordenadas
    //   icon: icons,//referenciamos el icono que se va a usar
    //   draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
    // }).addTo(this.map).bindPopup("Panamá", { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();//abrimos popup de manera permanente comn el nombre del marcador

    //Circulo de Panamá
    var circle = L.circle([45.4323754, 12.3501436], {
      color: '#FFFFFF',
      fillColor: '#FF5A5A',
      fillOpacity: 1.0,
      radius: 100
    }).addTo(this.map);

    //anexamos el contenido de la referencia del mapa para cargarlo en el componente html
    tiles.addTo(this.map);
    var sureste = L.latLng(45.387396, 12.386985),
      noroeste = L.latLng(45.502149, 12.278645),
      bounds = L.latLngBounds(noroeste, sureste);
    this.map.setMaxBounds(bounds);
  
    //funciones de los datos de los markers de Europa
  }
  ngOnInit(): void {

  }
  //cargar el mapa despues de que se crea la vista del html mejora rendimiento.
  ngAfterViewInit(): void {
    this.initMap();
  }

  //funcion para mostrar modal con imagenes usando libreria Sweetalert2
  //esta opcion s
  modalImages(images: any) {
    // Swal.fire({
    //   imageUrl: images,//parametro de variable que se recibe
    //   imageHeight: 250,//tamaño
    //   imageAlt: "A tall image"// referencia de la imagen  ¿
    // });
  }

 

  //funcion para mostrar iconos en la region de America vienen de la clase service donde se carga la data del json local.
  dataPuntos(icons: any, map: any) {
    
    if(map.hasLayer(this.grupoGlobal)) {
      this.grupoGlobal.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoGlobal);
    } else {
      this.service.getPuntoGlobal().subscribe((data) => {
        data.forEach((element: any) => {//for de iteracion por los elementos que se encuentran en el json
          //icon:icono,
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          });
          this.grupoGlobal.addLayer(markers);
          markers.bindPopup(element.pais, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoGlobal.addTo(map);
      setTimeout(() => {

        if (map.hasLayer(this.grupoAmericaDelNorte)) {
          this.grupoAmericaDelNorte.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelNorte);
        }
        if (map.hasLayer(this.grupoEuropa)) {
          this.grupoEuropa.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoEuropa);
        }
        if (map.hasLayer(this.grupoCentroAmerica)) {
          this.grupoCentroAmerica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
        }
        if(map.hasLayer(this.grupoAmericaDelSur)) {
          this.grupoAmericaDelSur.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelSur);
        } 

    },300);

    }
  }

  dataPuntosEuropa(icons: any, map: any) {
    if (map.hasLayer(this.grupoEuropa)) {
      this.grupoEuropa.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoEuropa);
    } else {
      this.service.getPuntosEuropa().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoEuropa.addLayer(markers);
          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoEuropa.addTo(map);
      setTimeout(() => {
        if (map.hasLayer(this.grupoAmericaDelNorte)) {
          this.grupoAmericaDelNorte.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelNorte);
        }
        if (map.hasLayer(this.grupoAmericaDelSur)) {
          this.grupoAmericaDelSur.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelSur);
        }
        if (map.hasLayer(this.grupoCentroAmerica)) {
          this.grupoCentroAmerica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
        }
        if(map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        } 
      },300)
    }
  }

  dataPuntosAmericaDelNorte(icons: any, map: any) {
    if (map.hasLayer(this.grupoAmericaDelNorte)) {
      this.grupoAmericaDelNorte.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoAmericaDelNorte);
    } else {
      this.service.getPuntosAmericaDelNorte().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoAmericaDelNorte.addLayer(markers);
          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoAmericaDelNorte.addTo(map);
      setTimeout(() => {
        if (map.hasLayer(this.grupoEuropa)) {
          this.grupoEuropa.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoEuropa);
        }
        if (map.hasLayer(this.grupoAmericaDelSur)) {
          this.grupoAmericaDelSur.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelSur);
        }
        if (map.hasLayer(this.grupoCentroAmerica)) {
          this.grupoCentroAmerica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
        }
        if(map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        } 
      }, 300);
    }
  }


  dataPuntosCentroAmerica(icons: any, map: any) {
    if (map.hasLayer(this.grupoCentroAmerica)) {
      this.grupoCentroAmerica.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
    } else {
      this.service.getPuntosCentroAmerica().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoCentroAmerica.addLayer(markers);
          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoCentroAmerica.addTo(map);
      setTimeout(() => {
        if (map.hasLayer(this.grupoEuropa)) {
          this.grupoEuropa.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoEuropa);
        }
        if (map.hasLayer(this.grupoAmericaDelSur)) {
          this.grupoAmericaDelSur.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelSur);
        }
        if (map.hasLayer(this.grupoAmericaDelNorte)) {
          this.grupoAmericaDelNorte.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelNorte);
        }
        if(map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        } 
      }, 300);
    }
  }

  dataPuntosAmericaDelSur(icons: any, map: any) {
    // console.log(map.hasLayer(this.grupoAmericaDelSur));
    // console.log(this.grupoAmericaDelSur);
    if (map.hasLayer(this.grupoAmericaDelSur)) {
      this.grupoAmericaDelSur.clearLayers(); // Limpiar las capas existentes
      this.eliminarGrupoPuntos(map, this.grupoAmericaDelSur);
    } else {
      this.service.getPuntosAmericaDelSur().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        this.dataGroupAmericaDelSur = data;
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoAmericaDelSur.addLayer(markers);
          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        });
      });
      this.grupoAmericaDelSur.addTo(map);//anexamos puntos al grupo en el mapa
     setTimeout(() => {
      if (map.hasLayer(this.grupoAmericaDelNorte)) {
        this.grupoAmericaDelNorte.clearLayers();
        this.eliminarGrupoPuntos(map, this.grupoAmericaDelNorte);
      }
      if (map.hasLayer(this.grupoEuropa)) {
        this.grupoEuropa.clearLayers();
        this.eliminarGrupoPuntos(map, this.grupoEuropa);
      }
      if (map.hasLayer(this.grupoCentroAmerica)) {
        this.grupoCentroAmerica.clearLayers();
        this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
      }
      if(map.hasLayer(this.grupoGlobal)) {
        this.grupoGlobal.clearLayers();
        this.eliminarGrupoPuntos(map, this.grupoGlobal);
      } 
     },300);
    }
  }



  americaNorte(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntosAmericaDelNorte(icons, this.map);
  }

  //funcion para mostrar iconos en la region de europa vienen de la clase service donde se carga la data del json local.
  centroAmerica(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntosCentroAmerica(icons, this.map);

  }

  americaDelSur(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntosAmericaDelSur(icons, this.map);

  }


  europa(event: any) {
    this.cambiarColor(event);
    var iconsEAuropa = L.icon({
      iconUrl: '/images/placeholder.png',
      iconSize: [30, 30]
    }) 
    this.dataPuntosEuropa(iconsEAuropa, this.map);
  }
  //eliminar Puntos del Mapa
  eliminarGrupoPuntos(map: any, groud: any) {
    if (map.hasLayer(groud)) {
      map.removeLayer(groud);
    }
  }


  //Función Todos los marcadores

  activarMrcadores(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntos(icons,this.map);
  }





  onMarkerClick(): void {
    // Usar el router para navegar a otra página
    this.router.navigate(['/bienal']);
  }
}
