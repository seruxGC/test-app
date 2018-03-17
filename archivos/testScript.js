function comenzar() {
  'use-Strict';

  // Objeto principal de la app
  const TEST = {

    TOTAL_PREGUNTAS: 10,

    /** Objeto que contendra todas las preguntas y respuestas del test */
    cuestionario: [

      {
        pregunta: 'Nos encanta mirar al cielo pero hay un mamífero al que esta acción le es físicamente imposible. ¿De qué animal se trata?',
        opciones: {
          a: 'De la jirafa',
          b: 'Del cerdo',
          c: 'Del rinoceronte',
        },
        correcta: 'b',
        respondida: false,
        explicacion: 'Lo cierto es que los cerdos no pueden mirar hacia arriba. La forma de su cuello les impide realizar este movimiento, por lo que para mirar el cielo lo único que podríamos hacer sería... ponerlos boca arriba. Ciertamente su morfología les priva de este placer.',
      },

      {
        pregunta: 'pregunta2',
        opciones: {
          a: 'opcionA2',
          b: 'opcionB2',
          c: 'opcionC2',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta3',
        opciones: {
          a: 'opcionA3',
          b: 'opcionB3',
          c: 'opcionC3',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta4',
        opciones: {
          a: 'opcionA4',
          b: 'opcionB4',
          c: 'opcionC4',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta5',
        opciones: {
          a: 'opcionA5',
          b: 'opcionB5',
          c: 'opcionC5',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta6',
        opciones: {
          a: 'opcionA6',
          b: 'opcionB6',
          c: 'opcionC6',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta7',
        opciones: {
          a: 'opcionA7',
          b: 'opcionB7',
          c: 'opcionC7',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta8',
        opciones: {
          a: 'opcionA8',
          b: 'opcionB8',
          c: 'opcionC8',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta9',
        opciones: {
          a: 'opcionA9',
          b: 'opcionB9',
          c: 'opcionC9',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },

      {
        pregunta: 'pregunta10',
        opciones: {
          a: 'opcionA10',
          b: 'opcionB10',
          c: 'opcionC10',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '',
      },
    ],

  };


  // Variables de elementos init()
  const contenedorExplicacion = document.getElementById('explicacion');
  const pocaOpacidad = 0.2;
  let btnSiguiente;
  let btnAnterior;
  let tablas; // Coleccion de las tablas para mostrar
  let numeroDeTabla; // Numero de la tabla actual
  let numImages; // Imagenes de los indices de las tablas

  // Variables del cuestionario initCuestionario()
  let opciones;

  /**
  * Se encarga de la opacidad y el tamaño de las imagenes de las preguntas
  */
  const actOpaNum = function actualizarOpacidadImagenNumeros() {
    for (let i = 0; i < TEST.TOTAL_PREGUNTAS; i += 1) {
      if (i <= numeroDeTabla) {
        numImages[i].style.opacity = 1;
        numImages[i].style.width = '100%';
      } else {
        numImages[i].style.opacity = pocaOpacidad;
      }
    }
  };

  /**
   * Se encarga de la opacidad de los botones de navegacion. Comprueba
   * si la pregunta actual esta respondida y pone su opacidad en funcion
   * de ello.
   */
  function actualizarOpacidadNav() {
    const preguntaActual = TEST.cuestionario[numeroDeTabla];
    if (preguntaActual.respondida) {
      btnSiguiente.style.opacity = 1;
    } else {
      btnSiguiente.style.opacity = pocaOpacidad;
    }
  }

  /**
   * Pone animacion al numero de imagen de la tabla seleccionada actualmente
   */
  const actualizaAnimaNumTab = function actualizaAnimacionNumeroTablaActual() {
    const imagenActual = numImages[numeroDeTabla];

    numImages.forEach((imagen) => {
      // Quita todas las animaciones
      imagen.classList.remove('smallBig');
    });
    // Añade animacion al numero de la imagen de la tabla actual
    imagenActual.classList.add('smallBig');
    // Incrementa un poco su opacidad si la pregunta no ha sido respondida
    if (!TEST.cuestionario[numeroDeTabla].respondida) {
      imagenActual.style.opacity = 0.6;
    }
  };

  function mostrarExplicacion() {
    contenedorExplicacion.innerHTML = TEST.cuestionario[numeroDeTabla].explicacion;
    contenedorExplicacion.style.display = 'block';
  }

  function ocultarExplicacion() {
    contenedorExplicacion.style.display = 'none';
    contenedorExplicacion.removeAttribute('style');
  }

  /**
   * Anima el contenedor de explicacion en funcion de si la actual y la nueva
   * estan respondidas
   * @param {*} indiceActual
   * @param {*} nuevoIndice
   */
  function animaExplicacion(indiceActual, nuevoIndice) {
    if (TEST.cuestionario[indiceActual].respondida &&
      TEST.cuestionario[nuevoIndice].respondida) {
      contenedorExplicacion.style.animation = 'fadeOut 0.7s forwards';
      setTimeout(() => {
        contenedorExplicacion.removeAttribute('style');
        mostrarExplicacion();
      }, 700);
    } else if (TEST.cuestionario[nuevoIndice].respondida) {
      mostrarExplicacion();
      contenedorExplicacion.style.animation = 'fadeIn 1.2s';
    } else {
      ocultarExplicacion();
    }
  }


  /**
   * Comprueba si la respuesta pulsada es la correcta.
   * @param {string} respuestaPulsada
   */
  function comprobarRespuesta(respuestaPulsada) {
    const preguntaActual = TEST.cuestionario[numeroDeTabla];

    if (!preguntaActual.respondida) {
      // Poner opacidad al numero de la pregunta
      actOpaNum();

      // Parar animacion del numero de pregunta
      numImages[numeroDeTabla].classList.remove('smallBig');

      // Marcar la pregunta actual como respondida
      preguntaActual.respondida = true;

      // Poner opacidad al boton de siguiente
      actualizarOpacidadNav();

      // Obtener la respuesta correcta
      const opcionCorrecta = preguntaActual.correcta;

      // Comprobar la respuesta
      if (respuestaPulsada === preguntaActual.opciones[opcionCorrecta]) {
        // Respuesta  correcta
      } else {
        // Respuesta incorrecta
        numImages[numeroDeTabla].setAttribute('src', `Imagenes/${numeroDeTabla + 1}.png`);
      }
    }
    mostrarExplicacion();
  }

  /**
   * Inicializa los componentes referentes al cuestionario
   * (Preguntas y respuestas)
   */
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

  /**
   * Oculta todos los bloques de las tablas. Se usa antes de mostar uno nuevo
   */
  function ocultarTablas() {
    const total = tablas.length;

    for (let i = 0; i < total; i += 1) {
      tablas[i].style.display = 'none';
    }
  }

  /**
   * Comprueba que el numero de tabla no se salga de su valor minimo o maximo
   * @param {number} numTabla
   */
  function checkTabNum(numTabla) {
    let num = numTabla;

    if (numTabla === TEST.TOTAL_PREGUNTAS) {
      num -= 1;
    } else if (numTabla < 0) {
      num = 0;
    }
    return num;
  }

  /**
   * Aumenta o disminuye el numero de tabla en funcion del parametro pasado
   * @param {number} cambioIndice
   */
  function actualizaIndiceTabla(cambioIndice) {
    numeroDeTabla += cambioIndice;

    numeroDeTabla = checkTabNum(numeroDeTabla);
  }

  function mostrarTabla(numero) {
    ocultarTablas();
    actualizarOpacidadNav();
    actualizaAnimaNumTab();
    tablas[numero].style.display = 'block';
  }

  /**
   * Avanza a la siduiente tabla si la actual está respondida
   */
  function siguienteTabla() {
    if (TEST.cuestionario[numeroDeTabla].respondida) {
      actualizaIndiceTabla(1);
      mostrarTabla(numeroDeTabla);
      animaExplicacion((numeroDeTabla - 1), numeroDeTabla);
    }
  }


  function anteriorTabla() {
    actualizaIndiceTabla(-1);
    mostrarTabla(numeroDeTabla);
    animaExplicacion((numeroDeTabla + 1), numeroDeTabla);
  }

  /**
   * Cambia el indice de la tabla segun el numero que
   * se haya pulsado.
   * @param {number} tablaSeleccionada
   */
  function selectTab(tablaSeleccionada) {
    if (TEST.cuestionario[tablaSeleccionada].respondida) {
      animaExplicacion(numeroDeTabla, tablaSeleccionada);
      numeroDeTabla = tablaSeleccionada;
      mostrarTabla(numeroDeTabla);
    }
  }

  /**
   * Funcion principal que inicia el cuestionario
   */
  function init() {
    // Inicializacion de variables
    numImages = document.querySelectorAll('.numImage');
    btnSiguiente = document.getElementById('btn-siguiente');
    btnAnterior = document.getElementById('btn-anterior');
    tablas = document.getElementsByClassName('tabla');
    numeroDeTabla = 0;


    // Inicializacion del cuestionario
    initCuestionario();

    // Mostrar la primera tabla
    actualizaAnimaNumTab();
    tablas[numeroDeTabla].style.display = 'block';


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

