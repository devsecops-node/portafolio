import { Injectable } from '@angular/core';

export interface ProyectsUI{
  semana: number,
  name:string,
  resumen: string,
  imagen?:string
}

@Injectable({
  providedIn: 'root'
})
export class ProvideProyectsService {

  proyects:Array<ProyectsUI> = [
    {semana:1, name: 'Herramientas Clave en el Desarrollo Web', resumen:' He adquirido conocimientos sobre el mundo del desarrollo web, que abarca diversas especializaciones, como los desarrolladores frontend, responsables de la apariencia visual de los sitios web mediante tecnologías como HTML, CSS y JavaScript, y los desarrolladores backend, que trabajan en la infraestructura y la lógica que sustentan el funcionamiento de un sitio web utilizando lenguajes como Python o Java. También, he comprendido la importancia de los desarrolladores fullstack, que dominan ambas áreas para tener una visión integral del proceso de desarrollo. Además, he descubierto que una herramienta fundamental en este campo es Visual Studio Code, un entorno de desarrollo versátil que facilita la creación, edición y depuración de código en múltiples lenguajes, con extensiones que agilizan el trabajo al proporcionar atajos y sugerencias de código.', imagen:'qweqwe'},
    {semana:2, name:' Estructura Básica de una Página Web y Sus Componentes', resumen:' He aprendido que la creación de una página web es un proceso que implica la utilización de lenguajes de marcado como HTML y XML, siguiendo los estándares de la Plataforma Web Abierta. Esto abarca la estructuración del contenido mediante etiquetas HTML5, la representación del DOM en forma de árbol y el entendimiento del ciclo de vida de una página web. También comprendí la importancia de optimizar la página para los motores de búsqueda (SEO) y garantizar su compatibilidad con diferentes navegadores. ', imagen:'qweqwe'},
    {semana:3, name:' Fundamentos de HTML para Crear Páginas Web', resumen:' He adquirido conocimientos esenciales en el uso de HTML, la piedra angular de la construcción de páginas web. Ahora puedo crear una estructura básica de página web, empleando etiquetas como <html> para definir el inicio del documento, <head> para incluir metadatos como el título de la página, y <body> para el contenido visible. Además, he aprendido a utilizar etiquetas como <h1> para encabezados, <p> para párrafos, <a> para enlaces, y <img> para insertar imágenes en una página web. También comprendo cómo organizar elementos en listas utilizando <ul> y <li>, y cómo dar formato al texto con <strong> para negritas y <em> para cursivas. Estos conocimientos me brindan una base sólida para iniciar la creación de páginas web simples y me inspiran a seguir explorando y aprendiendo sobre el desarrollo web y sus infinitas posibilidades.', imagen:'qweqwe'},
    {semana:4, name:' Estilo en la Creación Web mediante CSS', resumen:' He adquirido conocimientos esenciales en el uso de CSS (Cascading Style Sheets) para dar estilo y diseño a las páginas web que construyo con HTML. He aprendido a aplicar estilos a elementos HTML mediante selectores, propiedades y valores CSS. Puedo modificar colores de fondo y texto, ajustar márgenes y espaciado, definir fuentes y tamaños de texto, y crear diseños de página personalizados utilizando propiedades como display, position y float. Además, he comprendido cómo utilizar selectores de clases y de ID para aplicar estilos específicos a elementos individuales o grupos de elementos. Estos conocimientos en CSS me permiten dar vida a mis páginas web y mejorar significativamente su apariencia y presentación.', imagen:'qweqwe'},
    {semana:5, name:' CSS: Flexbox, Diseño Fluid y Diseño Responsivo', resumen:' He aprendido de manera significativa sobre tres aspectos fundamentales en el diseño web: el diseño flexbox, el diseño fluido y el diseño responsivo, todos ellos potenciados por la incorporación de Google Fonts. El diseño flexbox me ha proporcionado la capacidad de crear diseños versátiles y eficientes, ajustando automáticamente los elementos dentro de un contenedor para que se adapten perfectamente a una amplia gama de tamaños de pantalla. Por otro lado, el diseño fluido me ha enseñado cómo crear diseños que fluyen de manera armoniosa en diversos dispositivos, asegurando una experiencia de usuario uniforme y agradable. Además, el diseño responsivo me ha mostrado la importancia de desarrollar sitios web que se adapten de manera inteligente a distintos dispositivos y tamaños de pantalla, utilizando técnicas como las consultas de medios en CSS para lograr una presentación óptima en cada situación. La incorporación de Google Fonts ha enriquecido aún más mi comprensión al permitirme utilizar tipografías personalizadas y atractivas en mis proyectos, mejorando la estética y la legibilidad de mis diseños web. Estos conceptos y herramientas son esenciales para la creación de sitios web atractivos y funcionales en la era digital actual.', imagen:'qweqwe'},
    {semana:6, name:' Desarrollo Web: JavaScript con Canvas', resumen:' He aprendido a utilizar JavaScript para trabajar con el elemento Canvas en el desarrollo web. Con JavaScript, he adquirido conocimientos para crear interactividad y funcionalidad en mis sitios web, permitiendo la manipulación dinámica de contenido y la respuesta a eventos del usuario. Además, el uso de Canvas me ha proporcionado la capacidad de crear gráficos y animaciones en tiempo real, lo que agrega una dimensión visual y creativa a mis proyectos web. Estas habilidades me han brindado una comprensión sólida de cómo hacer que mis sitios web sean más dinámicos y visuales, mejorando la experiencia del usuario.', imagen:'qweqwe'},
    {semana:7, name:'Parcial 01',resumen:'por definirse', imagen:'qweqwe'}
  ]
  constructor() { }

  currentProyect!:ProyectsUI

  getAllProyects():Array<ProyectsUI>{
    return this.proyects
  }

  setCurrentProyect(proyect:ProyectsUI | null){
    if(proyect){
      this.currentProyect = proyect
    } else{
      console.log('no asignado nada')
    }
  }

  getCurrentProyect():ProyectsUI{
    return this.currentProyect
  }

}
