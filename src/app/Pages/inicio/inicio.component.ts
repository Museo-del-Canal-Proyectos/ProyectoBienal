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
      title: "Brooke Alfaro",
      text: "Brooke Alfaroo, uno de los artistas más destacados de Panamá, se dio a conocer inicialmente por sus imágenes de figuras realistas pintadas en un tono surrealista e irreverente, en obras creadas con admirable habilidad académica.Realizó su primera exposición individual en 1979, a la que han seguido innumerables muestras tanto en Panamá como en el extranjero. Hacia 1990, sus cuadros -que a menudo se burlaban de temas religiosos o políticos- se poblaron de aglomeraciones de figuras humanas, normalmente en barcos hacinados, en el mar, en selvas u otros entornos naturales, a menudo amenazadores.Desde principios de este siglo, Alfaro amplió sus esfuerzos artísticos para incluir la producción de obras en vídeo, que le valieron múltiples galardones, entre ellos el primer premio del Primer Concurso Latinoamericano de Videoarte, celebrado en Washington D.C. en 2003. Además de artista, Brooke Alfaro es activista social y medioambiental, centrado principalmente en la educación y la ecología.",
      imageUrl: "/images/Artista1.jpg",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      confirmButtonText: 'Cerrar'
    });
  }

  Cisco(){
    Swal.fire({
     title: "Cisco Merel",
     text: "La obra de Cisco Merel revela una interpretación de temas como el arte popular, la arquitectura y los contrastes sociales, en llamativas instalaciones y pinturas abstractas de formas geométricas y colores intensos, que realiza con la incorporación de arcilla, pigmentos y acero inoxidable. Estudió Bellas Artes en Panamá y en talleres y residencias internacionales en Nueva York, París y Leipzig. Durante más de diez años colaboró con el Taller Carlos Cruz Díez de Ciudad de Panamá.Ha presentado más de quince exposiciones individuales en Panamá y en el extranjero desde 2005. Merel crea pinturas y esculturas, de pequeño y gran formato, tanto para espacios privados como públicos, utilizando una variedad de materiales que van desde el lienzo y la madera hasta los polímeros sintéticos. En sus obras logra reinterpretar experiencias cotidianas a través de colores, formas y sensaciones que generan reflexiones sobre los sistemas y situaciones sociales de nuestro tiempo.",
     imageUrl: "/images/Artista3.jpg",
     imageWidth: 300,
     imageHeight: 300,
     imageAlt: "Custom image",
     confirmButtonText: 'Cerrar'
   });
 }

 Giana(){
  Swal.fire({
   title: "Giana de Dier",
   text: "La artista panameña Giana De Dier explora la representación de la población afrodescendiente a través de dibujos y collages que construye con información y materiales de archivos históricos, historias orales y recuerdos familiares, así como con fotos que ella toma y la apropiación de fotografías antiguas. Se enfoca en representaciones de mujeres de origen caribeño, armando escenarios imaginarios para rememorar la resiliencia de los migrantes antillanos que llegaron al país para la construcción del canal y dar testimonio de su contribución a la conformación de la identidad panameña.De Dier estudió Artes Visuales en la Universidad de Panamá. Luego de su primera participación en una muestra colectiva en 2009, y su primera individual en 2014, ha expuesto en una docena de ocasiones en Panamá, Italia y Estados Unidos. En 2022, fue invitada a la prestigiosa 58ª Carnegie International en Pittsburgh y en 2023, fue ganadora de la primera residencia artística en el Museo del Canal Interoceánico de Panamá",
   imageUrl: "/images/Artista2.jpg",
   imageWidth: 300,
   imageHeight: 300,
   imageAlt: "Custom image",
   confirmButtonText: 'Cerrar'
 });
}

Isabel(){
  Swal.fire({
   title: "Isabel de Obaldía",
   text: "Aunque inicialmente se formó en diseño gráfico y cinematografía, la admirada artista panameña Isabel De Obaldía es conocida por sus dibujos, pinturas, esculturas y vídeos. Ha expuesto durante cuatro décadas en numerosas exposiciones individuales y colectivas en Panamá, Europa y Estados Unidos.En 1989, época de agitación política en Panamá, creó obras memorables de protesta contra la dictadura. En los años 90, descubrió la escultura en vidrio, un medio en el que ha obtenido reconocimiento por sus extraordinarias piezas de gran tamaño, normalmente de figuras masculinas, animales salvajes, torsos y cabezas. Desde 1997 expone en la galería Mary-Anne Martin Fine Art de Nueva York, y recientemente, en 2022, fue invitada a la 58ª Carnegie International, la segunda bienal más antigua del mundo. Tanto en sus obras bidimensionales como en las de vidrio, De Obaldía expresa una notable preocupación por el mundo natural, así como por los seres humanos y sus circunstancias sociopolíticas, a menudo difíciles.",
   imageUrl: "/images/Artista5.jpg",
   imageWidth: 300,
   imageHeight: 300,
   imageAlt: "Custom image",
   confirmButtonText: 'Cerrar'
 });
}

}
