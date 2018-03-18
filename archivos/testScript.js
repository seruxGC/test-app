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
        explicacion: '<p>Lo cierto es que <strong>los cerdos</strong> no pueden mirar hacia arriba. La forma de su cuello les impide realizar este movimiento, por lo que para mirar el cielo lo único que podríamos hacer sería... ponerlos boca arriba.</p><p>Ciertamente su morfología les priva de este placer.</p>',
      },

      {
        pregunta: '¿Cuántos dientes posee un tiburón ballena de media?',
        opciones: {
          a: 'Más de 3.500',
          b: 'Más de 4.500',
          c: 'Más de 5.500',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '<p>En el caso del <strong>tiburón ballena (Rhincodon typus)</strong> podemos contar más de 4.500 dientes en su enorme boca; unos dientes implantados directamente en las encías, tremendamente finos y cortantes.</p><p>Es el pez existente más grande del mundo pero, a pesar de su tamaño y su enorme boca, no hay nada que temer pues esta especie se alimenta fundamentalmente de plancton.</p>',
      },

      {
        pregunta: 'Es un poco escatológico pero... ¿qué animales son incapaces de vomitar?',
        opciones: {
          a: 'Las ranas, los caballos y las ratas',
          b: 'Los caballos, los elefantes y los suricatos',
          c: 'Los osos hormigueros, las jirafas y los caballos',
        },
        correcta: 'a',
        respondida: false,
        explicacion: '<p><strong>Las ranas, los caballos y las ratas</strong> son los únicos animales incapaces de vomitar. ¿Por qué? La clave está en el esófago. Este, está rodeado de un músculo tremendamente poderoso justo en la zona que conecta con el estómago, impidiendo así que los alimentos puedan volver al esófago y ser expulsados.</p>',
      },

      {
        pregunta: 'La gestación de este animal dura entre 2 y 4 años. ¿De qué animal hablamos?',
        opciones: {
          a: 'Iguana del Caribe',
          b: 'Camaleón pantera',
          c: 'Salamandra alpina',
        },
        correcta: 'c',
        respondida: false,
        explicacion: '<p><strong>La salamandra negra alpina (Salamandra atra)</strong>, que alcanza los 15 centímetros de longitud y posee un color negro muy característico y puro, tiene un periodo de gestación que puede ir desde los 2 hasta los 4 años.</p><p> Este anfibio, principalmente nocturno, da a luz una o dos crías completamente desarrolladas que miden unos 4 centímetros de largo y son capaces de vivir en tierra firme.</p>',
      },

      {
        pregunta: 'La relación sexual más fugaz del mundo animal (unos 5 segundos) pertenece a...',
        opciones: {
          a: 'Ranas',
          b: 'Ratones',
          c: 'Caracoles',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '<p><strong>Los ratones</strong> pueden consumar su relación sexual en apenas 5 segundos. En contraposición con los caracoles, que pasan más de 6 horas hasta consumar el acto sexual. Durante este tiempo, los caracoles expulsan un moco lleno de calcio que aumenta la cantidad de semen que quedará dentro de la hembra.</p>',
      },

      {
        pregunta: '¿Qué simio se contagia de la risa con una facilidad pasmosa?',
        opciones: {
          a: 'El gorila',
          b: 'El chimpancé',
          c: 'El orangután',
        },
        correcta: 'c',
        respondida: false,
        explicacion: '<p>Un estudio publicado en la revista Biology Letters concluyó que <strong>los orangutanes</strong> también se contagian la risa. Poseen empatía. La velocidad con la que los orangutanes del experimento copiaron las expresiones de carcajadas, sugirió que se trataba de actos involuntarios: esto es, se contagiaban de la risa.</p>',
      },

      {
        pregunta: 'El animal al que nos referimos tiene más de 2.000 músculos. Es...',
        opciones: {
          a: 'La anaconda',
          b: 'La oruga',
          c: 'El caracol',
        },
        correcta: 'b',
        respondida: false,
        explicacion: '<p><strong>Las orugas</strong> tienen entre tres y seis veces más músculos que los seres humanos. Poseen más de 2.000 en comparación con los alrededor de 600 del ser humano, en un cuerpo considerablemente más grande.</p>',
      },

      {
        pregunta: 'Esta especie tiene un sistema de reproducción único. Es el macho el que gesta las crías. ¿A qué animal nos referimos?',
        opciones: {
          a: 'La Rana dorada',
          b: 'El Hipopótamo',
          c: 'El Caballito de Mar',
        },
        correcta: 'c',
        respondida: false,
        explicacion: '<p><strong>Los caballitos de mar</strong> poseen un sistema de reproducción bastante particular. La hembra deposita varios centenares de huevos en el macho y es este el que gesta las crías.</p><p> Tras varias semanas de gestación dentro del abdomen masculino, nacerán, tras unos dos días de parto con contracciones, aproximadamente, unas 1.500 crías.</p>',
      },

      {
        pregunta: '¿Cual animal es mas rápido?',
        opciones: {
          a: 'El guepardo',
          b: 'La gacela',
          c: 'El coyote',
        },
        correcta: 'a',
        respondida: false,
        explicacion: '<p><strong>El coyote</strong> es uno de los mamíferos terrestres más veloces , llega a los 65 Km/h. <strong>La gacela</strong> corre hasta unos 80 km/h. En el Top de la lista de mamíferos veloces está <strong>el guepardo</strong>, con sus 115 km/hora.</p>',
      },

      {
        pregunta: '¿Cómo se llama el escarabajo más grande del mundo?',
        opciones: {
          a: 'Escarabajo Titán',
          b: 'Escarabajo Violín',
          c: 'Escarabajo Ciervo',
        },
        correcta: 'a',
        respondida: false,
        explicacion: '<p><strong>El Escarabajo Titán (Titanus giganteus)</strong> es oriundo de América del Sur (bosques húmedos tropicales) y mide casi 17 centímetros.</p><p> Sus colosales características no acaban ahí pues tiene una mandíbula tan fuerte que puede romper un lápiz de madera en dos o rasgar la piel humana. Cuando llega a su etapa adulta dejan de alimentarse y utilizan sus mandíbulas para defenderse o aparearse.</p>',
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
  let opciones; // NodeList de los contenedores de respuestas

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
   * @param {number} nuevoIndice
   * @param {number} indiceActual
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
   * Determina cuales son los contenedores de las respuesta actual
   * y los colorea en funcion de si son correctas o no
   * @param {number} indicePulsado
   */
  function coloreaRespuestas(indicePulsado) {
    // Hacer solo si la pregunta no ha sido respondida
    let indicePrimerContenedor;
    let indcieTercerContenedor;
    const opcionesPreguntaActual = TEST.cuestionario[numeroDeTabla].opciones;
    const letraRespuestaCorrectaActual = TEST.cuestionario[numeroDeTabla].correcta;

    if (indicePulsado % 3 === 0) {
      // El contenedor pulsado es el primero
      indicePrimerContenedor = indicePulsado;
      indcieTercerContenedor = indicePulsado + 2;
    } else if (indicePulsado % 3 === 1) {
      // El contenedor pulsado es el segundo
      indicePrimerContenedor = indicePulsado - 1;
      indcieTercerContenedor = indicePulsado + 1;
    } else if (indicePulsado % 3 === 2) {
      // El contenedor pulsado es el tercero
      indicePrimerContenedor = indicePulsado - 2;
      indcieTercerContenedor = indicePulsado;
    }

    // Recorrer todos los contenedores de respuestas
    for (let i = indicePrimerContenedor; i <= indcieTercerContenedor; i += 1) {
      /* Si la respuesta es la correcta poner fondo verde
       , si no , rojo */
      if (opciones[i].innerHTML === opcionesPreguntaActual[letraRespuestaCorrectaActual]) {
        // Poner fondo verde
        opciones[i].style.backgroundColor = 'rgb(86, 180, 140)';
      } else {
        // Poner fondo rojo
        opciones[i].style.backgroundColor =
          'rgba(239, 58, 1, 0.72)';
      }
    }
  }


  /**

   * Añade listeners a todos los contenedores de las respuestas
   * @param {NodeList} contenedorRespuestanodeList
   */
  const añadeListenerEnRes =
    function añadeListenersEnContenedorDeRespuesta(contenedorRespuestanodeList) {
      contenedorRespuestanodeList
        .forEach((contenedor, indiceContenedor) => {
          contenedor.addEventListener('click', () => {
            coloreaRespuestas(indiceContenedor);
          }, true);
        });
    };

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
        numImages[numeroDeTabla].setAttribute('src', `./imagenes/${numeroDeTabla + 1}.png`);
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
      }, true);

      opciones[(index * 3) + 1].innerHTML = element.opciones.b;
      opciones[(index * 3) + 1].addEventListener('click', () => {
        comprobarRespuesta(element.opciones.b);
      }, true);

      opciones[(index * 3) + 2].innerHTML = element.opciones.c;
      opciones[(index * 3) + 2].addEventListener('click', () => {
        comprobarRespuesta(element.opciones.c);
      }, true);
    });
    añadeListenerEnRes(opciones);
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

