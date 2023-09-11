export default {
  global: {
    componenteFormativo: 'Instalador y despliegue de la aplicación móvil',
    descripcionCurso:
      'En este componente, se conocerán los parámetros de desarrollo y ejecución de una <em>app</em> móvil. Se estudiarán los elementos que aseguren la calidad del montaje y despliegue de la <em>app</em>, identificando, además, fallas e inconsistencias del proceso de desarrollo y funcionamiento; junto con la definición de acciones correctivas y pruebas pertinentes para ofrecer una <em>app</em> útil, segura y acorde a necesidades de organizaciones o del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Calidad en desarrollo de <i>apps</i> móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Norma ISO 29119',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de pruebas de <i>software</i>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Pruebas de calidad de <i>software</i>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Etapas para realizar pruebas de <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Herramientas para pruebas de <i>apps</i> móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Validación de lineamientos para envió a las <i>app stores</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<i>Google Play</i>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<i>App Store</i>',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Calidad en desarrollo de <em>apps</em> móviles',
      referencia:
        'Tech Community Day. (2020, 13 junio). Guillermo Zepeda - Despliegue de Aplicaciones Móviles con AppCenter [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SC1sRe3h-Qs',
    },
    {
      tema:
        '4. Validación de lineamientos para envío a las <em>app stores</em>',
      referencia:
        'Moure, B. [MoureDev by Brais Moure]. (2019, 24 octubre). APP STORE Cómo PUBLICAR tu primera APP | Tutorial Español | MoureDev',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tg6YcD52jNA',
    },
    {
      tema: '4.1 Google Play',
      referencia:
        'Luján, E. D. [EDteam]. (2020, 16 junio). ¿Cómo subir tu <em>app</em> a la Play Store? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EOkKc1Oc92M',
    },
  ],
  glosario: [
    {
      termino: 'APK',
      significado:
        'es el formato de una aplicación desarrollada exclusivamente para el sistema operativo de Google, Android. APK es el acrónimo de <em>Android Application Package</em> y, en comparación, es como los archivos .EXE en Windows.',
    },
    {
      termino: 'ASO',
      significado:
        'proceso de optimizar aplicaciones móviles para tener una posición más alta en las tiendas y es descrito frecuentemente como el SEO de las <em>apps.</em> Es el proceso de optimización para lograr una aceleración en la visibilidad de la aplicación e incrementar descargas.',
    },
    {
      termino: '<em>Backup</em>',
      significado:
        'es una copia de seguridad o una copia de respaldo que se realiza sobre los datos originales, con el fin de contar con un elemento que permita la recuperación de los datos, en caso de su pérdida.',
    },
    {
      termino: 'ISO',
      significado:
        'es la Organización Internacional de Normalización, una institución encargada de la creación de estándares internacionales, compuesta por diversas organizaciones nacionales de normalización.',
    },
    {
      termino: 'Soportabilidad',
      significado:
        'también se puede encontrar como "portabilidad" es una de las definiciones utilizadas en programación de alto nivel. Se define como la característica que posee un <em>software</em> para ejecutarse en diferentes plataformas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bolaños, D., Sierra, A., y Alarcón, M. (2008). <em>Pruebas de Software y JUnit</em>. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Correa, M. (2013). <em>Composición del sistema operativo móvil IOS de Apple y el hardware y software que lo utilizan.</em> Universidad Católica de Pereira.',
      link:
        'https://docplayer.es/1521033-Composicion-del-sistema-operativo-movil-ios-de-apple-y-el-hardware-y-software-que-lo-utilizan-melissa-correa-rios.html',
    },
    {
      referencia:
        'Hesham, A. & Shakeel, A. (2018). Overview of Software Testing Standard ISO/IEC/IEEE 29119. International <em>Journal of Computer Science and Network Security</em>, 18(2), p. 112-116.',
      link:
        'https://www.researchgate.net/profile/Shakeel-Ahmed-46/publication/323759544_Overview_of_Software_Testing_Standard_ISOIECIEEE_29119/links/5e5923c84585152ce8f64d83/Overview-of-Software-Testing-Standard-ISO-IEC-IEEE-29119.pdf',
    },
    {
      referencia: 'ISO 25000. (s.f.). <em>ISO/IEC 25040.</em>',
      link: 'https://iso25000.com/index.php/normas-iso-25000/iso-25040?start=3',
    },
    {
      referencia:
        'Minguet, J. y Cueva, J. (2003). <em>La calidad del software y su medida.</em> Editorial Universitaria Ramón Areces.',
      link: '',
    },
    {
      referencia:
        'Noriega, D., Gabino, N. y Hernández, C. (2007). <em>Calidad de Software.</em> Universidad de Matanzas "Camilo Cienfuegos"',
      link:
        'http://www.monografias.com/trabajos59/calidad-software/calidad-software.shtml',
    },
    {
      referencia:
        'Puglla, G. (2017). <em>Marco de trabajo para control de calidad en el desarrollo de aplicaciones móviles bajo metodologías ágiles.</em> Universidad Técnica Particular de Loja.',
      link:
        'https://docplayer.es/91113144-Universidad-tecnica-particular-de-loja-la-universidad-catolica-de-loja-area-tecnica.html',
    },
    {
      referencia:
        'Victoria, I. & Ramírez, F. (2017). <em>Definición de un proceso de pruebas para pequeñas organizaciones que desarrollan aplicaciones para móviles. Universidad del Cauca.</em>',
      link:
        'http://repositorio.unicauca.edu.co:8080/bitstream/handle/123456789/1743/DEFINICI%C3%93N%20DE%20UN%20PROCESO%20DE%20PRUEBAS%20PARA%20PEQUE%C3%91AS%20ORGANIZACIONES%20QUE%20%20DESARROLLAN%20APLICACIONES%20PARA%20M%C3%93VILES.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
