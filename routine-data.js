// =============================================================================
// DATOS DE LA RUTINA OFICIAL · JPEREZCOACH
// Plan de Entrenamiento Personalizado de 6 Días Rotativos · Alta Intensidad e Hipertrofia
// Atleta: David Otero | Entrenador: Jose Perez
// Contacto: jperez@mail.com · +34 658 50 71 36 · jperezcoach.com
// =============================================================================

(function() {
  'use strict';

  var INFORMACION_RUTINA = {
    titulo: "PLAN DE ENTRENO",
    entrenador: "Jose Perez",
    marca: "JPEREZCOACH",
    subtitulo: "Plan personalizado de alta intensidad e hipertrofia",
    cliente: "David otero",
    fecha: "01/12/26",
    peso: "",
    objetivo: "Hipertrofia",
    contacto: {
      email: "jperez@mail.com",
      telefono: "+34 658 50 71 36",
      web: "jperezcoach.com"
    },
    reglas: {
      descripcion: "El plan consta de 6 días de entrenamiento en rotación continua (1 PULL ➔ 2 PUSH ➔ 3 LEG ➔ 4 PULL ➔ 5 ARMS ➔ 6 LEG). Entrenas a tu propio ritmo sin estar atado a días fijos de la semana: cuando termines un día, el siguiente entrenamiento pasas al siguiente en la lista.",
      rir0: "RIR 0 (Repeticiones en Reserva 0): Realizar cada serie buscando la máxima exigencia hasta el fallo técnico real sin guardar ninguna repetición en recámara.",
      excentrico5s: "Excéntrico en 5 seg / Bajadas en 5s: Fase de descenso controlada y estricta en 5 segundos completos para maximizar la tensión mecánica y el estímulo hipertrófico.",
      restPause: "Rest Pause: Al llegar al fallo en el número de repeticiones marcado, descansas 10-15 segundos respirando profundo y vuelves a sacar 2-3 repeticiones extra con la misma carga.",
      tempo131: "Tempo 1-3-1: 1 segundo fase concéntrica (subida explosiva), 3 segundos excéntrica (bajada lenta y controlada), 1 segundo de parada isométrica.",
      seriePiramidal: "Serie piramidal (12, 10, 8, 6, 4): Realizar los tramos aumentando la carga progresivamente y ajustando las repeticiones.",
      rebotesBeltSquat: "1 rep 1 rebote, 1 rep 2 rebotes... así hasta 10 rebotes: En Belt Squat, en la primera repetición haces 1 rebote en la zona profunda, en la segunda 2 rebotes, y así sucesivamente hasta completar 10 rebotes en la última repetición.",
      isometria: "3 seg contracción arriba / 3 seg isométrico abajo: Pausa estática de 3 segundos en el punto de máxima contracción para reclutar el máximo número de fibras musculares."
    }
  };

  // Seis días de entrenamiento del plan de Jose Perez
  var DIAS_ENTRENAMIENTO = {
    D1: {
      id: "D1",
      numero: 1,
      titulo: "1 PULL",
      nombre: "1 PULL · Espalda y Bíceps",
      categoria: "Espalda, Grosor y Bíceps",
      etiqueta: "1 PULL",
      descripcion: "Dominadas pesadas, Remo T con excéntrica 5s, Jalón máquina y Bíceps martillo.",
      ejercicios: [
        {
          id: "d1_e1",
          name: "Dominadas/jalón",
          nombre: "Dominadas/jalón",
          indicaciones: "3 series de 4-6 repeticiones. Calienta 2/3 series y después busca series lo más pesadas posible.",
          observaciones: "Calienta 2/3 series y después busca series lo más pesadas posible",
          series: [
            { tipo: "pesada", etiqueta: "Serie 1 (Pesada)", repeticionesObjetivo: "4-6", insignia: "SERIE PESADA" },
            { tipo: "pesada", etiqueta: "Serie 2 (Pesada)", repeticionesObjetivo: "4-6", insignia: "SERIE PESADA" },
            { tipo: "pesada", etiqueta: "Serie 3 (Pesada)", repeticionesObjetivo: "4-6", insignia: "SERIE PESADA" }
          ]
        },
        {
          id: "d1_e2",
          name: "Remo T",
          nombre: "Remo T",
          indicaciones: "3 series de 4-6 repeticiones. Excéntrico en 5 seg.",
          observaciones: "Excéntrico en 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Excéntrica 5s)", repeticionesObjetivo: "4-6", insignia: "EXCÉNTRICA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Excéntrica 5s)", repeticionesObjetivo: "4-6", insignia: "EXCÉNTRICA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 3 (Excéntrica 5s)", repeticionesObjetivo: "4-6", insignia: "EXCÉNTRICA 5s" }
          ]
        },
        {
          id: "d1_e3",
          name: "Jalón máquina",
          nombre: "Jalón máquina",
          indicaciones: "3 series de 8-10 repeticiones. RIR 0 + parciales.",
          observaciones: "RIR 0 + parciales",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "8-10", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "8-10", insignia: "RIR 0" },
            { tipo: "parciales", etiqueta: "Serie 3 (RIR 0 + Parciales)", repeticionesObjetivo: "8-10", insignia: "RIR 0 + PARCIALES" }
          ]
        },
        {
          id: "d1_e4",
          name: "Remo unilateral",
          nombre: "Remo unilateral",
          indicaciones: "2 series de 10-12 repeticiones. Excéntrico en 5 seg.",
          observaciones: "Excéntrico en 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Excéntrica 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Excéntrica 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICA 5s" }
          ]
        },
        {
          id: "d1_e5",
          name: "Bíceps martillo mancuernas",
          nombre: "Bíceps martillo mancuernas",
          indicaciones: "2 series de 8-10 repeticiones. Rest pause: tras fallar, descansa 15s y saca 2-3 reps extra.",
          observaciones: "Rest pause",
          series: [
            { tipo: "restpause", etiqueta: "Serie 1 (Rest Pause)", repeticionesObjetivo: "8-10", insignia: "REST PAUSE" },
            { tipo: "restpause", etiqueta: "Serie 2 (Rest Pause)", repeticionesObjetivo: "8-10", insignia: "REST PAUSE" }
          ]
        },
        {
          id: "d1_e6",
          name: "Scott máquina unilateral",
          nombre: "Scott máquina unilateral",
          indicaciones: "3 series de 8-10 repeticiones. Tempo 1-3-1 (1s subida, 3s bajada, 1s pausa).",
          observaciones: "1-3-1",
          series: [
            { tipo: "tempo", etiqueta: "Serie 1 (Tempo 1-3-1)", repeticionesObjetivo: "8-10", insignia: "TEMPO 1-3-1" },
            { tipo: "tempo", etiqueta: "Serie 2 (Tempo 1-3-1)", repeticionesObjetivo: "8-10", insignia: "TEMPO 1-3-1" },
            { tipo: "tempo", etiqueta: "Serie 3 (Tempo 1-3-1)", repeticionesObjetivo: "8-10", insignia: "TEMPO 1-3-1" }
          ]
        }
      ]
    },

    D2: {
      id: "D2",
      numero: 2,
      titulo: "2 PUSH",
      nombre: "2 PUSH · Pecho y Hombro",
      categoria: "Pectoral y Deltoides",
      etiqueta: "2 PUSH",
      descripcion: "Press inclinado 60%, Press plano piramidal en máquina, Aperturas lentas y Laterales.",
      ejercicios: [
        {
          id: "d2_e1",
          name: "Press inclinado 60%",
          nombre: "Press inclinado 60%",
          indicaciones: "3 series de 8-10 repeticiones. Banco inclinado a 60% para porción clavicular.",
          observaciones: "",
          series: [
            { tipo: "normal", etiqueta: "Serie 1", repeticionesObjetivo: "8-10" },
            { tipo: "normal", etiqueta: "Serie 2", repeticionesObjetivo: "8-10" },
            { tipo: "normal", etiqueta: "Serie 3", repeticionesObjetivo: "8-10" }
          ]
        },
        {
          id: "d2_e2",
          name: "Press plano máquina",
          nombre: "Press plano máquina",
          indicaciones: "2 series piramidales de 12, 10, 8, 6, 4 repeticiones incrementando peso.",
          observaciones: "Serie piramidal",
          series: [
            { tipo: "piramidal", etiqueta: "Serie 1 (Piramidal 12-10-8-6-4)", repeticionesObjetivo: "12,10,8,6,4", insignia: "PIRAMIDAL" },
            { tipo: "piramidal", etiqueta: "Serie 2 (Piramidal 12-10-8-6-4)", repeticionesObjetivo: "12,10,8,6,4", insignia: "PIRAMIDAL" }
          ]
        },
        {
          id: "d2_e3",
          name: "Apertura unilateral desde abajo",
          nombre: "Apertura unilateral desde abajo",
          indicaciones: "3 series de 15 repeticiones. Bajadas controladas en 5 seg.",
          observaciones: "Bajadas en 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Bajada 5s)", repeticionesObjetivo: "15", insignia: "BAJADA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Bajada 5s)", repeticionesObjetivo: "15", insignia: "BAJADA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 3 (Bajada 5s)", repeticionesObjetivo: "15", insignia: "BAJADA 5s" }
          ]
        },
        {
          id: "d2_e4",
          name: "Press hombro neutro",
          nombre: "Press hombro neutro",
          indicaciones: "3 series de 8-10 repeticiones. Máximo rango de recorrido.",
          observaciones: "Máximo rango recorrido",
          series: [
            { tipo: "normal", etiqueta: "Serie 1 (Rango Máximo)", repeticionesObjetivo: "8-10", insignia: "MÁXIMO RANGO" },
            { tipo: "normal", etiqueta: "Serie 2 (Rango Máximo)", repeticionesObjetivo: "8-10", insignia: "MÁXIMO RANGO" },
            { tipo: "normal", etiqueta: "Serie 3 (Rango Máximo)", repeticionesObjetivo: "8-10", insignia: "MÁXIMO RANGO" }
          ]
        },
        {
          id: "d2_e5",
          name: "Laterales máquina unilateral",
          nombre: "Laterales máquina unilateral",
          indicaciones: "2 series de 10-12 repeticiones. 3 seg de contracción isométrica arriba.",
          observaciones: "3 seg contracción arriba",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (3s arriba)", repeticionesObjetivo: "10-12", insignia: "3s CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 2 (3s arriba)", repeticionesObjetivo: "10-12", insignia: "3s CONTRACCIÓN" }
          ]
        },
        {
          id: "d2_e6",
          name: "Laterales máquina",
          nombre: "Laterales máquina",
          indicaciones: "3 series de 6-8 repeticiones con carga alta.",
          observaciones: "",
          series: [
            { tipo: "pesada", etiqueta: "Serie 1 (Pesada)", repeticionesObjetivo: "6-8", insignia: "SERIE PESADA" },
            { tipo: "pesada", etiqueta: "Serie 2 (Pesada)", repeticionesObjetivo: "6-8", insignia: "SERIE PESADA" },
            { tipo: "pesada", etiqueta: "Serie 3 (Pesada)", repeticionesObjetivo: "6-8", insignia: "SERIE PESADA" }
          ]
        }
      ]
    },

    D3: {
      id: "D3",
      numero: 3,
      titulo: "3 LEG",
      nombre: "3 LEG · Pierna Completa",
      categoria: "Cuádriceps, Glúteo y Gemelo",
      etiqueta: "3 LEG",
      descripcion: "Prensa horizontal unilateral, Hack bajadas 5s, Zancadas Smith y Belt squat con rebotes.",
      ejercicios: [
        {
          id: "d3_e1",
          name: "Prensa horizontal unilateral",
          nombre: "Prensa horizontal unilateral",
          indicaciones: "3 series de 8-10 repeticiones por pierna. Máximo recorrido.",
          observaciones: "Máximo recorrido",
          series: [
            { tipo: "normal", etiqueta: "Serie 1 (Máximo Recorrido)", repeticionesObjetivo: "8-10", insignia: "MÁXIMO RECORRIDO" },
            { tipo: "normal", etiqueta: "Serie 2 (Máximo Recorrido)", repeticionesObjetivo: "8-10", insignia: "MÁXIMO RECORRIDO" },
            { tipo: "normal", etiqueta: "Serie 3 (Máximo Recorrido)", repeticionesObjetivo: "8-10", insignia: "MÁXIMO RECORRIDO" }
          ]
        },
        {
          id: "d3_e2",
          name: "Hack pisada neutra",
          nombre: "Hack pisada neutra",
          indicaciones: "3 series de 4-6 repeticiones. Bajadas controladas en 5 seg.",
          observaciones: "Bajadas en 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Bajada 5s)", repeticionesObjetivo: "4-6", insignia: "BAJADA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Bajada 5s)", repeticionesObjetivo: "4-6", insignia: "BAJADA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 3 (Bajada 5s)", repeticionesObjetivo: "4-6", insignia: "BAJADA 5s" }
          ]
        },
        {
          id: "d3_e3",
          name: "Zancadas estáticas Smith",
          nombre: "Zancadas estáticas Smith",
          indicaciones: "2 series de 10-12 repeticiones. RIR 0 al fallo técnico.",
          observaciones: "RIR 0",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" }
          ]
        },
        {
          id: "d3_e4",
          name: "Belt squat cuádriceps",
          nombre: "Belt squat cuádriceps",
          indicaciones: "2 series de 10 repeticiones. 1 rep 1 rebote, 1 rep 2 rebotes… así hasta 10 rebotes.",
          observaciones: "1 rep 1 rebote, 1 rep 2 rebotes… así hasta 10 rebotes",
          series: [
            { tipo: "rebotes", etiqueta: "Serie 1 (Rebotes 1 a 10)", repeticionesObjetivo: "10 reps con rebotes", insignia: "REBOTES ACUMULATIVOS" },
            { tipo: "rebotes", etiqueta: "Serie 2 (Rebotes 1 a 10)", repeticionesObjetivo: "10 reps con rebotes", insignia: "REBOTES ACUMULATIVOS" }
          ]
        },
        {
          id: "d3_e5",
          name: "Hip thrust unilateral",
          nombre: "Hip thrust unilateral",
          indicaciones: "3 series de 10-12 repeticiones. Máxima contracción arriba.",
          observaciones: "Máxima contracción",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (Máxima Contracción)", repeticionesObjetivo: "10-12", insignia: "MÁXIMA CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 2 (Máxima Contracción)", repeticionesObjetivo: "10-12", insignia: "MÁXIMA CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 3 (Máxima Contracción)", repeticionesObjetivo: "10-12", insignia: "MÁXIMA CONTRACCIÓN" }
          ]
        },
        {
          id: "d3_e6",
          name: "Gemelo de pie",
          nombre: "Gemelo de pie",
          indicaciones: "3 series de 15-20 repeticiones con pausa en estiramiento y arriba.",
          observaciones: "",
          series: [
            { tipo: "normal", etiqueta: "Serie 1", repeticionesObjetivo: "15-20" },
            { tipo: "normal", etiqueta: "Serie 2", repeticionesObjetivo: "15-20" },
            { tipo: "normal", etiqueta: "Serie 3", repeticionesObjetivo: "15-20" }
          ]
        }
      ]
    },

    D4: {
      id: "D4",
      numero: 4,
      titulo: "4 PULL",
      nombre: "4 PULL · Espalda y Cadena Posterior",
      categoria: "Espalda, Grosor y Lumbar",
      etiqueta: "4 PULL",
      descripcion: "Hiperextensión con peso, Remo barra Smith, Jalón unilateral, Remo supino piramidal y Low row.",
      ejercicios: [
        {
          id: "d4_e1",
          name: "Hiperextensión lumbar con peso",
          nombre: "Hiperextensión lumbar con peso",
          indicaciones: "3 series de 10-12 repeticiones. Movimiento controlado con carga añadida.",
          observaciones: "Movimiento controlado",
          series: [
            { tipo: "normal", etiqueta: "Serie 1 (Controlado)", repeticionesObjetivo: "10-12", insignia: "CONTROLADO" },
            { tipo: "normal", etiqueta: "Serie 2 (Controlado)", repeticionesObjetivo: "10-12", insignia: "CONTROLADO" },
            { tipo: "normal", etiqueta: "Serie 3 (Controlado)", repeticionesObjetivo: "10-12", insignia: "CONTROLADO" }
          ]
        },
        {
          id: "d4_e2",
          name: "Remo barra Smith",
          nombre: "Remo barra Smith",
          indicaciones: "2 series de 8-10 repeticiones. Excéntrica en 5 seg.",
          observaciones: "Excéntrica 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Excéntrica 5s)", repeticionesObjetivo: "8-10", insignia: "EXCÉNTRICA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Excéntrica 5s)", repeticionesObjetivo: "8-10", insignia: "EXCÉNTRICA 5s" }
          ]
        },
        {
          id: "d4_e3",
          name: "Jalón unilateral polea alta",
          nombre: "Jalón unilateral polea alta",
          indicaciones: "2 series de 10-12 repeticiones. 3 seg de máxima contracción abajo.",
          observaciones: "3 seg máxima contracción",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (3s Contracción)", repeticionesObjetivo: "10-12", insignia: "3s CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 2 (3s Contracción)", repeticionesObjetivo: "10-12", insignia: "3s CONTRACCIÓN" }
          ]
        },
        {
          id: "d4_e4",
          name: "Remo máquina agarre supino",
          nombre: "Remo máquina agarre supino",
          indicaciones: "2 series piramidales de 12, 10, 8, 6, 4 repeticiones.",
          observaciones: "Serie piramidal",
          series: [
            { tipo: "piramidal", etiqueta: "Serie 1 (Piramidal 12/10/8/6/4)", repeticionesObjetivo: "12,10,8,6,4", insignia: "PIRAMIDAL" },
            { tipo: "piramidal", etiqueta: "Serie 2 (Piramidal 12/10/8/6/4)", repeticionesObjetivo: "12,10,8,6,4", insignia: "PIRAMIDAL" }
          ]
        },
        {
          id: "d4_e5",
          name: "Low row",
          nombre: "Low row",
          indicaciones: "3 series de 10-12 repeticiones. Contracción de 2 seg arriba.",
          observaciones: "Contracción 2 seg arriba",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (2s Arriba)", repeticionesObjetivo: "10-12", insignia: "2s CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 2 (2s Arriba)", repeticionesObjetivo: "10-12", insignia: "2s CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 3 (2s Arriba)", repeticionesObjetivo: "10-12", insignia: "2s CONTRACCIÓN" }
          ]
        }
      ]
    },

    D5: {
      id: "D5",
      numero: 5,
      titulo: "5 ARMS",
      nombre: "5 ARMS · Brazos (Bíceps y Tríceps)",
      categoria: "Brazos Completo",
      etiqueta: "5 ARMS",
      descripcion: "Polea cuerda baja y alta isométricas, Curl barra Z, Press francés y Scott unilateral.",
      ejercicios: [
        {
          id: "d5_e1",
          name: "Polea cuerda baja",
          nombre: "Polea cuerda baja",
          indicaciones: "3 series de 10-12 repeticiones. 3 seg de isométrico arriba en contracción.",
          observaciones: "3 seg isométrico arriba",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (3s Isométrico)", repeticionesObjetivo: "10-12", insignia: "3s ISOMÉTRICO" },
            { tipo: "isometria", etiqueta: "Serie 2 (3s Isométrico)", repeticionesObjetivo: "10-12", insignia: "3s ISOMÉTRICO" },
            { tipo: "isometria", etiqueta: "Serie 3 (3s Isométrico)", repeticionesObjetivo: "10-12", insignia: "3s ISOMÉTRICO" }
          ]
        },
        {
          id: "d5_e2",
          name: "Polea alta cuerda",
          nombre: "Polea alta cuerda",
          indicaciones: "3 series de 10-12 repeticiones. 3 seg isométrico abajo abriendo la cuerda.",
          observaciones: "3 seg isométrico abajo",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (3s Isométrico)", repeticionesObjetivo: "10-12", insignia: "3s ISOMÉTRICO" },
            { tipo: "isometria", etiqueta: "Serie 2 (3s Isométrico)", repeticionesObjetivo: "10-12", insignia: "3s ISOMÉTRICO" },
            { tipo: "isometria", etiqueta: "Serie 3 (3s Isométrico)", repeticionesObjetivo: "10-12", insignia: "3s ISOMÉTRICO" }
          ]
        },
        {
          id: "d5_e3",
          name: "Curl bíceps barra Z",
          nombre: "Curl bíceps barra Z",
          indicaciones: "2 series de 8-10 repeticiones. RIR 0 al fallo muscular.",
          observaciones: "RIR 0",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "8-10", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "8-10", insignia: "RIR 0" }
          ]
        },
        {
          id: "d5_e4",
          name: "Press francés mancuernas",
          nombre: "Press francés mancuernas",
          indicaciones: "2 series de 8-10 repeticiones. RIR 0.",
          observaciones: "RIR 0",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "8-10", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "8-10", insignia: "RIR 0" }
          ]
        },
        {
          id: "d5_e5",
          name: "scott unilateral",
          nombre: "scott unilateral",
          indicaciones: "2 series de 10-12 repeticiones. RIR 0.",
          observaciones: "RIR 0",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" }
          ]
        },
        {
          id: "d5_e6",
          name: "Polea unilateral tríceps",
          nombre: "Polea unilateral tríceps",
          indicaciones: "2 series de 10-12 repeticiones. RIR 0.",
          observaciones: "RIR 0",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" }
          ]
        }
      ]
    },

    D6: {
      id: "D6",
      numero: 6,
      titulo: "6 LEG",
      nombre: "6 LEG · Pierna (Cadena Posterior y Aductor)",
      categoria: "Isquios, Cadena Posterior y Cuádriceps",
      etiqueta: "6 LEG",
      descripcion: "Aductor excéntrico 5s, Peso muerto pesado, Sentadilla sumo Smith, Femorales y Extensión.",
      ejercicios: [
        {
          id: "d6_e1",
          name: "Aductor",
          nombre: "Aductor",
          indicaciones: "3 series de 10-12 repeticiones. Excéntrico en 5 seg.",
          observaciones: "Excéntrico 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Excéntrico 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICO 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Excéntrico 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICO 5s" },
            { tipo: "excentrica", etiqueta: "Serie 3 (Excéntrico 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICO 5s" }
          ]
        },
        {
          id: "d6_e2",
          name: "Peso muerto barra",
          nombre: "Peso muerto barra",
          indicaciones: "3 series de 4-6 repeticiones pesadas.",
          observaciones: "",
          series: [
            { tipo: "pesada", etiqueta: "Serie 1 (Pesada)", repeticionesObjetivo: "4-6", insignia: "SERIE PESADA" },
            { tipo: "pesada", etiqueta: "Serie 2 (Pesada)", repeticionesObjetivo: "4-6", insignia: "SERIE PESADA" },
            { tipo: "pesada", etiqueta: "Serie 3 (Pesada)", repeticionesObjetivo: "4-6", insignia: "SERIE PESADA" }
          ]
        },
        {
          id: "d6_e3",
          name: "Sentadilla sumo en Smith",
          nombre: "Sentadilla sumo en Smith",
          indicaciones: "3 series de 8-10 repeticiones. Bajadas controladas en 5 seg.",
          observaciones: "Bajadas en 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Bajada 5s)", repeticionesObjetivo: "8-10", insignia: "BAJADA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Bajada 5s)", repeticionesObjetivo: "8-10", insignia: "BAJADA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 3 (Bajada 5s)", repeticionesObjetivo: "8-10", insignia: "BAJADA 5s" }
          ]
        },
        {
          id: "d6_e4",
          name: "Femoral tumbado",
          nombre: "Femoral tumbado",
          indicaciones: "3 series de 8-10 repeticiones. Máxima contracción arriba.",
          observaciones: "Máxima contracción",
          series: [
            { tipo: "isometria", etiqueta: "Serie 1 (Máxima Contracción)", repeticionesObjetivo: "8-10", insignia: "MÁXIMA CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 2 (Máxima Contracción)", repeticionesObjetivo: "8-10", insignia: "MÁXIMA CONTRACCIÓN" },
            { tipo: "isometria", etiqueta: "Serie 3 (Máxima Contracción)", repeticionesObjetivo: "8-10", insignia: "MÁXIMA CONTRACCIÓN" }
          ]
        },
        {
          id: "d6_e5",
          name: "Femoral sentado",
          nombre: "Femoral sentado",
          indicaciones: "2 series de 10-12 repeticiones. Excéntrica en 5 seg.",
          observaciones: "Excéntrica 5 seg",
          series: [
            { tipo: "excentrica", etiqueta: "Serie 1 (Excéntrica 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICA 5s" },
            { tipo: "excentrica", etiqueta: "Serie 2 (Excéntrica 5s)", repeticionesObjetivo: "10-12", insignia: "EXCÉNTRICA 5s" }
          ]
        },
        {
          id: "d6_e6",
          name: "Extensión cuádriceps",
          nombre: "Extensión cuádriceps",
          indicaciones: "3 series de 10-12 repeticiones. RIR 0 al fallo.",
          observaciones: "RIR 0",
          series: [
            { tipo: "rir0", etiqueta: "Serie 1 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 2 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" },
            { tipo: "rir0", etiqueta: "Serie 3 (RIR 0)", repeticionesObjetivo: "10-12", insignia: "RIR 0" }
          ]
        }
      ]
    }
  };

  // Secuencia rotativa ordenada de 6 días continua
  var SECUENCIA_CICLO = [
    { sesion: 1, idDia: "D1", nombre: "1 PULL · Espalda y Bíceps", esRepeticion: false },
    { sesion: 2, idDia: "D2", nombre: "2 PUSH · Pecho y Hombro", esRepeticion: false },
    { sesion: 3, idDia: "D3", nombre: "3 LEG · Pierna Completa", esRepeticion: false },
    { sesion: 4, idDia: "D4", nombre: "4 PULL · Espalda y Cadena Posterior", esRepeticion: false },
    { sesion: 5, idDia: "D5", nombre: "5 ARMS · Brazos (Bíceps y Tríceps)", esRepeticion: false },
    { sesion: 6, idDia: "D6", nombre: "6 LEG · Pierna (Cadena Posterior)", esRepeticion: false },
    { sesion: 7, idDia: "D1", nombre: "1 PULL · Nuevo Ciclo (Repetición)", esRepeticion: true }
  ];

  window.JP_DATOS = {
    INFORMACION_RUTINA: INFORMACION_RUTINA,
    DIAS_ENTRENAMIENTO: DIAS_ENTRENAMIENTO,
    SECUENCIA_CICLO: SECUENCIA_CICLO
  };

  // Compatibilidad hacia atrás
  window.CGM_DATOS = window.JP_DATOS;

})();
