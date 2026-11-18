// =============================================================================
// JPEREZCOACH - BASE DE DATOS MAESTRA DE EJERCICIOS Y VÍDEOS DE TÉCNICA
// Jose Perez Coach · Rutina de 6 Días Rotativos para David Otero
// Compatible con vídeos demostrativos y guías de ejecución
// =============================================================================

(function(global) {
  'use strict';

  var BASE_DATOS_EJERCICIOS = [
    // --- EJERCICIOS ESPECÍFICOS DE LA RUTINA JPEREZCOACH (35 EJERCICIOS) ---
    { id: "dominadas_jalon", nombre: "Dominadas/jalón", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g", descripcion: "Busca series pesadas manteniendo rango completo." },
    { id: "remo_t", nombre: "Remo T", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE", descripcion: "Excéntrico en 5 segundos. Control estricto del torso." },
    { id: "jalon_maquina", nombre: "Jalón máquina", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "CAwf7n6Luuc", descripcion: "RIR 0 al fallo concéntrico + repeticiones parciales." },
    { id: "remo_unilateral", nombre: "Remo unilateral", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "qO5UKMQPL1d", descripcion: "Excéntrico en 5 segundos. Tirón hacia la cadera." },
    { id: "biceps_martillo_mancuernas", nombre: "Bíceps martillo mancuernas", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "zC3nLlEvin4", descripcion: "Rest pause: tras el fallo, descanso de 15 segundos y 2-3 reps más." },
    { id: "scott_maquina_unilateral", nombre: "Scott máquina unilateral", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "fIWP-FRFNU0", descripcion: "Tempo 1-3-1 (1s subida, 3s bajada, 1s pausa isométrica)." },

    { id: "press_inclinado_60", nombre: "Press inclinado 60%", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "8iPEnn-ltC8", descripcion: "Inclinación a 60% para activar la porción clavicular." },
    { id: "press_plano_maquina", nombre: "Press plano máquina", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "1aOw8-hVoMUnMAnSYxLdvIaY-DcHwaf3y", descripcion: "Serie piramidal (12, 10, 8, 6, 4 reps) subiendo carga." },
    { id: "apertura_unilateral_desde_abajo", nombre: "Apertura unilateral desde abajo", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "1A3wybVQer98mXdyqyuWcfq2JDZRW9PFg", descripcion: "Bajadas lentas y controladas en 5 segundos." },
    { id: "press_hombro_neutro", nombre: "Press hombro neutro", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2yjwXTZQDDI", descripcion: "Máximo rango de recorrido con agarre neutro." },
    { id: "laterales_maquina_unilateral", nombre: "Laterales máquina unilateral", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "3VcKaXpzqRo", descripcion: "3 segundos de contracción isométrica arriba." },
    { id: "laterales_maquina", nombre: "Laterales máquina", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "3VcKaXpzqRo", descripcion: "Series pesadas a 6-8 repeticiones." },

    { id: "prensa_horizontal_unilateral", nombre: "Prensa horizontal unilateral", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "IZxyjW7MPJQ", descripcion: "Máximo recorrido por pierna con apoyo firme." },
    { id: "hack_pisada_neutra", nombre: "Hack pisada neutra", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "0tn5K9NlCfo", descripcion: "Bajadas controladas de 5 segundos con pisada neutra." },
    { id: "zancadas_estaticas_smith", nombre: "Zancadas estáticas Smith", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "12w8EAR9mWsR33M7OT0Ym9jipqeHH5LTC", descripcion: "RIR 0 al fallo muscular en máquina Smith." },
    { id: "belt_squat_cuadriceps", nombre: "Belt squat cuádriceps", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "0tn5K9NlCfo", descripcion: "1 rep 1 rebote, 1 rep 2 rebotes... hasta 10 rebotes." },
    { id: "hip_thrust_unilateral", nombre: "Hip thrust unilateral", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "13Fkwl6MsUk66qJMxKUYU0pIQ5GmqD8kC", descripcion: "Máxima contracción de glúteo en el punto alto." },
    { id: "gemelo_de_pie", nombre: "Gemelo de pie", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "IZxyjW7MPJQ", descripcion: "3 series de 15-20 repeticiones con estiramiento completo." },

    { id: "hiperextension_lumbar_con_peso", nombre: "Hiperextensión lumbar con peso", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE", descripcion: "Movimiento controlado sin arquear excesivamente." },
    { id: "remo_barra_smith", nombre: "Remo barra Smith", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE", descripcion: "Excéntrica en 5 segundos con barra guiada." },
    { id: "jalon_unilateral_polea_alta", nombre: "Jalón unilateral polea alta", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "CAwf7n6Luuc", descripcion: "3 segundos de máxima contracción abajo." },
    { id: "remo_maquina_agarre_supino", nombre: "Remo máquina agarre supino", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE", descripcion: "Serie piramidal (12, 10, 8, 6, 4 reps)." },
    { id: "low_row", nombre: "Low row", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "CAwf7n6Luuc", descripcion: "Contracción de 2 segundos arriba/atrás." },

    { id: "polea_cuerda_baja", nombre: "Polea cuerda baja", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ykJmrZ5v0Oo", descripcion: "3 segundos de isométrico arriba." },
    { id: "polea_alta_cuerda", nombre: "Polea alta cuerda", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2-LAMcpzODU", descripcion: "3 segundos de isométrico abajo abriendo la cuerda." },
    { id: "curl_biceps_barra_z", nombre: "Curl bíceps barra Z", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ykJmrZ5v0Oo", descripcion: "RIR 0 al límite concéntrico." },
    { id: "press_frances_mancuernas", nombre: "Press francés mancuernas", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2-LAMcpzODU", descripcion: "RIR 0 con codos estables." },
    { id: "scott_unilateral", nombre: "scott unilateral", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "fIWP-FRFNU0", descripcion: "RIR 0 en banco Scott con mancuerna." },
    { id: "polea_unilateral_triceps", nombre: "Polea unilateral tríceps", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2-LAMcpzODU", descripcion: "RIR 0 extensión de tríceps a una mano." },

    { id: "aductor", nombre: "Aductor", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ELOCsoDSmrg", descripcion: "Excéntrico en 5 segundos en máquina de aductores." },
    { id: "peso_muerto_barra", nombre: "Peso muerto barra", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE", descripcion: "3 series pesadas de 4-6 reps con técnica limpia." },
    { id: "sentadilla_sumo_en_smith", nombre: "Sentadilla sumo en Smith", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "0tn5K9NlCfo", descripcion: "Bajadas controladas en 5 segundos con apertura ancha." },
    { id: "femoral_tumbado", nombre: "Femoral tumbado", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "1Tq3QdYUuHs", descripcion: "Máxima contracción arriba aguantando 1 segundo." },
    { id: "femoral_sentado", nombre: "Femoral sentado", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ELOCsoDSmrg", descripcion: "Excéntrica en 5 segundos." },
    { id: "extension_cuadriceps", nombre: "Extensión cuádriceps", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "YyvSfVjQeL0", descripcion: "RIR 0 al fallo en extensión de cuádriceps." },

    // --- CATÁLOGO GENERAL ---
    { id: "crunch_abdominal_declinado", nombre: "Crunch abdominal declinado", grupo: "Abdomen", estado: "rehacer", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "crunch_abdominal_en_banco_plano", nombre: "Crunch abdominal en banco plano", grupo: "Abdomen", estado: "rehacer", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "crunch_abdominal_en_maquina", nombre: "Crunch abdominal en máquina", grupo: "Abdomen", estado: "rehacer", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "crunch_abdominal_en_polea", nombre: "Crunch abdominal en polea", grupo: "Abdomen", estado: "rehacer", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "plancha_abdominal", nombre: "Plancha abdominal", grupo: "Abdomen", estado: "rehacer", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "curl_arana", nombre: "curl araña", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "fIWP-FRFNU0" },
    { id: "curl_biceps_alterno", nombre: "curl biceps alterno", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ykJmrZ5v0Oo" },
    { id: "curl_biceps_mancuernas", nombre: "curl biceps mancuernas", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ykJmrZ5v0Oo" },
    { id: "curl_biceps_polea", nombre: "curl biceps polea", grupo: "Bíceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "ykJmrZ5v0Oo" },
    { id: "dominadas", nombre: "dominadas", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "eGo4IYlbE5g" },
    { id: "jalon_agarre_abierto", nombre: "jalón agarre abierto", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "CAwf7n6Luuc" },
    { id: "jalon_agarre_cerrado", nombre: "jalón agarre cerrado", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "CAwf7n6Luuc" },
    { id: "pullover", nombre: "pullover", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "Jb_T2B5zQ5c" },
    { id: "remo_con_barra", nombre: "remo con barra", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE" },
    { id: "remo_con_mancuerna", nombre: "remo con mancuerna", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "G8l_8chR5BE" },
    { id: "remo_gironda", nombre: "remo gironda", grupo: "Espalda", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "CAwf7n6Luuc" },
    { id: "elevaciones_laterales", nombre: "elevaciones laterales", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "3VcKaXpzqRo" },
    { id: "press_militar_con_mancuerna", nombre: "press militar con mancuerna", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2yjwXTZQDDI" },
    { id: "pajaros_en_maquina", nombre: "pájaros en máquina", grupo: "Hombro", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "rep-qVOkqgk" },
    { id: "press_banca", nombre: "press banca", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "8iPEnn-ltC8" },
    { id: "press_inclinado_en_maquina", nombre: "press inclinado en máquina", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "8iPEnn-ltC8" },
    { id: "cruces_en_polea_desde_abajo", nombre: "cruces en polea desde abajo", grupo: "Pecho", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "eozdVDA78K0" },
    { id: "sentadilla_hack", nombre: "sentadilla hack", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "0tn5K9NlCfo" },
    { id: "prensa", nombre: "Prensa", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "IZxyjW7MPJQ" },
    { id: "hip_thrust", nombre: "Hip thrust", grupo: "Pierna", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "0tn5K9NlCfo" },
    { id: "fondos", nombre: "fondos", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2z8JmcrW-As" },
    { id: "press_frances", nombre: "press francés", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2-LAMcpzODU" },
    { id: "triceps_en_polea_con_cuerda", nombre: "Triceps en polea con cuerda", grupo: "Tríceps", estado: "disponible", archivo: "", driveId: "", driveUrl: "", youtubeId: "2-LAMcpzODU" }
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
  global.CGM_BASE_DATOS_EJERCICIOS = global.JP_BASE_DATOS_EJERCICIOS;

})(window);