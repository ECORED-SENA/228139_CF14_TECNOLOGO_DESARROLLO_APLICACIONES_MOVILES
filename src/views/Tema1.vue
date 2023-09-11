<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Calidad en desarrollo de <i>apps</i> móviles
    p.mb-5 En las etapas finales del desarrollo de aplicaciones móviles, antes de crear el ejecutable, ha de tenerse seguridad en que el producto que se entrega funciona correctamente y cumple con los estándares de calidad del desarrollo de <i>software</i> ISO 9126. Para verificar los requisitos del usuario o los parámetros requeridos por el cliente, modificar la funcionalidad o evitar errores, fallas o anomalías, deben realizarse pruebas de <i>software</i> que permitan evaluar el correcto funcionamiento de la aplicación.
      br
      br
      |Conozca las acciones y aspectos implícitos del proceso de determinación de la calidad del desarrollo y funcionamiento de las aplicaciones móviles. 
    SlyderE(indicadores="")(data-aos="zoom-in-up").mb-5
      .row
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 ¿Qué es la calidad?
          p Es el grado con el que un sistema, componente o proceso cumple con los requisitos especificados y las necesidades o expectativas del cliente o usuario. Se define la calidad como un proceso eficaz de <i>software</i> que se aplica de manera que crea un producto útil, que proporciona valor medible a quienes lo producen y a quienes lo utilizan. (Bolaños et al., 2008)
        .col-md-8.pe-3
          figure
            img(src='@/assets/curso/img2.jpg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Evaluar cada proceso
          p Realizar las pruebas de <i>software</i> es necesario para ofrecer la posibilidad de evaluar cada uno de los procesos, antes de entregar y desplegar la aplicación en las tiendas, entregando un producto con buenos estándares de calidad. Pero también, antes de enfatizar sobre las pruebas de <i>software</i>, es de gran importancia definir algunos parámetros en los estándares de calidad de <i>software</i> donde se fundamentan algunas de las pruebas que son realizadas para definir la calidad del producto.
        .col-md-8.pe-3
          figure
            img(src='@/assets/curso/img3.jpg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Atributo: actividad verificada y medida
          p El modelo de calidad ISO 9126 realiza la clasificación de eficacia de <i>software</i> dividiendo los temas en categorías, y estas categorías deben cumplir con otras características que se denominan subcategorías, mucho más específicas. Las características, a su vez, están divididas en atributos; y un atributo es una actividad que debe ser verificada o medida en el funcionamiento de la aplicación. Los atributos no están definidos en el estándar, ya que varían entre diferentes productos y desarrollos de <i>software</i>.
          //- a.boton.color-acento-contenido.mb-5.indicador__container.mx-2(@click="modal1 = true")
          //-   span 
          //-     b Atributos
          //-   .indicador--click(v-if="mostrarIndicador")
        .col-md-8.pe-3
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1
            span Atributos que abarcan las características de la norma ISO/IEC 9126
          figure
            img(src='@/assets/curso/img8.svg', alt='Los atributos de la norma ISO/IEC 9126 son la funcionalidad, la confiabilidad, usabilidad, eficiencia, mantenimiento y portabilidad.')
      .row
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Pruebas de <i>software</i>
          p Para cumplir con estos estándares de calidad establecidos en el desarrollo de <i>software</i>, es necesario realizar actividades como las pruebas de <i>software</i>, donde se pueden identificar las fallas o falencias en cada uno de los parámetros establecidos, generando un informe con los hallazgos y errores, con el fin de solucionarlos a tiempo y lograr realizar la entrega de un producto de calidad. De esta manera, se garantiza que la aplicación logre pasar las pruebas que realizan las tiendas de las aplicaciones y seguir cumpliendo con las directrices de calidad de Apple y Android.
        .col-md-8.pe-3
          figure
            img(src='@/assets/curso/img5.jpg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Fases de aplicación de las pruebas
          p Las pruebas se pueden dividir en cuatro grandes grupos que son: las fases de inicio, planificación, diseño y ejecución. En cada una de estas fases, es posible evaluar e identificar errores.  En el desarrollo de aplicaciones móviles, es pertinente realizar este tipo de pruebas y validaciones a tiempo, para no entrar en reprocesos que incrementan los lapsos de producción y los costos del desarrollo de un producto.
        .col-md-8.pe-3
          figure
            img(src='@/assets/curso/img6.jpg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Por una <em>app</em> móvil óptima
          p Las pruebas de calidad favorecen la construcción e integración de <i>software</i> y la integración de los productos asociados con su correcto funcionamiento, como la integración de las API de terceros. Es preciso utilizar un modelo de pruebas que sea claro y detallado y que se adapte a las necesidades de la aplicación. Las pruebas son elemento básico para alcanzar el desarrollo de una aplicación móvil de calidad; permiten nivelar la estrategia de trabajo, con el fin de lograr una mayor confiabilidad, mantenibilidad y facilidad de las soluciones. (Hesham y Shakeel, 2018)
        .col-md-8.pe-3
          figure
            img(src='@/assets/curso/img7.jpg', alt='')
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-lg-10
          img(src="@/assets/curso/img8.svg")
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Norma ISO 29119
    .row.mb-5
      .col-lg-7
        p.mb-4 El objetivo de la norma ISO/IEC 29119, pruebas de <i>software</i>, es proporcionar una norma definitiva para las pruebas de <i>software</i>, que defina el vocabulario, los procesos, documentación, técnicas y un modelo de evaluación del proceso de pruebas de <i>software</i> que se puede utilizar dentro de cualquier ciclo de vida de desarrollo (Hesham y Shakeel, 2018).
        .cajon.color-acento-contenido.p-4.mb-4
          p El principal objetivo para realizar las pruebas es identificar si el <i>software</i> hace lo que debe hacer, de la manera correcta. Pero también probar si hace o genera otras actividades como efectos secundarios adversos, descubrir un fallo, una falencia, algún detalle que aún no ha sido identificado y que tiene consecuencias en el correcto funcionamiento de los procesos y actividades, y no sólo de la aplicación que se está evaluando, sino de todo el ecosistema en el cual está trabajando. Lo ideal es encontrar la mayor cantidad de errores en el menor tiempo posible y con la menor cantidad de recursos.
      .col-lg-5: img(src="@/assets/curso/img9.svg")(data-aos="slide-left")
    p.mb-5 
      b ISO/IEC 29119 
      |consta de 5 partes:
    .row.mb-5.justify-content-center(data-aos="zoom-in-up ")
      .col-lg-6
        .contenedor-tarjetas.d-flex.mb-3
          .contenedor-tarjetas__icono.px-4.color-1.d-flex.align-content-center
            h2.mb-0 1
            img(src="@/assets/curso/img10.svg" style="width: 47px")
          .contenedor-tarjetas__textos.px-4.color-1-claro.align-items-center.d-flex
            h3.mb-0 Conceptos y definiciones.
        .contenedor-tarjetas.d-flex.mb-3
          .contenedor-tarjetas__icono.px-4.color-1
            h2.mb-0 2
            img(src="@/assets/curso/img10.svg" style="width: 47px")
          .contenedor-tarjetas__textos.px-4.color-1-claro.align-items-center.d-flex
            h3.mb-0 Procesos de prueba.
        .contenedor-tarjetas.d-flex.mb-3
          .contenedor-tarjetas__icono.px-4.color-1
            h2.mb-0 3
            img(src="@/assets/curso/img10.svg" style="width: 47px")
          .contenedor-tarjetas__textos.px-4.color-1-claro.align-items-center.d-flex
            h3.mb-0 Documentación de prueba.
        .contenedor-tarjetas.d-flex.mb-3
          .contenedor-tarjetas__icono.px-4.color-1
            h2.mb-0 4
            img(src="@/assets/curso/img10.svg" style="width: 47px")
          .contenedor-tarjetas__textos.px-4.color-1-claro.align-items-center.d-flex
            h3.mb-0 Técnicas de prueba.
        .contenedor-tarjetas.d-flex.mb-3
          .contenedor-tarjetas__icono.px-4.color-1
            h2.mb-0 5
            img(src="@/assets/curso/img10.svg" style="width: 47px")
          .contenedor-tarjetas__textos.px-4.color-1-claro.align-items-center.d-flex
            h3.mb-0 Pruebas dirigidas por palabras clave.
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Tipos de pruebas de <i>software</i>
    .row.mb-5
      .col-lg-7
        p Las pruebas de <i>software</i> permiten identificar la presencia de defectos en <i>software</i>; sin embargo, no garantizan, completamente, que no haya defectos ocultos en el <i>software</i>, y el hecho de que no se identifiquen tales defectos, no es una evidencia de que el <i>software</i> esté totalmente correcto. 
          br
          br
          |Las pruebas, en conjunto, tienen como objetivo principal realizar una verificación y validación de cada uno de los procesos y actividades realizadas por la aplicación, independientemente de las características y el entorno donde se ejecute.
          br
          br
          |En el siguiente recurso, conozca los tipos de pruebas de <i>software</i> más importantes y profundice en los elementos que aseguran la calidad de las aplicaciones móviles híbridas y de los beneficios que estas ofrecen para organizaciones y usuarios.
      .col-lg-5: img(src="@/assets/curso/img11.jpg")(data-aos="slide-left")
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Uf1Kk52ONYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Tipos de pruebas de #[em software]
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Pruebas de calidad de <i>software</i>
    p.mb-5 En el mismo sentido que se aplican todas las pruebas de <i>software</i>, se han de aplicar las pruebas de calidad del <i>software</i>, las cuales tienen unos pasos a seguir y favorecen una comprensión clara del <i>software</i> en términos de diseño, especificaciones, tiempos de trabajo, componentes, ejecución. Estas pruebas de calidad del <i>software</i> incluyen una estrategia y un plan de prueba, e incluso, el informe final de la prueba aplicada.
      br
      br
      |A continuación, afiance sus conocimientos sobre los aspectos que enmarcan y dan rumbo a la aplicación de pruebas de calidad de <i>software</i>. 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-1-claro")
      .row(titulo="Comprensión clara del <em>software</em>")
        .col-md-8.mb-4.mb-md-0
          p.ps-5 El proceso de control de calidad del <i>software</i> inicia con la comprensión concreta de la funcionalidad del <i>software</i> que se está desarrollando. Esto incluye revisar los requisitos del usuario, los requisitos no funcionales, las especificaciones funcionales, los casos de uso y los documentos que se utilizaron en el levantamiento de información. Los grupos de interés realizan el trabajo definido en horas y días, por ejemplo; y lo hacen con el objetivo de establecer expectativas claras y hacer mejores planes, estableciendo tiempos de entrega acordes con los procesos por desarrollar.
        .col-md-4
          figure
            img(src='@/assets/curso/img12.svg', alt='')
      .row(titulo="Estrategia y plan de prueba").justify-content-center
        .col-md-8.mb-4.mb-md-0
          p.ps-5 Se deben formular las siguientes preguntas: ¿Por qué realizar la prueba? ¿Qué se intenta aprender? ¿Cuántas pruebas son suficientes? ¿Cómo organizar el trabajo? ¿Qué tipo de prueba de <i>software</i> se desea realizar? ¿Cuánto tiempo se tarda en completar la tarea de prueba?  Por lo tanto, se debe definir el alcance, los recursos necesarios, el entorno de prueba, el cronograma, el administrador, la metodología de gestión de riesgos y otras partes consideradas necesarias.
        .col-md-4
          figure
            img(src='@/assets/curso/img13.svg', alt='')
      .row(titulo="Componentes del proceso")
        .col-md-8.mb-4.mb-md-0
          p.ps-5 Con base en la estructura de componentes establecida para el <i>software</i> en desarrollo, se determina qué pruebas de calidad de <i>software</i> son apropiadas para cada <i>software</i>. Todos los resultados del ciclo de desarrollo deben someterse a revisiones de calidad, no sólo el código. Es decir, especificaciones funcionales, diseño técnico, manuales de usuario y otra documentación. El proceso incluye un diseño de caso de prueba para cada componente relacionado. Los casos de prueba deben corresponder a posibles escenarios de producción e incluir las variables requeridas. Las pruebas diseñadas incluyen pruebas de caja negra y pruebas de caja blanca. 
        .col-md-4
          figure
            img(src='@/assets/curso/img14.svg', alt='')
      .row(titulo="Ejecución de prueba ")
        .col-md-8.mb-4.mb-md-0
          p.ps-5 Esto permite realizar pruebas de calidad de <i>software</i> diseñadas y estructuradas, lo que le permite clasificar el equipo de prueba por componente o dividirlo en paquetes que serán asignados a grupos especializados en el tema. Debe haber una visibilidad de casos y problemas que le impida ejecutar otros casos de prueba y realizar acciones. Además, situación diferente con el ambiente de desarrollo y de pruebas (como errores de no disponibilidad o no relacionados con el desarrollo) debe informarse a sus respectivos equipos. 
        .col-md-4
          figure
            img(src='@/assets/curso/img15.svg', alt='')
      .row(titulo="Informe de progreso")
        .col-md-8.mb-4.mb-md-0
          p.ps-5 Esto incluye mantener informes regulares sobre el progreso de las pruebas. Reporta casos de prueba totales, ejecución de casos de prueba y casos exitosos diariamente o varias veces al día, para proyectos críticos. Casos exitosos, casos pendientes, casos con fallas, número de incidencias y otros aspectos. Existen herramientas de gestión de pruebas de <i>software</i> que automatizan la publicación de este tipo de informes: informes de incidente automatizados.
        .col-md-4
          figure
            img(src='@/assets/curso/img16.svg', alt='')
      .row(titulo="Reportar las incidencias")
        .col-md-8.mb-4.mb-md-0
          p.ps-5 Es necesario tener un informe de incidente registrado. Esto incluye, al menos, la fecha y la hora, un título descriptivo, una descripción a detalle de las fallas detectadas y las inconsistencias, la ubicación y el entorno en que se detectó (incluidos los usuarios y roles que verifica) y las señales de error, si hay una ubicación, y pasos para ubicarla de manera sencilla, con el fin de corregirla.
        .col-md-4
          figure
            img(src='@/assets/curso/img17.svg', alt='')
      .row(titulo="Registro de procesos y elaboración informe final")
        .col-md-8.mb-4.mb-md-0
          p.ps-5 Incluye la finalización del registro y organización de las evidencias de prueba y otra documentación de los casos de prueba ejecutados. Una vez finalizada la prueba, se creará un informe final que describe la prueba realizada, incluyendo casos, resultados, problemas encontrados, lecciones aprendidas y otros aspectos que permitirán tener la trazabilidad de las fallas, errores e inconsistencias, para realizar su pronta corrección.
        .col-md-4
          figure
            img(src='@/assets/curso/img18.svg', alt='')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.contenedor-tarjetas
  &__icono
    img, h2
      transition: opacity 0.3s
    position: relative
    display: flex
    align-items: center
    h2
      font-size: 72px
      color: white
    img
      position: absolute
      opacity: 0

    &:hover
      h2
        opacity: 0
      img
        opacity: 1
    &:hover + .img-hover
      display: block
      opacity: 1
  &__textos
    width: 100%
.img-hover
  display: none
  position: absolute
  opacity: 0
</style>
