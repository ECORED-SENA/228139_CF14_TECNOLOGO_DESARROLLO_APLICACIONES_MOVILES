<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Etapas para realizar pruebas de <i>software</i>
    .row.mb-5
      .col-lg-7
        p.mb-4 Para realizar una prueba rigurosa a las aplicaciones móviles es necesario contar con un orden y estructura que permitan cumplir con un proceso acorde con las necesidades y exigencias del proyecto. Se debe analizar cada una de las fases del proceso para lograr buenos resultados, identificando el flujo de trabajo que se debe seguir para encontrar los fallos, errores y falencias, antes de entregar el producto a los usuarios.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Las fases o etapas de realización de las pruebas de <i>software</i> son: 
            b fase de inicio, fase de planeación, fase de diseño, fase de ejecución, fase de cierre o finalización
            |; con una fase transversal de monitoreo y control. (Victoria y Ramírez, 2017)
      .col-lg-5: img(src="@/assets/curso/img19.jpg")(data-aos="slide-left")
    .tarjeta.color-1-claro.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img20.svg")

        .col-md.col-lg-6
          .titulo-segundo
            h3 Etapas Pruebas de <i>software</i>
          p.mb-4 Para una mejor comprensión del flujo de trabajo en la aplicación de las pruebas de <i>software</i>, descargue el  
            b Anexo_1_EtapasPruebasde<i>software </i> 
            | y analice el esquema que allí se presenta. Recuerde llevar registro de los elementos más destacados de este punto.
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_EtapasPruebasdeSoftware.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
