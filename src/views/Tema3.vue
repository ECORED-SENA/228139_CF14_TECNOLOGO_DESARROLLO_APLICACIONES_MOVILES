<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas para pruebas de #[em apps] móviles 
    figure.mb-5
      img(src='@/assets/curso/img21.jpg', alt='Tablero con pegatinas')
    p.mb-5 Para realizar pruebas de funcionalidad y calidad de <i>software</i>, existe una gran cantidad de herramientas que ofrecen tal servicio y que aportan a la ejecución de esta actividad, facilitando entornos de evaluación de cada uno de los módulos y componentes de las aplicaciones móviles. En su mayoría, estos instrumentos son de pago y requieren gran cantidad de esfuerzo del grupo de trabajo para lograr un óptimo resultado.
      br
      br
      |A continuación, se presentan algunas herramientas reconocidas y muy usadas en los procesos de prueba de aplicaciones móviles.
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Herramientas de pruebas")
        .row.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/img22.jpg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Herramientas de pruebas más populares
            p Uno de los más populares y utilizados es Testim. Se trata de una herramienta de prueba de <i>software</i> que utiliza el aprendizaje automático y soporta pruebas para dispositivos móviles. Otro instrumento es BlazeMeter, que se utiliza para ejecutar casos de prueba de rendimiento en aplicaciones móviles, API o aplicaciones web, para evaluar el rendimiento en cualquier etapa del desarrollo de la aplicación.  Otra herramienta muy popular entre los desarrolladores de <i>software</i> es Selenium WebDriver Mobile. Uno de sus grandes inconvenientes es que sólo simula Android. Para solucionar este problema se generó un <i>framework</i> Appium que permite trabajar con Windows Phone, iOS y Android.
      .py-3.py-md-4(titulo="<em>AWS Device Farm</em>")
        .row.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/img23.jpg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 <i>AWS Device Farm</i>
            p Es un servicio de prueba de aplicaciones que permite mejorar la calidad de las páginas web y aplicaciones móviles al realizar pruebas en diferentes navegadores de escritorio y diferentes sistemas operativos móviles sin tener que configurar ni administrar la infraestructura de prueba. Este servicio permite ejecutar pruebas en varios navegadores de escritorio y dispositivos reales, que aceleran la configuración y realización de pruebas, obteniendo los resultados en videos y registros para ayudar a identificar, rápidamente, problemas en su aplicación.
      .py-3.py-md-4(titulo="Herramienta  <em>TestDroid</em>")
        .row.justify-content-center
          .col-md-5
            figure
              img(src='@/assets/curso/img24.jpg', alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Herramienta  #[em TestDroid]
            p Esta es una herramienta en línea, de la compañía TestMatick, para pruebas de interfaz de usuario, programadas en diferentes dispositivos Android. #[em TestDroid] permite a los desarrolladores e investigadores documentar los <i>scripts</i> de prueba, los cuales se ejecutan automáticamente en paralelo con la aplicación, en diferentes dispositivos. Esta herramienta informa los resultados de estas pruebas y permite a los desarrolladores e investigadores identificar rápidamente las versiones de Android donde las aplicaciones pueden no funcionar. Al mismo tiempo, la herramienta se puede utilizar para identificar una amplia gama de problemas y frecuentes errores de programación asociados con cada dispositivo.
            .d-flex
              a.boton.color-acento-botones.mb-5.indicador__container(@click="modal1 = true").me-5
                span 
                  b La ejecución de pruebas
                .indicador--click(v-if="mostrarIndicador")
              a.boton.color-acento-botones.mb-5.indicador__container(@click="modal2 = true").me-5
                span 
                  b #[em TestDroid] permite
                .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.justify-content-center
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2
          span Pasos para la ejecución de pruebas automatizadas
        img(src="@/assets/curso/img25.svg" alt="Seis pasos para la ejecución de pruebas.")
    ModalA(:abrir-modal.sync="modal2")
      .tarjeta.color-2-claro.p-5
        .row.justify-content-center
          .col-lg-10
            h2 <i>TestDroid</i> permite específicamente:
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span A
                h5.mb-0 Ejecutar pruebas en un dispositivo específico en el que el cliente desea usar la aplicación.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span B
                h5.mb-0 Generar un informe en pdf de las pruebas realizadas por el dispositivo.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span C
                h5.mb-0 Evaluar la portabilidad y la compatibilidad para brindar la capacidad de realizar pruebas en una variedad de dispositivos móviles.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span D
                h5.mb-0 Evaluar el consumo de CPU y RAM de dispositivos móviles.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span E
                h5.mb-0 Evaluar el tiempo de respuesta de la aplicación, el consumo de batería, la resolución y el tamaño de la pantalla.
            .color-4--borde.py-3.px-3
              h5 Contras:
              ol.lista-ol--cuadro
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 1
                  h5.mb-0 No tiene control sobre la movilidad del usuario. Comprobación de la conexión a la red.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  h5.mb-0 Debido a que la herramienta está en línea, los errores de conexión de red pueden afectar el rendimiento de la aplicación bajo prueba.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
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
.lista-ol--cuadro__vineta
  span
    color: $color-sistema-texto
    font-weight: bold
.color-4--borde
  border: 2px solid #FFA726
</style>
