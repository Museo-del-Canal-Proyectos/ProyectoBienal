import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import Swal from 'sweetalert2';
import { routes } from '../../app.routes';
// register Swiper custom elements
register();
@Component({
  selector: 'app-inicio-eng',
  imports: [ RouterModule],
  templateUrl: './inicio-eng.component.html',
  styleUrl: './inicio-eng.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioEngComponent {

  
    
  
    brooke(){
      Swal.fire({
        text: "One of Panama’s most prominent artists, Brooke Alfaro became known initially for his images of lifelike figures painted in a surrealist and irreverent tone, in works created with admirable academic skills. He had his first solo exhibition in 1979, which has been followed by countless exhibitions both in Panama and abroad. By 1990, his paintings --which often mocked religious or political themes-- became populated with agglomerations of human figures, usually in crammed boats, at sea, in jungles or other natural, often threatening, environments. From the beginning of this century, Alfaro expanded his artistic endeavors to include the production of video works, which earned him multiple awards, including the first prize in the First Latin American Video Art Competition in Washington, D.C. in 2003. In addition to being an artist, Brooke Alfaro is a social and environmental activist, focusing primarily on education and ecology. ",
        imageUrl: "images/Artista1.jpg",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image",
        background: 'url(images/background_swal.png)', // Cambia esta URL a la de tu imagen de fondo
        confirmButtonText: '<i class="fa-solid fa-rectangle-xmark" style="font-size:25px"></i>',
        customClass: {
          title: 'custom-title',
          popup: 'custom-popup', // Clase para el contenido del popup
          image: 'custom-image'
        }
      });
      
    }
  
    Cisco(){
      Swal.fire({
        text: "Cisco Merel's work reveals an interpretation of themes such as popular art, architecture, and social contrasts, in striking installations and abstract paintings of geometric shapes and intense colors, which he produces with the incorporation of clay, pigments and stainless steel. He studied Fine Arts in Panama and in international workshops and residencies in New York, Paris, and Leipzig. For more than ten years, he collaborated with the Carlos Cruz Diez Workshop in Panama City. He has presented more than fifteen solo exhibitions in Panama and abroad since 2005. Merel creates paintings and sculptures, both small and large, for both private and public spaces, using a variety of materials ranging from canvas and wood to synthetic polymers. In his works, he manages to reinterpret everyday experiences through colors, shapes and sensations that generate reflections on the systems and social situations of our times. ​ ",
        imageUrl: "images/Artista3.jpg",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image",
        background: 'url(images/background_swal.png)', // Cambia esta URL a la de tu imagen de fondo
        confirmButtonText: '<i class="fa-solid fa-rectangle-xmark" style="font-size:25px"></i>',
        customClass: {
          title: 'custom-title',
          popup: 'custom-popup', // Clase para el contenido del popup
          image: 'custom-image' // Clase para la imagen
        }
      });
   }
  
   Giana(){
    Swal.fire({
      text: "The Panamanian artist Giana De Dier explores the representation of people of Afro-Antillean descent in drawings and collages that she constructs with information, documents, and appropriated photographs from historical archives, oral histories, and family memories, as well as her own photographs. She focuses mainly on images of women of Caribbean origin, assembling imaginary scenarios to commemorate the resilience of West Indian migrants who arrived in the country for the construction of the Panama Canal, while bearing witness to their contribution in shaping Panamanian identity. De Dier studied Visual Arts at the University of Panama. After her first participation in a group show in 2009 and her first solo exhibition in 2014, she has exhibited on a dozen occasions in Panama and abroad. In 2022, she was invited to the prestigious 58th Carnegie International in Pittsburgh. In 2023, she was selected for artists’ residencies at the Panama Canal Museum and the Delfina Foundation in London. ​",
      imageUrl: "images/Artista2.jpg",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      background: 'url(images/background_swal.png)', // Cambia esta URL a la de tu imagen de fondo
      confirmButtonText: '<i class="fa-solid fa-rectangle-xmark" style="font-size:25px"></i>',
      customClass: {
        title: 'custom-title',
        popup: 'custom-popup', // Clase para el contenido del popup
        image: 'custom-image'
      }
    });
  }
  
  Isabel(){
    Swal.fire({
      text: "Although she was initially trained in graphic design and cinematography, the much-admired Panamanian artist Isabel De Obaldía is known for her drawings, paintings, sculptures, and videos. She has exhibited over four decades in numerous solo exhibitions and group shows in Panama, Europe, and the United States. In 1989, a time of political turmoil in Panama, she created memorable works of protest against the dictatorship. In the 90s, she discovered the practice of glass sculpture, a medium in which she has achieved recognition for her extraordinary large-scale pieces, usually of male figures, wild animals, torsos, and heads. She has been exhibiting with the Mary-Anne Martin Fine Art Fine Art Gallery in New York since 1997, and recently, in 2022, she was invited to the 58th Carnegie International, the world's second oldest biennial. In both her two-dimensional and glass works De Obaldía expresses a remarkable concern for the natural world, as well as for human beings and their often-difficult sociopolitical circumstances. ​",
      imageUrl: "images/Artista5.jpg",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      background: 'url(images/background_swal.png)', // Cambia esta URL a la de tu imagen de fondo
      confirmButtonText: '<i class="fa-solid fa-rectangle-xmark" style="font-size:25px"></i>',
      customClass: {
        title: 'custom-title',
        popup: 'custom-popup', // Clase para el contenido del popup
        image: 'custom-image'
      }
    });
  }
}
