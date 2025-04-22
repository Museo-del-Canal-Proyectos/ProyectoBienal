import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2'; // Importa la librería SweetAlert2 para modales

@Component({
  selector: 'app-onu-eng',
  imports: [],
  templateUrl: './onu-eng.component.html',
  styleUrl: './onu-eng.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnuEngComponent {
  constructor(private router:Router) {

  }

  videoAcnur = '';
  videoUNFPA = '';
  videoOIM = '';
  videoUnicef = '';
  videoOnuMujeres='';

  titulo: string = 'ACNUR - Agencia de la ONU para los refugiados'
  texto: string = 'En Darién, el ACNUR apoya la respuesta del Gobierno de Panamá en las Estaciones Temporales de Recepción Migratoria (ETRMs) y las comunidades de acogida proporcionando espacios seguros y protección frente a las duras condiciones climáticas, servicios básicos de salud y salud mental, así como proporcionando información sobre los riesgos del viaje. El ACNUR ofrece apoyo legal a las personas con necesidades de protección internacional, remitiendo a las personas que requieren asistencia especializada a las instituciones pertinentes, así como proporcionando información sobre el sistema de asilo en Panamá, ayudando a los necesitados con su solicitud de estatuto de refugiado. El ACNUR también apoya a las comunidades indígenas en Darién, facilitando talleres y programas para fortalecer y promover la cohesión social y la convivencia pacífica.'

  cargarImg: string = 'https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4';
  images = [
    'https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4',
    'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',

  ];
  titulos = [
    'ACNUR - Agencia de la ONU para los refugiados', 'UNFPA - Fondo de Población de las Naciones Unidas', 'UNICEF - Fondo de las Naciones Unidas para la Infancia', 'OIM - Organización Internacional para las Migraciones'
  ]



  inicio_eng(lang?:string) {
    this.router.navigate(["home_eng"]);
}

  textos = ['En Darién, el ACNUR apoya la respuesta del Gobierno de Panamá en las Estaciones Temporales de Recepción Migratoria (ETRMs) y las comunidades de acogida proporcionando espacios seguros y protección frente a las duras condiciones climáticas, servicios básicos de salud y salud mental, así como proporcionando información sobre los riesgos del viaje. El ACNUR ofrece apoyo legal a las personas con necesidades de protección internacional, remitiendo a las personas que requieren asistencia especializada a las instituciones pertinentes, así como proporcionando información sobre el sistema de asilo en Panamá, ayudando a los necesitados con su solicitud de estatuto de refugiado. El ACNUR también apoya a las comunidades indígenas en Darién, facilitando talleres y programas para fortalecer y promover la cohesión social y la convivencia pacífica.',
    'El Fondo de Población de las Naciones Unidas (UNFPA) en Panamá aborda la crisis humanitaria en Darién con un enfoque integral que incluye desarrollo humano, acción humanitaria y construcción de la paz, centrando sus esfuerzos en la salud sexual y reproductiva y la prevención de violencia de género. A través de este enfoque, más de 26 mil mujeres recibieron servicios de salud reproductiva y más de 33 mil se beneficiaron de información sobre prevención de violencia de género. Además, en colaboración con el Ministerio de Salud, el UNFPA inauguró la Casa Materna de Metetí para mejorar los servicios de salud materna y reducir la mortalidad, así como estableció el primer Centro de Atención Integral para sobrevivientes de violencia en Metetí. Entre 2023 y 2024, el proyecto manejó un presupuesto de 568 mil dólares y benefició a más de 59 mil mujeres y niñas, contribuyendo significativamente a salvar vidas.',
    'UNICEF se esfuerza por construir sociedades e instituciones resilientes capaces de gestionar situaciones de riesgo y emergencias humanitarias, enfocándose especialmente en proteger los derechos de los niños, niñas y adolescentes, incluidos aquellos en contextos migratorios en Panamá. Desde 2018, UNICEF ha implementado un Plan de Acción Humanitaria para esta población, trabajando en estrecha colaboración con otros organismos internacionales y autoridades locales en sectores prioritarios como agua, higiene, saneamiento, salud y protección en la provincia de Darién. Además, lleva a cabo programas de atención psicosocial, monitorea los flujos migratorios de menores, ofrece asistencia técnica en protocolos de protección infantil y desarrolla iniciativas contra la discriminación y la xenofobia, reforzando la importancia de los derechos de los niños migrantes a través de campañas en redes sociales.',
    'La Organización Internacional para las Migraciones (OIM), en coordinación con socios del Sistema de Naciones Unidas y de sociedad civil, contribuye a los esfuerzos del Estado panameño en la respuesta a los movimientos mixtos que ingresan por la selva del Darién, brindando asistencia humanitaria vital a personas migrantes en condiciones de vulnerabilidad en tránsito, a través de la distribución de alimentos y artículos esenciales no alimentarios (NFIs), la prestación de servicios de salud, incluido el apoyo psicosocial y de salud mental, y la entrega de medicamentos y suministros médicos, así como servicios de protección. La OIM también apoya la mejora y rehabilitación de las Estaciones Temporales de Recepción de Migrantes (ETRMs), facilita las actividades de desarrollo de capacidades en materia de Coordinación y Gestión de Campamentos (CCCM, por sus siglas en inglés), y colidera y apoya mecanismos interagenciales e interinstitucionales de coordinación en materia de migración en diferentes niveles.'
  ]

  ACNUR(video?: boolean) {
    document.getElementById('btn-acnur')?.click();
    this.videoAcnur = "videos/acnur.mp4";
    document.getElementById('videoAcnur')?.setAttribute('src', this.videoAcnur);

  }

  ACNURClose(video?: boolean) {
    this.videoAcnur = "";
    document.getElementById('videoAcnur')?.setAttribute('src', "");
  }






  UNFPA(video?: boolean) {
    document.getElementById('btn-unfpa')?.click();
    this.videoUNFPA = "videos/unfpa.mp4";
    document.getElementById('videoUNFPA')?.setAttribute('src', this.videoUNFPA);
  }

  UNFPAClose(video?: boolean) {
    this.videoUNFPA = "";
    document.getElementById('videoUNFPA')?.setAttribute('src', "");
  }


  UNICEF() {
    document.getElementById('btn-unicef')?.click();
    this.videoUnicef = "videos/unicef.mp4";
    document.getElementById('videoUnicef')?.setAttribute('src', this.videoUnicef);
  }

  UNICEFClose() {
    this.videoUnicef = "";
    document.getElementById('videoUnicef')?.setAttribute('src', "");
  }

  OIM(video?: boolean) {
    document.getElementById('btn-oim')?.click();
    this.videoOIM = "videos/oim.mp4";
    document.getElementById('videoOIM')?.setAttribute('src', this.videoOIM);
  }

  OIMClose(video?: boolean) {
    this.videoOIM = "";
    document.getElementById('videoOIM')?.setAttribute('src', "");
  }


  ONUMUJERES(video?: boolean){
    document.getElementById('btn-onuMujeres')?.click();
    this. videoOnuMujeres = "videos/onu.mp4";
    document.getElementById('videoOnuMujeres')?.setAttribute('src', this. videoOnuMujeres);
  }

  ONUMUJERESClose(video?: boolean){
    this.videoOnuMujeres= "";
    document.getElementById('videoOnuMujeres')?.setAttribute('src', "");
  }



  imageObject: Array<object> = [{
    image: 'images/unhcr/u1.jpg',
    thumbImage: 'images/unhcr/u1.jpg',
  },
  {
    image: 'images/unhcr/u2.jpg',
    thumbImage: 'images/unhcr/u2.jpg',
  },
  {
    image: 'images/unhcr/u3.jpg',
    thumbImage: 'images/unhcr/u3.jpg',
  },

  {
    image: 'images/unhcr/u1.jpg',
    thumbImage: 'images/unhcr/u1.jpg',
  },
  {
    image: 'images/unhcr/u2.jpg',
    thumbImage: 'images/unhcr/u2.jpg',
  },
  {
    image: 'images/unhcr/u3.jpg',
    thumbImage: 'images/unhcr/u3.jpg',
  }
  ];


  

  modal() {

    Swal.fire({
      title: '<h4>ACNUR (Agencia de la ONU para los Refugiados)</h4>',
      color: '#ffffff', // Color del texto
      background: '#000000', // Color de fondo del modal
      confirmButtonText: '<i class="fa-solid fa-rectangle-xmark"></i>', // Texto y icono del botón de confirmación
      confirmButtonColor: '#ffffff', // Color del fondo del botón
      backdrop: 'rgba(0, 0, 0, 0.9)',

      customClass: {
        confirmButton: 'custom-confirm-btn',
        closeButton: 'custom-close-btn', // Clase personalizada para el botón de cierre

      },
    });

  }

  
}
