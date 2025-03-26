import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import Swal from 'sweetalert2';
import { routes } from '../../app.routes';
// register Swiper custom elements
register();
@Component({
  selector: 'app-inicio',
  imports: [
    RouterModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioComponent {
 


  

  brooke(){
    Swal.fire({
      text: "Uno de los más admirados artistas panameños, Brooke Alfaro se dio a conocer inicialmente como pintor de figuras de aspecto real, pero de tono surrealista e irreverente, ejecutadas con una admirable técnica académica. Tuvo su primera exposición individual en 1979, a la que siguieron un sinnúmero de muestras tanto en Panamá como en el exterior. Hacia 1990, sus pinturas –que a menudo se burlaban de temas religiosos o políticos-- se poblaron con aglomeraciones de figuras humanas, usualmente en embarcaciones atiborradas, en el mar, en selvas u otros ambientes naturales, a menudo amenazantes. Desde principios de este siglo, Alfaro expandió su campo artístico para incluir la producción de obras de video, que lo hicieron merecedor de múltiples galardones, incluyendo el primer premio en el I Concurso de Videoarte de América Latina en Washington, D.C. en 2003. Además de artista, Brooke Alfaro es un activista social y ambiental, enfocado sobre todo en la educación y la ecología.  ",
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
      text: "La obra de Cisco Merel revela una interpretación de temas como el arte popular, la arquitectura y los contrastes sociales, en impactantes instalaciones y pinturas abstractas –de formas geométricas y colores intensos-- que produce con la incorporación del barro, los pigmentos y el acero inoxidable. Estudió artes plásticas en Panamá y en talleres internacionales y residencias en Nueva York, París y Leipzig. Por más de diez años, colaboró con el taller del reconocido maestro Carlos Cruz Diez en la ciudad de Panamá. Ha presentado más de quince exposiciones individuales en Panamá y el exterior desde 2005. Merel crea pinturas y esculturas, tanto pequeñas como de gran formato para espacios públicos, con diversos materiales desde el lienzo y la madera hasta los polímeros sintéticos. En sus obras, logra reinterpretar experiencias cotidianas a través de colores, formas y sensaciones que generan reflexiones sobre los sistemas y situaciones socioculturales de nuestros tiempos. ",
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
    text: "La artista panameña Giana De Dier explora la representación de la población afrodescendiente a través de dibujos y collages que construye con información y materiales de archivos históricos, historias orales y recuerdos familiares, así como con fotos que ella toma y la apropiación de fotografías antiguas. Se enfoca en representaciones de mujeres de origen caribeño, armando imaginarios para rememorar la resiliencia de los migrantes antillanos que llegaron al país para la construcción del canal y dar testimonio de su contribución a la conformación de la identidad panameña. De Dier estudió Artes Visuales en la Universidad de Panamá. Luego de su primera participación en una muestra colectiva en 2009, y su primera individual en 2014, ha expuesto en una docena de ocasiones en Panamá y el exterior. En 2022, fue invitada a la prestigiosa 58ª Carnegie International en Pittsburgh. En 2023, fue seleccionada para residencias artísticas en el Museo del Canal Interoceánico de Panamá, así como en la Delfina Foundation de Londres. ",
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
    text: "Reconocida como dibujante, pintora, escultora y videasta, y entrenada en diseño gráfico y cinematografía, la artista panameña Isabel De Obaldía ha expuesto a lo largo de cuatro décadas en numerosas muestras individuales y colectivas tanto en Panamá como en Europa y Estados Unidos. En 1989, con motivo de los problemas políticos en su país, creó memorables obras de protesta contra la dictadura. En los años noventa, descubrió la práctica de la escultura en vidrio, medio en el que ha alcanzado reconocimiento por sus extraordinarias piezas de gran tamaño, usualmente de figuras masculinas, animales salvajes, torsos y cabezas. Desde 1997, expone con la galería Mary-Anne Martin Fine Art y recientemente, en 2022, fue invitada a la 58ª Carnegie International, la segunda bienal más antigua del mundo. Tanto en sus obras bidimensionales como en sus piezas fundidas en vidrio, De Obaldía expresa una notable preocupación por el mundo natural, así como por el ser humano y sus circunstancias sociopolíticas.  ",
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
