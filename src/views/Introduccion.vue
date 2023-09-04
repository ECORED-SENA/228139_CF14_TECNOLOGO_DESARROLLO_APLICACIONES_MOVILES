<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-lg-6
        p.mb-4 Las actividades realizadas por medio de las pruebas de <i>software</i> favorecen la entrega de un producto de calidad que cumpla, de manera coherente, con los requerimientos del cliente y de los usuarios; es importante definir y utilizar pruebas estandarizadas que faciliten la realización y comprensión de las mismas.
        .cajon.color-acento-contenido.p-4.mb-4
          p Para la elaboración de este componente, se abordaron varios autores conocidos en instalación y despliegue de aplicaciones móviles, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la programación de aplicaciones para dispositivos móviles
      .col-lg-6: img(src="@/assets/curso/img1.jpg")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
