// =============================================
// DATOS EMBEBIDOS (como respaldo)
// =============================================
const localData = {
    sucursales: [
        { id: 1, nombre: "Asunción - Centro", oficiales: ["Juan Pérez", "María González", "Carlos López"] },
        { id: 2, nombre: "Ciudad del Este", oficiales: ["Roberto Martínez", "Ana Rodríguez", "Luis Fernández"] },
        { id: 3, nombre: "San Lorenzo", oficiales: ["Pedro Gómez", "Sofía Díaz", "Miguel Sánchez"] },
        { id: 4, nombre: "Luque", oficiales: ["José Ramírez", "Laura Álvarez", "Andrés Torres"] },
        { id: 5, nombre: "Capiatá", oficiales: ["Daniel Ruiz", "Patricia Herrera", "Fernando Castro"] },
        { id: 6, nombre: "Lambaré", oficiales: ["Ricardo Ortega", "Elena Mendoza", "Jorge Vargas"] },
        { id: 7, nombre: "Fernando de la Mora", oficiales: ["Alberto Medina", "Silvia Romero", "Hugo Guzmán"] },
        { id: 8, nombre: "Encarnación", oficiales: ["Mario Rojas", "Claudia Silva", "Raúl Flores"] },
        { id: 9, nombre: "Concepción", oficiales: ["Eduardo Acosta", "Verónica Vega", "Oscar Méndez"] },
        { id: 10, nombre: "Pedro Juan Caballero", oficiales: ["Santiago Cortés", "Natalia Paredes", "Felipe Ríos"] },
        { id: 11, nombre: "Coronel Oviedo", oficiales: ["Gustavo Núñez", "Carolina Miranda", "Diego Valdez"] },
        { id: 12, nombre: "Villarrica", oficiales: ["Hernán Peña", "Adriana Cordero", "Walter Rivas"] },
        { id: 13, nombre: "Pilar", oficiales: ["Mauricio Aguirre", "Lucía Figueroa", "Esteban Molina"] },
        { id: 14, nombre: "Caaguazú", oficiales: ["Federico Juárez", "Gabriela Espinoza", "Renato Campos"] },
        { id: 15, nombre: "Itauguá", oficiales: ["Armando Salazar", "Daniela Montes", "Rodrigo León"] },
        { id: 16, nombre: "Mariano Roque Alonso", oficiales: ["Arturo Delgado", "Marina Cervantes", "Gerardo Ponce"] },
        { id: 17, nombre: "Presidente Franco", oficiales: ["Víctor Cabrera", "Isabel Valenzuela", "Nicolás Cáceres"] },
        { id: 18, nombre: "Ayolas", oficiales: ["Omar Carrasco", "Rosa Segura", "Héctor Navarro"] },
        { id: 19, nombre: "Santa Rita", oficiales: ["Rubén Mora", "Beatriz Santana", "Emanuel Fuentes"] },
        { id: 20, nombre: "Caacupé", oficiales: ["Fabián Reyes", "Leticia Bustamante", "Sergio Orellana"] },
        { id: 21, nombre: "San Juan Bautista", oficiales: ["Iván Ávila", "Yolanda Méndez", "César Zúñiga"] },
        { id: 22, nombre: "Areguá", oficiales: ["Rolando Tapia", "Nora Salinas", "Marcelo Contreras"] },
        { id: 23, nombre: "Villeta", oficiales: ["Ernesto Moya", "Olga Lara", "Alfonso Osorio"] },
        { id: 24, nombre: "Paraguarí", oficiales: ["Julio Ferreyra", "Eva Roldán", "Tomás Palma"] }
    ],
    kpis: [
        { id: 1, proceso: "Alta de cliente", perspectiva: "Eficiencia", nombre: "Tiempo de Onboarding del Cliente", objetivo: "Medir el tiempo total desde la carga inicial hasta la creación del cliente en el sistema.", unidad: "Horas", formula: "Fecha y Hora Creación - Fecha y Hora Inicio Onboarding", granularidad: "Segmento - Canal - Oficial", tiempo: "Mensual", valorActual: 12.5, valorBudget: 10.0 },
        { id: 2, proceso: "Alta de cliente", perspectiva: "Eficiencia", nombre: "Validaciones Automáticas Exitosas", objetivo: "Medir cuántos clientes pasan exitosamente por controles automáticos (ej. DNI, AFIP, Sancionados).", unidad: "Porcentaje (%)", formula: "Validaciones OK / Total Clientes * 100", granularidad: "Tipo de validación - Canal", tiempo: "Mensual", valorActual: 85, valorBudget: 90 },
        { id: 3, proceso: "Alta de cliente", perspectiva: "Eficiencia", nombre: "Clientes con Riesgo Alto", objetivo: "Detectar qué proporción de clientes reciben categorización de riesgo alto durante el alta.", unidad: "Porcentaje (%)", formula: "Clientes Riesgo Alto / Total Clientes * 100", granularidad: "Segmento - Canal", tiempo: "Mensual", valorActual: 5, valorBudget: 3 },
        { id: 4, proceso: "Alta de cliente", perspectiva: "Eficiencia", nombre: "Regularizaciones Pendientes", objetivo: "Cuantificar cuántos clientes quedan con requerimientos pendientes luego del alta inicial.", unidad: "Cantidad (n)", formula: "Total Clientes Pendientes Regularización", granularidad: "Tipo de requerimiento - Canal", tiempo: "Mensual", valorActual: 8, valorBudget: 5 },
        { id: 5, proceso: "Alta de cuenta", perspectiva: "Eficiencia", nombre: "Tiempo hasta Activación de Cuenta", objetivo: "Medir el tiempo total desde la solicitud hasta la activación efectiva de la cuenta.", unidad: "Horas", formula: "Fecha y Hora Activación - Fecha y Hora Solicitud", granularidad: "Tipo de cuenta - Canal - Sucursal", tiempo: "Mensual", valorActual: 24, valorBudget: 18 },
        { id: 6, proceso: "Alta de cuenta", perspectiva: "Eficiencia", nombre: "Tasa de Cuentas Activadas", objetivo: "Cuantificar el porcentaje de solicitudes de cuentas que se activan exitosamente.", unidad: "Porcentaje (%)", formula: "Cuentas Activadas / Solicitudes Totales * 100", granularidad: "Producto - Canal - Segmento", tiempo: "Mensual", valorActual: 92, valorBudget: 95 },
        { id: 7, proceso: "Alta de cuenta", perspectiva: "Calidad", nombre: "Errores de Carga de Datos", objetivo: "Medir la frecuencia de errores durante la carga manual de datos para la cuenta.", unidad: "Porcentaje (%)", formula: "Errores Detectados / Total Cargas * 100", granularidad: "Campo - Canal - Oficial", tiempo: "Mensual", valorActual: 2.5, valorBudget: 1.5 },
        { id: 8, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Calidad", nombre: "% de formularios completados correctamente al primer intento", objetivo: "Validación de errores evitables en la primera carga", unidad: "Porcentaje (%)", formula: "Cantidad de casos que cumplen la condición / Total de casos * 100", granularidad: "Segmento - Canal - Producto", tiempo: "Mensual", valorActual: 88, valorBudget: 92 },
        { id: 9, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Calidad", nombre: "% de cumplimiento completo del checklist documental sin excepciones", objetivo: "Cumplimiento sin documentos salvados por comentarios", unidad: "Porcentaje (%)", formula: "Cantidad de casos que cumplen la condición / Total de casos * 100", granularidad: "Segmento - Canal - Producto", tiempo: "Mensual", valorActual: 95, valorBudget: 97 },
        { id: 10, proceso: "Alta de cliente", perspectiva: "Satisfacción del Cliente", nombre: "Satisfacción del Onboarding", objetivo: "Medir cómo valoran los clientes el proceso de alta, desde la carga hasta la confirmación.", unidad: "Puntaje promedio (1 a 5)", formula: "Promedio de encuestas post-onboarding", granularidad: "Canal - Segmento - Oficial", tiempo: "Mensual", valorActual: 4.2, valorBudget: 4.5 },
        { id: 11, proceso: "Alta de cliente", perspectiva: "Satisfacción del Cliente", nombre: "Abandono durante el Onboarding", objetivo: "Medir cuántos clientes inician pero no completan el proceso de alta.", unidad: "Porcentaje (%)", formula: "(Clientes que inician y no finalizan) / Total que inician * 100", granularidad: "Etapa abandonada - Canal", tiempo: "Mensual", valorActual: 15, valorBudget: 10 },
        { id: 12, proceso: "Alta de cuenta", perspectiva: "Satisfacción del Cliente", nombre: "Tiempo Percibido de Apertura", objetivo: "Medir cómo percibe el cliente el tiempo que llevó abrir la cuenta.", unidad: "Promedio (minutos percibidos)", formula: "Encuesta post-apertura o tiempo declarado", granularidad: "Canal - Tipo de cuenta", tiempo: "Mensual", valorActual: 45, valorBudget: 30 },
        { id: 13, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Satisfacción del Cliente", nombre: "Tiempo promedio de respuesta desde solicitud hasta contacto del ejecutivo", objetivo: "Desde creación de solicitud hasta primer contacto o acción", unidad: "Minutos", formula: "∑(Fecha y hora del primer contacto del ejecutivo−Fecha y hora de la solicitud) / Cantidad total de solicitudes con contacto registrado", granularidad: "Segmento - Canal - Producto", tiempo: "Mensual", valorActual: 120, valorBudget: 60 },
        { id: 14, proceso: "Alta de cliente", perspectiva: "Eficiencia", nombre: "Rendimiento del Canal Simplificado", unidad: "Porcentaje (%)", valorActual: 65, valorBudget: 70 },
        { id: 15, proceso: "Alta de cuenta", perspectiva: "Eficiencia", nombre: "Reintentos de Activación", unidad: "Promedio (n)", valorActual: 1.2, valorBudget: 0.8 },
        { id: 16, proceso: "Alta de cuenta", perspectiva: "Eficiencia", nombre: "Digitalización Exitosa de Documentación", unidad: "Porcentaje (%)", valorActual: 88, valorBudget: 92 },
        { id: 17, proceso: "Alta de cuenta", perspectiva: "Eficiencia", nombre: "Uso de Canal Automatizado", unidad: "Porcentaje (%)", valorActual: 75, valorBudget: 80 },
        { id: 18, proceso: "Alta de cuenta", perspectiva: "Satisfacción del Cliente", nombre: "Incidencias Post-Apertura", unidad: "Porcentaje (%)", valorActual: 10, valorBudget: 7 },
        { id: 19, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Eficiencia", nombre: "Tiempo promedio desde solicitud hasta desembolso", unidad: "Minutos", valorActual: 180, valorBudget: 120 },
        { id: 20, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Eficiencia", nombre: "Tasa de re-procesos por errores o documentación incompleta", unidad: "Cantidad", valorActual: 5, valorBudget: 3 },
        { id: 21, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Eficiencia", nombre: "% de solicitudes autogestionadas por motor de riesgo (PF)", unidad: "Porcentaje (%)", valorActual: 70, valorBudget: 80 },
        { id: 22, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Eficiencia", nombre: "% de derivaciones innecesarias a Gestión Comercial", unidad: "Porcentaje (%)", valorActual: 15, valorBudget: 10 },
        { id: 23, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Calidad", nombre: "% de procesos cancelados por inconsistencias en datos o falta de consentimiento", unidad: "Porcentaje (%)", valorActual: 8, valorBudget: 5 },
        { id: 24, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Calidad", nombre: "Tasa de errores en validaciones cruzadas entre CORE y CRM", unidad: "Cantidad", valorActual: 3, valorBudget: 2 },
        { id: 25, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Satisfacción del Cliente", nombre: "% de clientes que reciben confirmación automática del consentimiento de datos", unidad: "Porcentaje (%)", valorActual: 85, valorBudget: 90 },
        { id: 26, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Satisfacción del Cliente", nombre: "% de desembolsos realizados en la fecha pactada con el cliente", unidad: "Porcentaje (%)", valorActual: 92, valorBudget: 95 },
        { id: 27, proceso: "Solicitud de préstamos y línea de crédito", perspectiva: "Satisfacción del Cliente", nombre: "% de clientes que completan el proceso sin recontacto posterior", unidad: "Porcentaje (%)", valorActual: 75, valorBudget: 85 },
        { id: 28, proceso: "Actualización de Perfil", perspectiva: "Eficiencia", nombre: "Pulso del Perfil: Tiempo medio de actualización completada", unidad: "Minutos", valorActual: 30, valorBudget: 20 },
        { id: 29, proceso: "Actualización de Perfil", perspectiva: "Eficiencia", nombre: "Velocidad de Sintonía: % de actualizaciones completadas sin reintentos", unidad: "Porcentaje (%)", valorActual: 88, valorBudget: 92 },
        { id: 30, proceso: "Actualización de Perfil", perspectiva: "Eficiencia", nombre: "Agilidad sin Fricción: % de validaciones automáticas exitosas", unidad: "Porcentaje (%)", valorActual: 80, valorBudget: 85 },
        { id: 31, proceso: "Actualización de Perfil", perspectiva: "Eficiencia", nombre: "Tiempo al Consentimiento: promedio hasta obtener aprobación del cliente", unidad: "Minutos", valorActual: 45, valorBudget: 30 },
        { id: 32, proceso: "Actualización de Perfil", perspectiva: "Calidad", nombre: "Perfil en Foco: % de actualizaciones sin errores de carga", unidad: "Porcentaje (%)", valorActual: 90, valorBudget: 95 },
        { id: 33, proceso: "Actualización de Perfil", perspectiva: "Calidad", nombre: "Rastro Digital: % de campos actualizados con trazabilidad completa", unidad: "Porcentaje (%)", valorActual: 85, valorBudget: 90 },
        { id: 34, proceso: "Actualización de Perfil", perspectiva: "Calidad", nombre: "Integridad Consistente: % de coincidencia entre CRM y CORE", unidad: "Porcentaje (%)", valorActual: 92, valorBudget: 95 },
        { id: 35, proceso: "Actualización de Perfil", perspectiva: "Calidad", nombre: "Alertas Evitadas: % de procesos sin incidentes o tickets derivados", unidad: "Porcentaje (%)", valorActual: 88, valorBudget: 92 },
        { id: 36, proceso: "Actualización de Perfil", perspectiva: "Satisfacción del Cliente", nombre: "Trámite Sin Vueltas: % de actualizaciones resueltas en una sola interacción", unidad: "Porcentaje (%)", valorActual: 82, valorBudget: 88 },
        { id: 37, proceso: "Actualización de Perfil", perspectiva: "Satisfacción del Cliente", nombre: "Consentimiento Sin Fricción: % de clientes que aprueban en primer intento", unidad: "Porcentaje (%)", valorActual: 85, valorBudget: 90 },
        { id: 38, proceso: "Actualización de Perfil", perspectiva: "Satisfacción del Cliente", nombre: "Tiempo de Espera Invisible: % de confirmaciones enviadas dentro de las 2hs", unidad: "Minutos", valorActual: 90, valorBudget: 95 },
        { id: 39, proceso: "Actualización de Perfil", perspectiva: "Satisfacción del Cliente", nombre: "Actualización Empática: % de clientes que completan sin asistencia manual", unidad: "Porcentaje (%)", valorActual: 75, valorBudget: 80 },
        { id: 40, proceso: "Modificaciones de datos de Contacto", perspectiva: "Eficiencia", nombre: "Velocidad de Actualización: tiempo medio hasta confirmación del cambio", unidad: "Minutos", valorActual: 25, valorBudget: 20 },
        { id: 41, proceso: "Modificaciones de datos de Contacto", perspectiva: "Eficiencia", nombre: "Modificación Sin Reproceso: % de datos actualizados sin necesidad de corrección", unidad: "Porcentaje (%)", valorActual: 90, valorBudget: 93 },
        { id: 42, proceso: "Modificaciones de datos de Contacto", perspectiva: "Eficiencia", nombre: "Flujo Sin Trazas Rojas: % de flujos sin errores técnicos en servicios", unidad: "Porcentaje (%)", valorActual: 95, valorBudget: 97 },
        { id: 43, proceso: "Modificaciones de datos de Contacto", perspectiva: "Eficiencia", nombre: "Tiempo al Checkpoint: promedio hasta señal de actualización registrada", unidad: "Minutos", valorActual: 15, valorBudget: 10 },
        { id: 44, proceso: "Modificaciones de datos de Contacto", perspectiva: "Calidad", nombre: "Integridad Sincrónica: % de coincidencia post-cambio entre CRM y CORE", unidad: "Porcentaje (%)", valorActual: 93, valorBudget: 96 },
        { id: 45, proceso: "Modificaciones de datos de Contacto", perspectiva: "Calidad", nombre: "Consistencia Consentida: % de cambios acompañados por documentación válida", unidad: "Porcentaje (%)", valorActual: 88, valorBudget: 92 },
        { id: 46, proceso: "Modificaciones de datos de Contacto", perspectiva: "Calidad", nombre: "Sincronía Legal: % de rechazos por inconsistencias en formato de consentimiento", unidad: "Porcentaje (%)", valorActual: 5, valorBudget: 3 },
        { id: 47, proceso: "Modificaciones de datos de Contacto", perspectiva: "Calidad", nombre: "Rastreo Completo: % de cambios trazables por usuario, canal y timestamp", unidad: "Porcentaje (%)", valorActual: 98, valorBudget: 99 },
        { id: 48, proceso: "Modificaciones de datos de Contacto", perspectiva: "Satisfacción del Cliente", nombre: "Cambio Express: % de clientes que confirman el cambio en menos de 2 horas", unidad: "Porcentaje (%)", valorActual: 80, valorBudget: 85 },
        { id: 49, proceso: "Modificaciones de datos de Contacto", perspectiva: "Satisfacción del Cliente", nombre: "Modificación Sin Contacto: % de cambios realizados sin intervención de operador", unidad: "Porcentaje (%)", valorActual: 70, valorBudget: 75 },
        { id: 50, proceso: "Modificaciones de datos de Contacto", perspectiva: "Satisfacción del Cliente", nombre: "Confirmación Transparente: % de clientes que reciben notificación de éxito", unidad: "Porcentaje (%)", valorActual: 90, valorBudget: 95 },
        { id: 51, proceso: "Modificaciones de datos de Contacto", perspectiva: "Satisfacción del Cliente", nombre: "Fricción Cero: % de procesos sin reclamos o solicitudes de ayuda", unidad: "Porcentaje (%)", valorActual: 85, valorBudget: 90 },
        { id: 52, proceso: "Solicitud de Seguros", perspectiva: "Eficiencia", nombre: "Despegue Asegurado: tiempo promedio de carga a emisión", unidad: "Minutos", valorActual: 60, valorBudget: 45 },
        { id: 53, proceso: "Solicitud de Seguros", perspectiva: "Eficiencia", nombre: "Solicitud sin Desvíos: % de procesos sin reintentos ni errores", unidad: "Porcentaje (%)", valorActual: 85, valorBudget: 90 },
        { id: 54, proceso: "Solicitud de Seguros", perspectiva: "Eficiencia", nombre: "Validación en Piloto Automático: % de verificaciones realizadas sin intervención", unidad: "Porcentaje (%)", valorActual: 75, valorBudget: 80 },
        { id: 55, proceso: "Solicitud de Seguros", perspectiva: "Eficiencia", nombre: "Tiempo hasta Vinculación: demora promedio hasta linkeo con producto financiero", unidad: "Minutos", valorActual: 30, valorBudget: 25 },
        { id: 56, proceso: "Solicitud de Seguros", perspectiva: "Calidad", nombre: "Consistencia de Cobertura: % de pólizas con datos coincidentes entre CRM y aseguradora", unidad: "Porcentaje (%)", valorActual: 92, valorBudget: 95 },
        { id: 57, proceso: "Solicitud de Seguros", perspectiva: "Calidad", nombre: "Cierre Sin Bordes: % de procesos que llegan a emisión sin requerir intervención manual", unidad: "Porcentaje (%)", valorActual: 80, valorBudget: 85 },
        { id: 58, proceso: "Solicitud de Seguros", perspectiva: "Calidad", nombre: "Checklist Cumplido: % de solicitudes con documentación completa", unidad: "Porcentaje (%)", valorActual: 88, valorBudget: 92 },
        { id: 59, proceso: "Solicitud de Seguros", perspectiva: "Calidad", nombre: "Desvíos Reportados: % de casos que generan incidente durante la solicitud", unidad: "Porcentaje (%)", valorActual: 10, valorBudget: 7 },
        { id: 60, proceso: "Solicitud de Seguros", perspectiva: "Satisfacción del Cliente", nombre: "Cobertura en un Click: % de solicitudes resueltas sin intervención de un asesor", unidad: "Porcentaje (%)", valorActual: 65, valorBudget: 70 },
        { id: 61, proceso: "Solicitud de Seguros", perspectiva: "Satisfacción del Cliente", nombre: "Notificación Instantánea: % de clientes que reciben confirmación en menos de 15 minutos", unidad: "Porcentaje (%)", valorActual: 75, valorBudget: 80 },
        { id: 62, proceso: "Solicitud de Seguros", perspectiva: "Satisfacción del Cliente", nombre: "Proceso Transparente: % de clientes con visibilidad en tiempo real del estado", unidad: "Minutos", valorActual: 85, valorBudget: 90 },
        { id: 63, proceso: "Solicitud de Seguros", perspectiva: "Satisfacción del Cliente", nombre: "Sin Fricciones: % de casos sin contacto posterior al alta", unidad: "Porcentaje (%)", valorActual: 80, valorBudget: 85 }
    ],
    historical: {
        labels: ["Jun 2024", "Jul 2024", "Ago 2024", "Sep 2024", "Oct 2024", "Nov 2024", "Dic 2024", "Ene 2025", "Feb 2025", "Mar 2025", "Abr 2025", "May 2025", "Jun 2025"],
        eficiencia: [78, 80, 82, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91],
        calidad: [85, 86, 87, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96],
        experiencia: [72, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86]
    }
};

// =============================================
// VARIABLES GLOBALES
// =============================================
let sucursalesParaguay = localData.sucursales;
let kpisData = localData.kpis;
let historicalData = localData.historical;
let currentChart = null;
let isMatrizView = false;
let historicalValues = {};

// Generar datos históricos para todos los KPIs
function generateHistoricalValues() {
    const kpiIds = kpisData.map(kpi => kpi.id);
    const months = historicalData.labels;
    
    kpiIds.forEach(id => {
        historicalValues[id] = {};
        months.forEach((month, index) => {
            // Generar valores aleatorios basados en el valor actual con cierta variación
            const kpi = kpisData.find(k => k.id === id);
            const baseValue = kpi.valorActual;
            const variation = (Math.random() * 0.2 - 0.1) * baseValue; // ±10% de variación
            historicalValues[id][month] = Math.max(0, baseValue + variation);
            
            // Asegurar que los porcentajes no excedan 100%
            if (kpi.unidad.includes("Porcentaje")) {
                historicalValues[id][month] = Math.min(100, historicalValues[id][month]);
            }
        });
    });
}

// =============================================
// FUNCIONES PRINCIPALES
// =============================================

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Intenta cargar datos externos primero
        const [sucursalesResponse, kpisResponse, historicalResponse] = await Promise.all([
            fetchData('./data/sucursales.json'),
            fetchData('./data/kpis.json'),
            fetchData('./data/historical.json')
        ]);

        // Usa datos externos si están disponibles, de lo contrario usa los datos locales
        sucursalesParaguay = sucursalesResponse || localData.sucursales;
        kpisData = kpisResponse || localData.kpis;
        historicalData = historicalResponse || localData.historical;
        
        // Generar datos históricos para todos los KPIs
        generateHistoricalValues();
        
        // Inicializa la aplicación
        loadSucursales();
        setupEventListeners();
        updateDashboard();
        renderHistoricalChart();
        
    } catch (error) {
        console.error('Error al cargar datos:', error);
        // Usa datos locales si hay algún error
        loadDefaultData();
        generateHistoricalValues();
        loadSucursales();
        setupEventListeners();
        updateDashboard();
        renderHistoricalChart();
    }
});

// Función mejorada para cargar datos
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(`No se pudo cargar ${url}, usando datos locales`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.warn(`Error al cargar ${url}:`, error);
        return null;
    }
}

function loadDefaultData() {
    sucursalesParaguay = localData.sucursales;
    kpisData = localData.kpis;
    historicalData = localData.historical;
}

function loadSucursales() {
    const select = document.getElementById('sucursal-select');
    select.innerHTML = '<option value="todas">Todas las sucursales</option>';
    
    sucursalesParaguay.forEach(sucursal => {
        const option = document.createElement('option');
        option.value = sucursal.id;
        option.textContent = sucursal.nombre;
        select.appendChild(option);
    });
    
    // Cargar oficiales para la primera sucursal
    if (sucursalesParaguay.length > 0) {
        updateOficiales(sucursalesParaguay[0].id);
    }
}

function updateOficiales(sucursalId) {
    const select = document.getElementById('oficial-select');
    select.innerHTML = '<option value="todos">Todos los oficiales</option>';
    
    if (sucursalId === 'todas') return;
    
    const sucursal = sucursalesParaguay.find(s => s.id == sucursalId);
    if (sucursal) {
        sucursal.oficiales.forEach(oficial => {
            const option = document.createElement('option');
            option.value = oficial;
            option.textContent = oficial;
            select.appendChild(option);
        });
    }
}

function setupEventListeners() {
    // Filtros
    document.getElementById('sucursal-select').addEventListener('change', function() {
        updateOficiales(this.value);
        updateDashboard();
    });
    
    document.getElementById('oficial-select').addEventListener('change', updateDashboard);
    document.getElementById('perspectiva-select').addEventListener('change', updateDashboard);
    document.getElementById('periodo-select').addEventListener('change', updateDashboard);
    
    // Menú
    document.getElementById('dashboard-link').addEventListener('click', function(e) {
        e.preventDefault();
        switchToDashboard();
    });
    
    document.getElementById('matriz-link').addEventListener('click', function(e) {
        e.preventDefault();
        switchToMatriz();
    });
    
    // Tooltips para los KPIs
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('kpi-name')) {
            showTooltip(e.target);
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('kpi-name')) {
            hideTooltip();
        }
    });
}

function switchToDashboard() {
    isMatrizView = false;
    document.getElementById('dashboard-title').textContent = 'Red de Sucursales - KPIs';
    document.getElementById('filtros-sucursal').style.display = 'block';
    updateDashboard();
}

function switchToMatriz() {
    isMatrizView = true;
    document.getElementById('dashboard-title').textContent = 'Casa Matriz - KPIs Centrales';
    document.getElementById('filtros-sucursal').style.display = 'none';
    updateDashboard();
}

function getHistoricalValue(kpiId, month) {
    return historicalValues[kpiId]?.[month] || 0;
}

function getPreviousMonth(currentMonth) {
    const months = historicalData.labels;
    const currentIndex = months.indexOf(currentMonth);
    return currentIndex > 0 ? months[currentIndex - 1] : null;
}

function getPreviousQuarter(currentMonth) {
    const months = historicalData.labels;
    const currentIndex = months.indexOf(currentMonth);
    return currentIndex >= 3 ? months[currentIndex - 3] : null;
}

function getPreviousYear(currentMonth) {
    const months = historicalData.labels;
    const currentIndex = months.indexOf(currentMonth);
    return currentIndex >= 12 ? months[currentIndex - 12] : null;
}

function formatToTwoDecimals(value) {
    return parseFloat(Math.round(value * 100) / 100).toFixed(2);
}

function updateDashboard() {
    // Obtener filtros actuales
    const sucursalId = document.getElementById('sucursal-select').value;
    const oficial = document.getElementById('oficial-select').value;
    const perspectiva = document.getElementById('perspectiva-select').value;
    const periodo = document.getElementById('periodo-select').value;
    const currentMonth = historicalData.labels.find(label => label === `${periodo.split('-')[1]} ${periodo.split('-')[0]}`) || historicalData.labels[historicalData.labels.length - 1];
    
    // Filtrar KPIs según perspectiva seleccionada
    let filteredKpis = kpisData;
    
    if (perspectiva !== 'todas') {
        filteredKpis = kpisData.filter(kpi => kpi.perspectiva === perspectiva);
    }
    
    // Ajustar valores según sucursal/oficial seleccionado
    if (sucursalId !== 'todas' || oficial !== 'todos') {
        filteredKpis = filteredKpis.map(kpi => {
            // Aplicar variación basada en la selección
            let variation = 1;
            
            if (sucursalId !== 'todas') {
                const sucursal = sucursalesParaguay.find(s => s.id == sucursalId);
                if (sucursal) {
                    // Variación basada en ID de sucursal (ejemplo)
                    variation *= 0.95 + (sucursal.id % 10) * 0.02;
                }
            }
            
            if (oficial !== 'todos') {
                // Variación basada en el oficial (ejemplo)
                variation *= 0.97 + (oficial.length % 10) * 0.006;
            }
            
            // Crear copia del KPI con valores ajustados
            return {
                ...kpi,
                valorActual: kpi.valorActual * variation,
                valorBudget: kpi.valorBudget * (variation > 1 ? variation * 0.98 : variation * 1.02)
            };
        });
    }
    
    // Calcular KPIs consolidados con valores ajustados
    const eficienciaKpis = filteredKpis.filter(kpi => kpi.perspectiva === "Eficiencia");
    const calidadKpis = filteredKpis.filter(kpi => kpi.perspectiva === "Calidad");
    const experienciaKpis = filteredKpis.filter(kpi => kpi.perspectiva === "Satisfacción del Cliente");
    
    const eficienciaValue = calculateConsolidatedKpi(eficienciaKpis);
    const calidadValue = calculateConsolidatedKpi(calidadKpis);
    const experienciaValue = calculateConsolidatedKpi(experienciaKpis);
    
    // Actualizar tarjetas con comparaciones históricas
    updateKpiCard('eficiencia', eficienciaValue, 85, currentMonth);
    updateKpiCard('calidad', calidadValue, 90, currentMonth);
    updateKpiCard('experiencia', experienciaValue, 88, currentMonth);
    
    // Actualizar tabla
    updateKpiTable(filteredKpis, currentMonth);
    
    // Actualizar gráfico histórico
    updateHistoricalChart();
}

function calculateConsolidatedKpi(kpis) {
    if (kpis.length === 0) return 0;
    
    let totalCumplimiento = 0;
    
    kpis.forEach(kpi => {
        // Para métricas donde menor es mejor (como tiempos o errores), invertimos la relación
        if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos") || kpi.nombre.includes("Errores")) {
            totalCumplimiento += (kpi.valorBudget / kpi.valorActual) * 100;
        } else {
            totalCumplimiento += (kpi.valorActual / kpi.valorBudget) * 100;
        }
    });
    
    return totalCumplimiento / kpis.length;
}

function updateKpiCard(kpiType, value, target, currentMonth) {
    const valueElement = document.getElementById(`${kpiType}-value`);
    const indicatorElement = document.getElementById(`${kpiType}-indicator`);
    const progressElement = document.getElementById(`${kpiType}-progress`);
    
    // Redondear a 2 decimales
    const roundedValue = Math.round(value * 100) / 100;
    valueElement.textContent = `${roundedValue}%`;
    
    // Determinar color del semáforo
    let indicator = "🔴"; // Rojo por defecto
    if (value >= 90) {
        indicator = "🟢"; // Verde
        progressElement.classList.remove('bg-warning', 'bg-danger');
        progressElement.classList.add('bg-success');
    } else if (value >= 70) {
        indicator = "🟡"; // Amarillo
        progressElement.classList.remove('bg-success', 'bg-danger');
        progressElement.classList.add('bg-warning');
    } else {
        progressElement.classList.remove('bg-success', 'bg-warning');
        progressElement.classList.add('bg-danger');
    }
    
    indicatorElement.textContent = indicator;
    
    // Actualizar barra de progreso (limitada al 100%)
    const progressWidth = Math.min(value, 100);
    progressElement.style.width = `${progressWidth}%`;
    
    // Actualizar comparaciones históricas
    const previousMonth = getPreviousMonth(currentMonth);
    const previousQuarter = getPreviousQuarter(currentMonth);
    const previousYear = getPreviousYear(currentMonth);
    
    if (previousMonth) {
        const prevValue = historicalData[kpiType][historicalData.labels.indexOf(previousMonth)];
        document.getElementById(`${kpiType}-mes-anterior`).textContent = `${prevValue}%`;
    }
    
    if (previousQuarter) {
        const quarterValue = historicalData[kpiType][historicalData.labels.indexOf(previousQuarter)];
        document.getElementById(`${kpiType}-trimestre-anterior`).textContent = `${quarterValue}%`;
    }
    
    if (previousYear) {
        const yearValue = historicalData[kpiType][historicalData.labels.indexOf(previousYear)];
        document.getElementById(`${kpiType}-ano-anterior`).textContent = `${yearValue}%`;
    }
}

function updateKpiTable(kpis, currentMonth) {
    const tbody = document.querySelector('#kpi-table tbody');
    tbody.innerHTML = '';
    
    kpis.forEach(kpi => {
        const row = document.createElement('tr');
        let cumplimiento = formatToTwoDecimals(
            kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos") || kpi.nombre.includes("Errores")
            ? (kpi.valorBudget / kpi.valorActual) * 100
            : (kpi.valorActual / kpi.valorBudget) * 100
        );

        let estado = cumplimiento >= 90 ? '<span class="badge bg-success">Excelente</span>' 
                  : cumplimiento >= 70 ? '<span class="badge bg-warning">Aceptable</span>' 
                  : '<span class="badge bg-danger">Crítico</span>';

        let valorActualFormatted = kpi.unidad.includes("Porcentaje") 
            ? `${formatToTwoDecimals(kpi.valorActual)}%`
            : kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos")
            ? `${formatToTwoDecimals(kpi.valorActual)} ${kpi.unidad.includes("Horas") ? "h" : "min"}`
            : formatToTwoDecimals(kpi.valorActual);

        let valorBudgetFormatted = kpi.unidad.includes("Porcentaje") 
            ? `${formatToTwoDecimals(kpi.valorBudget)}%`
            : kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos")
            ? `${formatToTwoDecimals(kpi.valorBudget)} ${kpi.unidad.includes("Horas") ? "h" : "min"}`
            : formatToTwoDecimals(kpi.valorBudget);

        row.innerHTML = `
            <td>${kpi.perspectiva}</td>
            <td><span class="kpi-name" data-kpi-id="${kpi.id}">${kpi.nombre}</span></td>
            <td>${valorActualFormatted}</td>
            <td>${valorBudgetFormatted}</td>
            <td>${cumplimiento}%</td>
            <td>${estado}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderHistoricalChart() {
    const ctx = document.getElementById('historicalChart').getContext('2d');
    
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: historicalData.labels,
            datasets: [
                {
                    label: 'Eficiencia',
                    data: historicalData.eficiencia,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Calidad',
                    data: historicalData.calidad,
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Experiencia',
                    data: historicalData.experiencia,
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentaje de Cumplimiento'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

function updateHistoricalChart() {
    if (!currentChart) return;
    
    const periodo = document.getElementById('periodo-select').value;
    const currentMonth = historicalData.labels.find(label => label === `${periodo.split('-')[1]} ${periodo.split('-')[0]}`) || historicalData.labels[historicalData.labels.length - 1];
    const currentIndex = historicalData.labels.indexOf(currentMonth);
    
    // Resaltar el mes actual en el gráfico
    currentChart.data.datasets.forEach(dataset => {
        dataset.pointBackgroundColor = dataset.data.map((_, i) => 
            i === currentIndex ? '#ff0000' : dataset.borderColor
        );
        dataset.pointRadius = dataset.data.map((_, i) => 
            i === currentIndex ? 6 : 3
        );
    });
    
    currentChart.update();
}

function showTooltip(element) {
    const kpiId = parseInt(element.getAttribute('data-kpi-id'));
    const kpi = kpisData.find(k => k.id === kpiId);
    
    if (!kpi) return;
    
    const tooltip = document.getElementById('kpi-tooltip');
    document.getElementById('tooltip-title').textContent = kpi.nombre;
    document.getElementById('tooltip-objective').textContent = kpi.objetivo;
    document.getElementById('tooltip-formula').textContent = kpi.formula;
    document.getElementById('tooltip-unit').textContent = kpi.unidad;
    
    // Posicionar tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
    tooltip.style.display = 'block';
}

function hideTooltip() {
    document.getElementById('kpi-tooltip').style.display = 'none';
}