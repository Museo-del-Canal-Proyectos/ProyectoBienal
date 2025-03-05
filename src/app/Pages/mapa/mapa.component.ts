import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';

import { ServiceJsonService } from '../../service/service-json.service';
import { DataService } from '../../service/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})

export class MapaComponent {
  variable: any;
  paises: any[] = [];  // Guardamos los países que obtenemos del servicio
  selectedPais: any;  // Guardamos el país seleccionado
  isAtivedMaker = {
    americaDelNorte: false,
    centroAmerica: false,
    americaDelSur: false,
    europa: false
  }

  dataPanama = {
    "pais": "Panamá",
    "coordena": [45.43253953317171, 12.350561987425772],
    "image": "/images/paises/panama.jpg",
    "imagenes_adicionales": [
      "/images/panama1.jpg",
      "/images/panama2.jpg",
      "/images/panama3.jpg"
    ],
    "traducciones": {
      "es": {
        "titulo": "Pabellón de Panamá",
        "info": "El Pabellón de Panamá profundiza en el impacto perdurable de la migración en las personas y su entorno a través de obras de cuatro artistas. Panamá, puente transcontinental, ha sido un centro de tránsito, comercio e intercambio cultural desde la prehistoria hasta la actualidad. Recientemente, ha acaparado la atención debido al peligroso viaje a través del «Tapón del Darién», una selva de 26.000 km2 que conecta Colombia y Panamá -atravesada por más de 500.000 migrantes y solicitantes de asilo sólo en 2023-, un viaje angustioso sin infraestructuras ni servicios, y sin seguridad frente a abusos, peligros o violencia. Los artistas revelan realidades ignoradas (a menudo casi invisibles), desde la exploración de Giana De Dier de la migración afroantillana a principios del siglo XX hasta las representaciones de Brooke Alfaro de seres humanos en viajes hostiles. Isabel De Obaldía sumerge al espectador en una instalación de dibujos y esculturas de vidrio, mientras que Cisco Merel reflexiona sobre la esquiva promesa de un futuro mejor a través del barro y el acero. Las obras de arte sirven como poderosos testimonios de las penurias soportadas en pos de una vida mejor. Este pabellón relaciona el arte con la actual crisis migratoria, incitando a la empatía con quienes se ven obligados a labrarse sus propios arduos viajes, de esos que dejan huellas indelebles en la tierra y en el cuerpo.",
        "descripcion": "Nombre de la Exhibición: "
      },
      "en": {
        "titulo": "Panama Pavilion",
        "info": "The Panama Pavilion delves into the enduring impact of migration on individuals and their surroundings through works by four artists. A transcontinental bridge, Panama has been a hub of transit, trade, and cultural exchange from prehistory to the present. Recently, it has gained attention due to the perilous journey through the “Darien Gap”, a 26,000km2 jungle connecting Colombia and Panama – crossed by over 500,000 migrants and asylum seekers in 2023 alone – a harrowing journey without infrastructure or services, and without security against abuse, danger or violence. The artists reveal overlooked realities (often all but rendered invisible), from Giana De Dier’s exploration of Afro-Antillean migration in the early 20th century, to Brooke Alfaro’s depictions of human beings on hostile journeys. Isabel De Obaldía immerses viewers in an installation of drawings and glass sculptures, while Cisco Merel reflects on the elusive promise of a better future through mud and steel. The artworks serve as powerful testimonies of the hardships endured in pursuit of a better life. This pavilion connects art and the current migration crisis, urging empathy for those who are forced to carve out their own arduous journeys—the kind that leave indelible traces on the land and on the body.",
        "descripcion": "Exhibit Name: "
      }
    },
    "exhibicion": "Traces: on the body and on the land"
  }



  private imagenAnterior: HTMLImageElement | null = null;
  dataGroupAmericaDelSur: any;
  grupoAmericaDelSur = L.layerGroup();//layersGroup para agrupar los marcadores de la region de america del sur
  grupoAmericaDelNorte = L.layerGroup();//layersGroup para agrupar los marcadores de la region de america del norte
  grupoEuropa = L.layerGroup();//layersGroup para agrupar los marcadores de la region de europa
  grupoCentroAmerica = L.layerGroup();//layersGroup para agrupar los marcadores de la region de centro america
  grupoGlobal = L.layerGroup();//layersGroup para agrupar los marcadores de la region global
  grupoAsia = L.layerGroup();//layersGroup para agrupar los marcadores de la region de asia
  grupoAfrica = L.layerGroup();//layersGroup para agrupar los marcadores de la region de africa
  grupoOceania = L.layerGroup();//layersGroup para agrupar los marcadores de la region de oceania

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



  constructor(private router: Router, public service: ServiceJsonService,
    private dataService: DataService) { }

  private map!: L.Map | undefined;//Objeto a la libreria de Leaflet referente 
  private initMap(): void { //Funcion contenedora de la libreria para creacion del mapa

    this.map = L.map('map', {
      closePopupOnClick: false,
      center: [45.436127, 12.336766], //coordenadas de ubicacion al cargar el mapa
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
    var panama = L.marker([45.43253953317171, 12.350561987425772], {
      icon: icons,
      draggable: false,
    }).addTo(this.map)
      .bindPopup("Panamá", { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false })
      .openPopup();

    panama.on('click',  () => {
      this.dataService.setCountryData(this.dataPanama);
      this.router.navigate(['/bienal']);
    });
    // var panama = L.marker([45.4323754, 12.3501436], {//creamos el marcador con las coordenadas
    //   icon: icons,//referenciamos el icono que se va a usar
    //   draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
    // }).addTo(this.map).bindPopup("Panamá", { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();//abrimos popup de manera permanente comn el nombre del marcador

    //Circulo de Panamá
    var circle = L.circle([45.43253953317171, 12.350561987425772], {
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

    if (map.hasLayer(this.grupoGlobal)) {
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
        if (map.hasLayer(this.grupoAmericaDelSur)) {
          this.grupoAmericaDelSur.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelSur);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }

      }, 300);

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
          var html = element.pais;
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamos funcion de agarrar los marcadores de localizacion
          })

          this.grupoEuropa.addLayer(markers);

          // Este evento es el que se dispara al hacer clic en el marcador
          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);


          });

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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
        }
      }, 300)
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

          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);


          });

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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }
      }, 300);
    }
  }

  dataPuntosAfrica(icons: any, map: any) {
    if (map.hasLayer(this.grupoAfrica)) {
      this.grupoAfrica.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoAfrica);
    } else {
      this.service.getPuntosAfrica().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoAfrica.addLayer(markers);

          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);
          });
          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoAfrica.addTo(map);
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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoCentroAmerica)) {
          this.grupoCentroAmerica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
        }
      }, 300);
    }
  }

  dataPuntosOceania(icons: any, map: any) {
    if (map.hasLayer(this.grupoOceania)) {
      this.grupoOceania.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoOceania);
    } else {
      this.service.getPuntosOceania().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoOceania.addLayer(markers);

          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);


          });

          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoOceania.addTo(map);
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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }
        if (map.hasLayer(this.grupoAmericaDelNorte)) {
          this.grupoAmericaDelNorte.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAmericaDelNorte);
        }
      }, 300);
    }
  }

  dataPuntosAsia(icons: any, map: any) {
    if (map.hasLayer(this.grupoAsia)) {
      this.grupoAsia.clearLayers();
      this.eliminarGrupoPuntos(map, this.grupoAsia);
    } else {
      this.service.getPuntosAsia().subscribe((data) => {//for de iteracion por los elementos que se encuentran en el json
        data.forEach((element: any) => {
          //icon:icono,
          var html = element.pais
          var markers = L.marker(element.coordena, {//creamos el marcador con las coordenadas
            icon: icons,//referenciamos el icono que se va a usar
            draggable: false,//desactivamnos funcion de agarrar los marcadores de localizacion
          })
          this.grupoAsia.addLayer(markers);

          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);


          });

          markers.bindPopup(html, { autoClose: false, closeOnClick: false, closeOnEscapeKey: true, closeButton: false }).openPopup();
        })
      });
      this.grupoAsia.addTo(map);
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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoCentroAmerica)) {
          this.grupoCentroAmerica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoCentroAmerica);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
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

          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);


          });

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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
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

          markers.on('click', () => {
            // Usando SweetAlert para mostrar el nombre del país y cualquier otra información
            this.dataService.setCountryData(element);
            this.router.navigate(['/bienal']);
          });


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
        if (map.hasLayer(this.grupoGlobal)) {
          this.grupoGlobal.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoGlobal);
        }
        if (map.hasLayer(this.grupoAsia)) {
          this.grupoAsia.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAsia);
        }
        if (map.hasLayer(this.grupoAfrica)) {
          this.grupoAfrica.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoAfrica);
        }
        if (map.hasLayer(this.grupoOceania)) {
          this.grupoOceania.clearLayers();
          this.eliminarGrupoPuntos(map, this.grupoOceania);
        }
      }, 300);
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

  africa(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntosAfrica(icons, this.map);
  }


  asia(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntosAsia(icons, this.map);
  }

  oceania(event: any) {
    this.cambiarColor(event);
    var icons = L.icon({
      iconUrl: '/images/location-sharp.svg',
      iconSize: [20, 20]
    })
    this.dataPuntosOceania(icons, this.map);
  }

  //eliminar Puntos del Mapa
  eliminarGrupoPuntos(map: any, groud: any) {
    if (map.hasLayer(groud)) {
      map.removeLayer(groud);
    }
  }


  //Función Todos los marcadores

  // activarMrcadores(event: any) {
  //   this.cambiarColor(event);
  //   var icons = L.icon({
  //     iconUrl: '/images/location-sharp.svg',
  //     iconSize: [20, 20]
  //   })
  //   this.dataPuntos(icons,this.map);
  // }





  onMarkerClick(): void {
    // Usar el router para navegar a otra página
    this.router.navigate(['/bienal']);
  }
}
