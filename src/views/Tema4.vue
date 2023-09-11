<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Validación de lineamientos para envió a las #[em app stores]
    .row.mb-5
      .col-lg-7
        p.mb-4 Las aplicaciones originales de iPhone y Android sólo se pueden distribuir a través de sus respectivas tiendas en línea #[em (app store)]. La #[em app store] tiene una serie de pautas que sus aplicaciones deben seguir. Por lo tanto, al probar aplicaciones móviles, debe incluir casos de prueba para verificar el cumplimiento de estas pautas. 
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Para identificar estos casos de prueba, se deben consultar las condiciones impuestas por Apple para dispositivos <i>iOS</i> como <em>iPhones y iPads</em>, así como las pautas requeridas por Google para teléfonos y tabletas Android. 
      .col-lg-5: img(src="@/assets/curso/img26.jpg")(data-aos="slide-left")
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Google Play
    .row.mb-5
      .col-lg-7
        p.mb-4 Android ofrece muchas opciones para la distribución de aplicaciones. Hay otras tiendas alternativas, pero Google Play es la plataforma principal para distribuir aplicaciones de Android. Lo primero que se debe realizar es crear una cuenta de desarrollador de Google Play para tener acceso al perfil de desarrollador y publicar la aplicación en Play Store. Esta suscripción tiene un costo que, para el año 2021, no supera los US$25 y con esa primera suscripción se tendrá acceso, de por vida, para publicar todas las aplicaciones que se quiera. 
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 La información suministrada durante el registro aparecerá más tarde en la tienda. Cuando el usuario final navegue por la aplicación en Play Store, podrá obtener información sobre la identidad del desarrollador. La información proporcionada por Play Store es la información que declaró cuando se abrió la cuenta de editor de Google. 
      .col-lg-5: img(src="@/assets/curso/img27.jpg")(data-aos="slide-left")
    p.mb-5 Conozca, ahora, aspectos de suma importancia en el proceso de validación y distribución de aplicaciones en Google Play.
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-9.mb-4.mb-md-0
          h3 Google Play
          p Google Play es una biblioteca que permite a los usuarios navegar y buscar aplicaciones según sus intereses. Cuando un usuario abre una lista de aplicaciones, sólo toma unos segundos determinar si satisface sus necesidades. Por esa razón es tan importante el ícono de la aplicación; este debe llamar la atención y hacer que sus anuncios sean atractivos para que los usuarios descarguen la aplicación. 
        .col-md-3
          figure
            img(src='@/assets/curso/img28.svg', alt='' style='width:190px')(data-aos="slide-left")
      .row
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img29.svg', alt='' style='width:190px')(data-aos="slide-right")
        .col-md-9
          h3 Texto descriptivo
          p El texto de descripción de la aplicación es fundamental para garantizar el éxito en el reconocimiento y aceptación de los usuarios. Dicho texto descriptivo debe seguir algunos criterios y parámetros de orden técnico y publicitario. Estos son los detalles que se muestran a los clientes en Google Play.
      .row
        .col-md-9.mb-4.mb-md-0
          h3 Descripción breve y capturas de pantalla
          p La descripción breve es el texto del anuncio. Es el primer texto que visualiza el usuario y describe la aplicación. La descripción larga utiliza las palabras clave adecuadas para describir con precisión la aplicación, esta debe atraer a los espectadores y optimizar el proceso de adquisición de la aplicación por curiosidad o por servicio. Son importantes también las capturas de pantalla adecuadas para mejorar la imagen de la marca y mostrar las mejores funciones de su aplicación.  
        .col-md-3
          figure
            img(src='@/assets/curso/img30.svg', alt='' style='width:190px')(data-aos="slide-left")
      .row
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img31.svg', alt='' style='width:190px')(data-aos="slide-right")
        .col-md-9
          h3 Publicación de la aplicación
          p Después de completar estos pasos, se puede descargar el binario (archivo <i> <b>.apk</b></i>) y seguir las instrucciones en la consola de Google para iniciar la instancia de publicación de la aplicación. <i>APK (Android Package Kit)</i> es un formato de archivo que utiliza el sistema operativo Android para instalar y ejecutar aplicaciones. Un archivo <i>APK</i> contiene todos los elementos que la aplicación necesita para funcionar efectivamente en un dispositivo Android.  Para realizar el proceso de publicación de la aplicación es necesario realizar el proceso de registro como desarrollador y realizar el pago correspondiente. 
      .row
        .col-md-9.mb-4.mb-md-0
          h3 Condiciones y requerimientos 
          p Es importante realizar el paso a paso, como lo indica Google, para lograr tener éxito. Es necesario seguir al pie de la letra cada una de las condiciones y requerimientos. Después de realizar el procedimiento, Google y su equipo de verificadores realizan las pruebas necesarias a la aplicación, comprobando si cumple con los requerimientos mínimos para ser publicada; esto puede tardar entre una o tres semanas aproximadamente, dependiendo de la cantidad de aplicaciones que están en proceso de aprobación.
        .col-md-3
          figure
            img(src='@/assets/curso/img32.svg', alt='' style='width:190px')(data-aos="slide-left")
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 App Store
    .row.mb-5
      .col-lg-7
        p.mb-4 El proceso de publicación de aplicaciones en la App Store requiere una preparación adecuada. Con más de dos millones de aplicaciones en la App Store, Apple ha establecido altos estándares y pautas estrictas para mantener este ecosistema seguro para sus usuarios y ofrecer, constantemente, aplicaciones de alta calidad.
          br
          br
          |A continuación, reconozca elementos de suma importancia que le orientarán sobre el proceso de publicación de aplicaciones en la App Store.
      .col-lg-5: img(src="@/assets/curso/img33.svg")(data-aos="slide-left")
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-2-claro.p-4(titulo="Cuenta de desarrollador de Apple")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img34.svg', alt='')
          .col-xl-8
            h4 Cuenta de desarrollador de Apple
            p De la misma manera que en Google Play es necesario realizar un registro, se requiere hacerlo como desarrollador de Apple para crear aplicaciones <i>iOS</i> y publicarlas en la respectiva App Store. Esta cuenta tiene un valor, para el año 2021, que no supera los US$99 y debe renovarse anualmente. Si no se renueva, se corre el riesgo de que las aplicaciones vinculadas a la cuenta se desvinculen, por lo cual es recomendable hacer los pagos de manera oportuna. Unirse a este programa para desarrolladores también le permite crear aplicaciones iOS y probarlas en su dispositivo.
      .tarjeta.color-2-claro.p-4(titulo="Envío a la App Store")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img35.svg', alt='')
          .col-xl-8
            h4 Envío a la App Store
            p Es importante leer las recomendaciones y las pautas de revisión de la App Store antes de comenzar el proceso de envío. De hecho, el equipo de revisión de Apple, por ejemplo, revisa cada aplicación antes de aprobar la versión. La mayoría de las negativas de Apple obedecen al incumplimiento de los conceptos básicos.
      .tarjeta.color-2-claro.p-4(titulo="<em>App Store Optimization</em> (ASO)")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img36.svg', alt='')
          .col-xl-8
            h4 <i>App Store Optimization</i> (ASO)
            p Es necesario proporcionar toda la información requerida, como íconos, vistas previas de aplicaciones / capturas de pantalla y metadatos, nombre de la aplicación, categoría, descripción detallada y palabras clave, <i>ASO</i> adicionales (procesos de optimización de las <i>apps</i>), antes de enviar la solicitud para revisión.
      .tarjeta.color-2-claro.p-4(titulo="Detalles de impacto y persuasión")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img37.svg', alt='')
          .col-xl-8
            h4 Detalles de impacto y persuasión
            p La primera frase (las tres primeras líneas) son las más importantes. Esto se debe a que los detalles de la aplicación se pueden confirmar sin que el usuario la descargue. En este paso es muy importante ser específicos, claros y concisos para transmitir el valor fundamental de la aplicación a los usuarios. El nombre de la cuenta de desarrollador debe ser el mismo que el del propietario de la aplicación. Este es el nombre que aparecerá debajo de la aplicación en la tienda. 
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
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
