function comenzar() {
  'use-Strict';

  // Objeto principal de la app
  const TEST = {

    TOTAL_PREGUNTAS: 10,

    /** Objeto que contendra todas las preguntas y respuestas del test */
    cuestionario: [

      {
        pregunta: 'pregunta1',
        opciones: {
          a: 'opcionA1',
          b: 'opcionB1',
          c: 'opcionC1',
        },
        correcta: 'a',
      },

      {
        pregunta: 'pregunta2',
        opciones: {
          a: 'opcionA2',
          b: 'opcionB2',
          c: 'opcionC2',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta3',
        opciones: {
          a: 'opcionA3',
          b: 'opcionB3',
          c: 'opcionC3',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta4',
        opciones: {
          a: 'opcionA4',
          b: 'opcionB4',
          c: 'opcionC4',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta5',
        opciones: {
          a: 'opcionA5',
          b: 'opcionB5',
          c: 'opcionC5',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta6',
        opciones: {
          a: 'opcionA6',
          b: 'opcionB6',
          c: 'opcionC6',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta7',
        opciones: {
          a: 'opcionA7',
          b: 'opcionB7',
          c: 'opcionC7',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta8',
        opciones: {
          a: 'opcionA8',
          b: 'opcionB8',
          c: 'opcionC8',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta9',
        opciones: {
          a: 'opcionA9',
          b: 'opcionB9',
          c: 'opcionC9',
        },
        correcta: 'b',
      },

      {
        pregunta: 'pregunta10',
        opciones: {
          a: 'opcionA10',
          b: 'opcionB10',
          c: 'opcionC10',
        },
        correcta: 'b',
      },
    ],

  };


  // Variables de elementos init()
  let btnSiguiente;
  let btnAnterior;
  let tablas; // Coleccion de las tablas para mostrar
  let numeroDeTabla; // Numero de la tabla actual
  let numImages; // Imagenes de los indices de las tablas

  // Variables del cuestionario initCuestionario()
  let opciones;

  function comprobarRespuesta(respuestaPulsada) {
    const opcionCorrecta = TEST.cuestionario[numeroDeTabla].correcta;

    if (respuestaPulsada === TEST.cuestionario[numeroDeTabla]
      .opciones[opcionCorrecta]) {
      // Respuesta  correcta
    } else {
      // Respuesta incorrecta
      /* Crear un elemento con la imagen de pregunta incorrecta y añadirlo
      al contenedor del numero de las imgagenes */

      numImages[numeroDeTabla].setAttribute('src', `Imagenes/${numeroDeTabla + 1}.png`);
    }
  }

  function initCuestionario() {
    // Inicializacion de variables del cuestionario
    const preguntas = document
      .getElementsByClassName('contenedorPregunta');

    opciones = document.querySelectorAll('.respuestaHorizontal');

    // Recorre El array "cuestionario"
    TEST.cuestionario.forEach((element, index) => {
      // Escribe en cada tabla la preguntas/respuestas correspondientes
      preguntas[index].innerHTML = element.pregunta;

      // Añade textos y listeners a cada opcion
      opciones[index * 3].innerHTML = element.opciones.a;
      opciones[index * 3].addEventListener('click', () => {
        comprobarRespuesta(element.opciones.a);
      });

      opciones[(index * 3) + 1].innerHTML = element.opciones.b;
      opciones[(index * 3) + 1].addEventListener('click', () => {
        comprobarRespuesta(element.opciones.b);
      });

      opciones[(index * 3) + 2].innerHTML = element.opciones.c;
      opciones[(index * 3) + 2].addEventListener('click', () => {
        comprobarRespuesta(element.opciones.c);
      });
    });
  }

  function ocultarTablas() {
    // Ocultar todas las tablas
    const total = tablas.length;

    for (let i = 0; i < total; i += 1) {
      tablas[i].style.display = 'none';
    }
  }

  function checkTabNum(numTabla) {
  /* Comprobar si el numero de la tabla es superior al maximo
   de preguntas */
    let num = numTabla;

    if (numTabla === TEST.TOTAL_PREGUNTAS) {
      num -= 1;
    } else if (numTabla < 0) {
      num = 0;
    }
    return num;
  }

  function actualizaIndiceTabla(cambioIndice) {
    numeroDeTabla += cambioIndice;

    numeroDeTabla = checkTabNum(numeroDeTabla);
  }

  function cambiarOpacidadNumTablas() {
    for (let i = 0; i < TEST.TOTAL_PREGUNTAS; i += 1) {
      if (i <= numeroDeTabla) {
        numImages[i].style.opacity = 1;
      } else {
        numImages[i].style.opacity = 0.3;
      }
    }
  }

  function siguienteTabla() {
    ocultarTablas();

    // Actualiza el indice de la tabla
    actualizaIndiceTabla(1);

    // Mostrar tabla
    tablas[numeroDeTabla].style.display = 'block';

    // Actualizar imagenes de los numeros de las tablas
    cambiarOpacidadNumTablas(numeroDeTabla);
  }

  function anteriorTabla() {
    ocultarTablas();

    // Actualiza el indice de la tabla
    actualizaIndiceTabla(-1);

    // Mostrar tabla
    tablas[numeroDeTabla].style.display = 'block';

    // Actualizar imagenes de los numeros de las tablas
    cambiarOpacidadNumTablas(numeroDeTabla);
  }

  function selectTab(tablaSeleccionada) {
    numeroDeTabla = tablaSeleccionada - 1;
    siguienteTabla();
  }


  function init() {
    // Inicializacion de variables
    numImages = document.querySelectorAll('.numImage');
    btnSiguiente = document.getElementById('btn-siguiente');
    btnAnterior = document.getElementById('btn-anterior');
    tablas = document.getElementsByClassName('tabla');
    numeroDeTabla = -1;


    // Inicializacion del cuestionario

    initCuestionario();


    // Mostrar la primera tabla
    siguienteTabla();

    // Añadir evento al pulsar boton de navegacion
    btnSiguiente.onclick = siguienteTabla;
    btnAnterior.onclick = anteriorTabla;

    // Añadir eventos a las imagenes de Indice de tabla
    numImages.forEach((element, index) => {
      element.addEventListener('click', () => {
        selectTab(index);
      });
    });
  }

  init();
}

window.addEventListener('load', comenzar);

