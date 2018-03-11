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
        correcto: 'a',
      },

      {
        pregunta: 'pregunta2',
        opciones: {
          a: 'opcionA2',
          b: 'opcionB2',
          c: 'opcionC2',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta3',
        opciones: {
          a: 'opcionA3',
          b: 'opcionB3',
          c: 'opcionC3',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta4',
        opciones: {
          a: 'opcionA4',
          b: 'opcionB4',
          c: 'opcionC4',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta5',
        opciones: {
          a: 'opcionA5',
          b: 'opcionB5',
          c: 'opcionC5',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta6',
        opciones: {
          a: 'opcionA6',
          b: 'opcionB6',
          c: 'opcionC6',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta7',
        opciones: {
          a: 'opcionA7',
          b: 'opcionB7',
          c: 'opcionC7',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta8',
        opciones: {
          a: 'opcionA8',
          b: 'opcionB8',
          c: 'opcionC8',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta9',
        opciones: {
          a: 'opcionA9',
          b: 'opcionB9',
          c: 'opcionC9',
        },
        correcto: 'b',
      },

      {
        pregunta: 'pregunta10',
        opciones: {
          a: 'opcionA10',
          b: 'opcionB10',
          c: 'opcionC10',
        },
        correcto: 'b',
      },

    ],

  };


  // Variables de elementos
  let btnSiguiente;
  let btnAnterior;
  let tablas; // Coleccion de las tablas para mostrar
  let numeroDeTabla; // Numero actual de pagina
  let numImages; // Coleccion de las imagenes de los indices de las tablas

  function initCuestionario() {
    // Cargar las preguntas en cada tabla
    const preguntas = document
      .getElementsByClassName('contenedorPregunta');

    const opciones = document
      .getElementsByClassName('respuestaHorizontal');

    TEST.cuestionario.forEach((element, index) => {
      // Escribe en cada tabla la preguntas/respuestas correspondientes
      preguntas[index].innerHTML = element.pregunta;

      opciones[index * 3].innerHTML = element.opciones.a;
      opciones[(index * 3) + 1].innerHTML = element.opciones.b;
      opciones[(index * 3) + 2].innerHTML = element.opciones.c;
    });
  }

  function ocultarTablas() {
    // Ocultar todas las tablas
    const total = tablas.length;

    for (let i = 0; i < total; i += 1) {
      tablas[i].style.display = 'none';
    }
  }

  /**
  * Muestra un mensaje de texto
  * @param {String} metodo nombre del metodo
  * @param {String} mensaje mensaje a mostrar
  * @returns {integer} el codigo de retorno 0
  */
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


  function init() {
    // Inicializacion de variables
    numImages = document.getElementsByClassName('numImage');
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
  }

  init();
}

window.addEventListener('load', comenzar);
