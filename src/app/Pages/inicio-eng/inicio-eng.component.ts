import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle'; // Registra los elementos personalizados de Swiper
import Swal from 'sweetalert2'; // Importa la librería SweetAlert2 para modales
import { routes } from '../../app.routes'; // Rutas definidas de la aplicación

// register Swiper custom elements
register();
@Component({
  selector: 'app-inicio-eng',
  imports: [ RouterModule, CommonModule ],
  templateUrl: './inicio-eng.component.html',
  styleUrl: './inicio-eng.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioEngComponent {

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>; // Obtiene una referencia al reproductor de video en el template
    showVideo: boolean = false; // Variable para controlar la visibilidad del video
  
    constructor(private cdr: ChangeDetectorRef) {} // Inyecta el ChangeDetectorRef para detectar cambios manualmente
  
    // Función para iniciar la reproducción del video
    playVideo() {
      this.showVideo = true; // Muestra el video
      this.cdr.detectChanges(); // Fuerza la actualización de la vista
  
      // Se ejecuta después de un pequeño retraso para garantizar que el video se haya cargado
      setTimeout(() => {
        if (this.videoPlayer) {
          const video = this.videoPlayer.nativeElement; // Accede al elemento video
  
          video.muted = true; // Mutea el video
          video.play(); // Inicia la reproducción del video
  
          // Detecta cuando el video ha terminado y llama a la función `closeVideo` para minimizar la pantalla completa
          video.onended = () => {
            this.closeVideo();
          };
  
          // Activa el modo de pantalla completa
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if ((video as any).webkitRequestFullscreen) {
            (video as any).webkitRequestFullscreen();
          } else if ((video as any).mozRequestFullScreen) {
            (video as any).mozRequestFullScreen();
          } else if ((video as any).msRequestFullscreen) {
            (video as any).msRequestFullscreen();
          }
        }
      }, 100); // El retraso de 100 ms es necesario para asegurar que el video esté listo
    }
  
    // Función para cerrar el video y salir de pantalla completa
    closeVideo() {
      // Si estamos en pantalla completa, salimos de ella
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      this.showVideo = false; // Oculta el video
      this.cdr.detectChanges(); // Fuerza la actualización de la vista
    }
    
  
    brooke(){
       Swal.fire({
            text: "", // Texto del modal 
            background: 'url(images/Artista_ENG/BrookeIngles.jpg)', // Fondo del modal
            confirmButtonText: '<i class="fa-solid fa-rectangle-xmark"></i>', // Texto y icono del botón de confirmación
            confirmButtonColor: '#ffffff', // Color del fondo del botón
            backdrop: 'rgba(0, 0, 0, 0.9)',
            customClass: {
              title: 'custom-title', 
              popup: 'custom-popup', 
              image: 'custom-image',
              confirmButton: 'custom-confirm-btn',
              closeButton: 'custom-close-btn' // Clase personalizada para el botón de cierre
            },
          });
      
    }
  
    Cisco(){
      Swal.fire({
           text: "", // Texto del modal 
           background: 'url(images/Artista_ENG/CiscoIngles.jpg)', // Fondo del modal
           confirmButtonText: '<i class="fa-solid fa-rectangle-xmark"></i>', // Texto y icono del botón de confirmación
           confirmButtonColor: '#ffffff', // Color del fondo del botón
           backdrop: 'rgba(0, 0, 0, 0.9)',
           customClass: {
             title: 'custom-title', 
             popup: 'custom-popup', 
             image: 'custom-image',
             confirmButton: 'custom-confirm-btn',
             closeButton: 'custom-close-btn' // Clase personalizada para el botón de cierre
           },
         });
   }
  
   Giana(){
     Swal.fire({
          text: "", // Texto del modal 
          background: 'url(images/Artista_ENG/GianaIngles.jpg)', // Fondo del modal
          confirmButtonText: '<i class="fa-solid fa-rectangle-xmark"></i>', // Texto y icono del botón de confirmación
          confirmButtonColor: '#ffffff', // Color del fondo del botón
          backdrop: 'rgba(0, 0, 0, 0.9)',
          customClass: {
            title: 'custom-title', 
            popup: 'custom-popup', 
            image: 'custom-image',
            confirmButton: 'custom-confirm-btn',
            closeButton: 'custom-close-btn' // Clase personalizada para el botón de cierre
          },
        });
  }
  
  Isabel(){
     Swal.fire({
          text: "", // Texto del modal 
          background: 'url(images/Artista_ENG/IsabelIngles.jpg)', // Fondo del modal
          confirmButtonText: '<i class="fa-solid fa-rectangle-xmark"></i>', // Texto y icono del botón de confirmación
          confirmButtonColor: '#ffffff', // Color del fondo del botón
          backdrop: 'rgba(0, 0, 0, 0.9)',
          customClass: {
            title: 'custom-title', 
            popup: 'custom-popup', 
            image: 'custom-image',
            confirmButton: 'custom-confirm-btn',
            closeButton: 'custom-close-btn' // Clase personalizada para el botón de cierre
          },
        });
}

}
