// =============================================================================
// JPEREZCOACH - BASE DE DATOS MAESTRA DE EJERCICIOS Y VÍDEOS DE TÉCNICA
// Jose Perez Coach · Rutina de 6 Días Rotativos para David Otero
// Compatible con vídeos demostrativos y guías de ejecución verificadas
// =============================================================================

(function(global) {
  'use strict';

  var BASE_DATOS_EJERCICIOS = [
    // --- EJERCICIOS ESPECÍFICOS DE LA RUTINA JPEREZCOACH (35 EJERCICIOS EXACTOS Y VERIFICADOS) ---
    // DÍA 1 PULL
    { id: "dominadas_jalon", nombre: "Dominadas/jalón", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "orXhTMDnQkI", descripcion: "Calienta 2/3 series y después busca series lo más pesadas posible." },
    { id: "remo_t", nombre: "Remo T", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "X2-yKYyjWAY", descripcion: "Excéntrico en 5 segundos. Control estricto del torso." },
    { id: "jalon_maquina", nombre: "Jalón máquina", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "pcodNSB6NXQ", descripcion: "RIR 0 al fallo concéntrico + repeticiones parciales." },
    { id: "remo_unilateral", nombre: "Remo unilateral", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "hOBTkGA4mHE", descripcion: "Excéntrico en 5 segundos con mancuerna. Tirón hacia la cadera." },
    { id: "biceps_martillo_mancuernas", nombre: "Bíceps martillo mancuernas", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "07D2fR_0iro", descripcion: "Rest pause: tras el fallo, descanso de 15 segundos y 2-3 reps extra." },
    { id: "scott_maquina_unilateral", nombre: "Scott máquina unilateral", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "YUhSi_sUGmM", descripcion: "Tempo 1-3-1 (1s subida, 3s bajada, 1s pausa isométrica)." },

    // DÍA 2 PUSH
    { id: "press_inclinado_60", nombre: "Press inclinado 60%", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "DfgI6sGn9iQ", descripcion: "Inclinación a 60% para activar la porción clavicular." },
    { id: "press_plano_maquina", nombre: "Press plano máquina", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "fGpg1zE-Kd0", descripcion: "Serie piramidal (12, 10, 8, 6, 4 reps) subiendo carga progresiva." },
    { id: "apertura_unilateral_desde_abajo", nombre: "Apertura unilateral desde abajo", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "nP9KArjEDeU", descripcion: "Bajadas lentas y controladas en 5 segundos en polea baja." },
    { id: "press_hombro_neutro", nombre: "Press hombro neutro", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "4N8wePRkBmY", descripcion: "Máximo rango de recorrido con mancuernas en agarre neutro." },
    { id: "laterales_maquina_unilateral", nombre: "Laterales máquina unilateral", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "V98wql8IfVA", descripcion: "3 segundos de contracción isométrica arriba." },
    { id: "laterales_maquina", nombre: "Laterales máquina", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "WmdhjLZzEjM", descripcion: "Series pesadas a 6-8 repeticiones en máquina." },

    // DÍA 3 LEG
    { id: "prensa_horizontal_unilateral", nombre: "Prensa horizontal unilateral", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "uTjkm8DXeJY", descripcion: "Máximo recorrido por pierna con apoyo firme." },
    { id: "hack_pisada_neutra", nombre: "Hack pisada neutra", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "8Gk8snrY8u4", descripcion: "Bajadas controladas de 5 segundos con pisada neutra en sentadilla Hack." },
    { id: "zancadas_estaticas_smith", nombre: "Zancadas estáticas Smith", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "yH0FeAwbjbw", descripcion: "RIR 0 al fallo muscular en máquina Smith (multipower)." },
    { id: "belt_squat_cuadriceps", nombre: "Belt squat cuádriceps", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "beP38yZ1N9E", descripcion: "1 rep 1 rebote, 1 rep 2 rebotes... hasta 10 rebotes acumulativos." },
    { id: "hip_thrust_unilateral", nombre: "Hip thrust unilateral", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "RaKaj5gtk1A", descripcion: "Máxima contracción de glúteo en el punto alto a una pierna." },
    { id: "gemelo_de_pie", nombre: "Gemelo de pie", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "iOuAzeiDicY", descripcion: "3 series de 15-20 repeticiones con estiramiento completo de pie en máquina." },

    // DÍA 4 PULL
    { id: "hiperextension_lumbar_con_peso", nombre: "Hiperextensión lumbar con peso", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "5mzen3mhQOE", descripcion: "Movimiento controlado en banco romano con disco." },
    { id: "remo_barra_smith", nombre: "Remo barra Smith", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "lTQJFDyQq0s", descripcion: "Excéntrica en 5 segundos con barra guiada multipower." },
    { id: "jalon_unilateral_polea_alta", nombre: "Jalón unilateral polea alta", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "rudpTb4A0X8", descripcion: "3 segundos de máxima contracción abajo con agarre neutro." },
    { id: "remo_maquina_agarre_supino", nombre: "Remo máquina agarre supino", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "iyOM6y5ADAQ", descripcion: "Serie piramidal (12, 10, 8, 6, 4 reps) con agarre supino." },
    { id: "low_row", nombre: "Low row", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "Zigz-qCgY6U", descripcion: "Contracción de 2 segundos arriba en remo bajo de dorsal." },

    // DÍA 5 ARMS
    { id: "polea_cuerda_baja", nombre: "Polea cuerda baja", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "TCeIYlq00P8", descripcion: "3 segundos de isométrico arriba en contracción con cuerda." },
    { id: "polea_alta_cuerda", nombre: "Polea alta cuerda", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "qdRDkVqVeOY", descripcion: "3 segundos de isométrico abajo abriendo la cuerda de tríceps." },
    { id: "curl_biceps_barra_z", nombre: "Curl bíceps barra Z", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "MtgfQwdgE3k", descripcion: "RIR 0 al límite concéntrico con barra Z de pie." },
    { id: "press_frances_mancuernas", nombre: "Press francés mancuernas", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "jCI6_pObQfo", descripcion: "RIR 0 tumbado con mancuernas y codos estables." },
    { id: "scott_unilateral", nombre: "scott unilateral", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "KvZKqlRFhXc", descripcion: "RIR 0 en banco Scott con mancuerna a una mano." },
    { id: "polea_unilateral_triceps", nombre: "Polea unilateral tríceps", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "visrQO8rhNo", descripcion: "RIR 0 extensión de tríceps en polea a una mano." },

    // DÍA 6 LEG
    { id: "aductor", nombre: "Aductor", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "vlViIgtkvh4", descripcion: "Excéntrico en 5 segundos en máquina de aductores sentada." },
    { id: "peso_muerto_barra", nombre: "Peso muerto barra", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "0XL4cZR2Ink", descripcion: "3 series pesadas de 4-6 reps con técnica convencional limpia." },
    { id: "sentadilla_sumo_en_smith", nombre: "Sentadilla sumo en Smith", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "qL3heyJRJvw", descripcion: "Bajadas controladas en 5 segundos con apertura ancha en Smith." },
    { id: "femoral_tumbado", nombre: "Femoral tumbado", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "nmqG-tIr0hc", descripcion: "Máxima contracción arriba aguantando 1 segundo en máquina tumbado." },
    { id: "femoral_sentado", nombre: "Femoral sentado", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "oOE1vaDX71M", descripcion: "Excéntrica en 5 segundos en curl femoral sentado." },
    { id: "extension_cuadriceps", nombre: "Extensión cuádriceps", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "SguKyjZ6y9Q", descripcion: "RIR 0 al fallo en extensión de cuádriceps en máquina." },

    // --- CATÁLOGO GENERAL Y COMPLEMENTARIO ---
    { id: "crunch_abdominal_declinado", nombre: "Crunch abdominal declinado", grupo: "Abdomen", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "crunch_abdominal_en_banco_plano", nombre: "Crunch abdominal en banco plano", grupo: "Abdomen", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "crunch_abdominal_en_maquina", nombre: "Crunch abdominal en máquina", grupo: "Abdomen", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "fGpg1zE-Kd0" },
    { id: "crunch_abdominal_en_polea", nombre: "Crunch abdominal en polea", grupo: "Abdomen", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "TCeIYlq00P8" },
    { id: "plancha_abdominal", nombre: "Plancha abdominal", grupo: "Abdomen", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "orXhTMDnQkI" },
    { id: "curl_arana", nombre: "curl araña", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "YUhSi_sUGmM" },
    { id: "curl_biceps_alterno", nombre: "curl biceps alterno", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "07D2fR_0iro" },
    { id: "curl_biceps_mancuernas", nombre: "curl biceps mancuernas", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "07D2fR_0iro" },
    { id: "curl_biceps_polea", nombre: "curl biceps polea", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "TCeIYlq00P8" },
    { id: "dominadas", nombre: "dominadas", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "orXhTMDnQkI" },
    { id: "jalon_agarre_abierto", nombre: "jalón agarre abierto", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "pcodNSB6NXQ" },
    { id: "jalon_agarre_cerrado", nombre: "jalón agarre cerrado", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "rudpTb4A0X8" },
    { id: "pullover", nombre: "pullover", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "nP9KArjEDeU" },
    { id: "remo_con_barra", nombre: "remo con barra", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "lTQJFDyQq0s" },
    { id: "remo_con_mancuerna", nombre: "remo con mancuerna", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "hOBTkGA4mHE" },
    { id: "remo_gironda", nombre: "remo gironda", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "iyOM6y5ADAQ" },
    { id: "elevaciones_laterales", nombre: "elevaciones laterales", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "WmdhjLZzEjM" },
    { id: "press_militar_con_mancuerna", nombre: "press militar con mancuerna", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "4N8wePRkBmY" },
    { id: "pajaros_en_maquina", nombre: "pájaros en máquina", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "WmdhjLZzEjM" },
    { id: "press_banca", nombre: "press banca", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "DfgI6sGn9iQ" },
    { id: "press_inclinado_en_maquina", nombre: "press inclinado en máquina", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "fGpg1zE-Kd0" },
    { id: "cruces_en_polea_desde_abajo", nombre: "cruces en polea desde abajo", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "nP9KArjEDeU" },
    { id: "sentadilla_hack", nombre: "sentadilla hack", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "8Gk8snrY8u4" },
    { id: "prensa", nombre: "Prensa", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "uTjkm8DXeJY" },
    { id: "hip_thrust", nombre: "Hip thrust", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "RaKaj5gtk1A" },
    { id: "fondos", nombre: "fondos", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "qdRDkVqVeOY" },
    { id: "press_frances", nombre: "press francés", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "jCI6_pObQfo" },
    { id: "triceps_en_polea_con_cuerda", nombre: "Triceps en polea con cuerda", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "qdRDkVqVeOY" }
  ];

  // Mapa directo de los ejercicios de la rutina oficial hacia la base de datos
  var MAPA_RUTINA_OFICIAL = {
    // DÍA 1 PULL
    'd1_e1': 'dominadas_jalon',
    'd1_e2': 'remo_t',
    'd1_e3': 'jalon_maquina',
    'd1_e4': 'remo_unilateral',
    'd1_e5': 'biceps_martillo_mancuernas',
    'd1_e6': 'scott_maquina_unilateral',

    // DÍA 2 PUSH
    'd2_e1': 'press_inclinado_60',
    'd2_e2': 'press_plano_maquina',
    'd2_e3': 'apertura_unilateral_desde_abajo',
    'd2_e4': 'press_hombro_neutro',
    'd2_e5': 'laterales_maquina_unilateral',
    'd2_e6': 'laterales_maquina',

    // DÍA 3 LEG
    'd3_e1': 'prensa_horizontal_unilateral',
    'd3_e2': 'hack_pisada_neutra',
    'd3_e3': 'zancadas_estaticas_smith',
    'd3_e4': 'belt_squat_cuadriceps',
    'd3_e5': 'hip_thrust_unilateral',
    'd3_e6': 'gemelo_de_pie',

    // DÍA 4 PULL
    'd4_e1': 'hiperextension_lumbar_con_peso',
    'd4_e2': 'remo_barra_smith',
    'd4_e3': 'jalon_unilateral_polea_alta',
    'd4_e4': 'remo_maquina_agarre_supino',
    'd4_e5': 'low_row',

    // DÍA 5 ARMS
    'd5_e1': 'polea_cuerda_baja',
    'd5_e2': 'polea_alta_cuerda',
    'd5_e3': 'curl_biceps_barra_z',
    'd5_e4': 'press_frances_mancuernas',
    'd5_e5': 'scott_unilateral',
    'd5_e6': 'polea_unilateral_triceps',

    // DÍA 6 LEG
    'd6_e1': 'aductor',
    'd6_e2': 'peso_muerto_barra',
    'd6_e3': 'sentadilla_sumo_en_smith',
    'd6_e4': 'femoral_tumbado',
    'd6_e5': 'femoral_sentado',
    'd6_e6': 'extension_cuadriceps'
  };

  function normalizar(texto) {
    if (!texto) return "";
    return texto.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\.mp4/gi, '')
      .replace(/[^a-z0-9]/g, ' ')
      .trim();
  }

  var SINONIMOS = {
    'dominadas jalon': 'dominadas_jalon',
    'remo t': 'remo_t',
    'jalon maquina': 'jalon_maquina',
    'remo unilateral': 'remo_unilateral',
    'biceps martillo mancuernas': 'biceps_martillo_mancuernas',
    'scott maquina unilateral': 'scott_maquina_unilateral',
    'press inclinado 60': 'press_inclinado_60',
    'press plano maquina': 'press_plano_maquina',
    'apertura unilateral desde abajo': 'apertura_unilateral_desde_abajo',
    'press hombro neutro': 'press_hombro_neutro',
    'laterales maquina unilateral': 'laterales_maquina_unilateral',
    'laterales maquina': 'laterales_maquina',
    'prensa horizontal unilateral': 'prensa_horizontal_unilateral',
    'hack pisada neutra': 'hack_pisada_neutra',
    'zancadas estaticas smith': 'zancadas_estaticas_smith',
    'belt squat cuadriceps': 'belt_squat_cuadriceps',
    'hip thrust unilateral': 'hip_thrust_unilateral',
    'gemelo de pie': 'gemelo_de_pie',
    'hiperextension lumbar con peso': 'hiperextension_lumbar_con_peso',
    'remo barra smith': 'remo_barra_smith',
    'jalon unilateral polea alta': 'jalon_unilateral_polea_alta',
    'remo maquina agarre supino': 'remo_maquina_agarre_supino',
    'low row': 'low_row',
    'polea cuerda baja': 'polea_cuerda_baja',
    'polea alta cuerda': 'polea_alta_cuerda',
    'curl biceps barra z': 'curl_biceps_barra_z',
    'press frances mancuernas': 'press_frances_mancuernas',
    'scott unilateral': 'scott_unilateral',
    'polea unilateral triceps': 'polea_unilateral_triceps',
    'aductor': 'aductor',
    'peso muerto barra': 'peso_muerto_barra',
    'sentadilla sumo en smith': 'sentadilla_sumo_en_smith',
    'femoral tumbado': 'femoral_tumbado',
    'femoral sentado': 'femoral_sentado',
    'extension cuadriceps': 'extension_cuadriceps'
  };

  function buscarEjercicioEnBD(nombreOId) {
    if (!nombreOId) return null;
    if (MAPA_RUTINA_OFICIAL[nombreOId]) {
      var targetId = MAPA_RUTINA_OFICIAL[nombreOId];
      for (var k = 0; k < BASE_DATOS_EJERCICIOS.length; k++) {
        if (BASE_DATOS_EJERCICIOS[k].id === targetId) return BASE_DATOS_EJERCICIOS[k];
      }
    }
    for (var i = 0; i < BASE_DATOS_EJERCICIOS.length; i++) {
      if (BASE_DATOS_EJERCICIOS[i].id === nombreOId) return BASE_DATOS_EJERCICIOS[i];
    }
    var norm = normalizar(nombreOId);
    if (SINONIMOS[norm]) {
      var synId = SINONIMOS[norm];
      for (var s = 0; s < BASE_DATOS_EJERCICIOS.length; s++) {
        if (BASE_DATOS_EJERCICIOS[s].id === synId) return BASE_DATOS_EJERCICIOS[s];
      }
    }
    for (var j = 0; j < BASE_DATOS_EJERCICIOS.length; j++) {
      var ex = BASE_DATOS_EJERCICIOS[j];
      if (ex.id === norm || normalizar(ex.nombre) === norm) return ex;
    }
    for (var m = 0; m < BASE_DATOS_EJERCICIOS.length; m++) {
      var cand = BASE_DATOS_EJERCICIOS[m];
      var normCand = normalizar(cand.nombre);
      if (norm.indexOf(normCand) !== -1 || normCand.indexOf(norm) !== -1) return cand;
    }
    return null;
  }

  function obtenerEstadisticas() {
    var total = BASE_DATOS_EJERCICIOS.length;
    var disponibles = 0;
    var rehacer = 0;
    for (var i = 0; i < total; i++) {
      if (BASE_DATOS_EJERCICIOS[i].estado === 'disponible') disponibles++;
      else rehacer++;
    }
    return { total: total, disponibles: disponibles, rehacer: rehacer };
  }

  global.JP_BASE_DATOS_EJERCICIOS = {
    BASE_DATOS_EJERCICIOS: BASE_DATOS_EJERCICIOS,
    lista: BASE_DATOS_EJERCICIOS,
    MAPA_RUTINA_OFICIAL: MAPA_RUTINA_OFICIAL,
    buscarEjercicioEnBD: buscarEjercicioEnBD,
    buscar: buscarEjercicioEnBD,
    obtenerEstadisticas: obtenerEstadisticas,
    estadisticas: obtenerEstadisticas,
    normalizar: normalizar
  };

  // Compatibilidad hacia atrás
  global.JPEREZ_BASE_DATOS_EJERCICIOS = global.JP_BASE_DATOS_EJERCICIOS;

})(window);
