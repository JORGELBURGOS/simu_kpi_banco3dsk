// =============================================
// VARIABLES GLOBALES
// =============================================
let sucursalesParaguay = [];
let kpisData = [];
let historicalData = {};
let currentChart = null;
let isMatrizView = false;
let allKpisData = []; // Contendrá los 63 KPIs

// =============================================
// FUNCIONES PRINCIPALES
// =============================================

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Cargar datos desde los archivos JSON
        const [sucursalesResponse, kpisResponse, historicalResponse] = await Promise.all([
            fetch('./data/sucursales.json').then(res => res.json()),
            fetch('./data/kpis.json').then(res => res.json()),
            fetch('./data/historical.json').then(res => res.json())
        ]);

        sucursalesParaguay = sucursalesResponse;
        allKpisData = kpisResponse; // Todos los KPIs
        historicalData = historicalResponse;
        
        // Inicializar con datos filtrados (simulando datos para todos los KPIs)
        kpisData = generateDynamicKpiData(allKpisData);
        
        // Inicializa la aplicación
        loadSucursales();
        setupEventListeners();
        updateDashboard();
        renderHistoricalChart();
        
    } catch (error) {
        console.error('Error cargando datos:', error);
        // Mostrar mensaje de error al usuario
        alert('Error al cargar los datos. Por favor recarga la página.');
    }
});

// Genera datos dinámicos para los KPIs basados en filtros
function generateDynamicKpiData(baseKpis) {
    const periodo = document.getElementById('periodo-select').value;
    const sucursalId = document.getElementById('sucursal-select').value;
    const oficial = document.getElementById('oficial-select').value;
    
    // Simulamos variaciones en los datos según los filtros
    return baseKpis.map(kpi => {
        // Base de variación según filtros
        let variation = 0;
        
        // Variación por período (mes)
        const month = parseInt(periodo.split('-')[1]);
        variation += (month % 3) * 0.5; // Pequeña variación por mes
        
        // Variación por sucursal (ID)
        if (sucursalId && sucursalId !== 'todas') {
            variation += (parseInt(sucursalId) % 5) * 0.3;
        }
        
        // Variación por oficial (longitud del nombre)
        if (oficial && oficial !== 'todos') {
            variation += (oficial.length % 4) * 0.2;
        }
        
        // Aplicar variación al valor actual
        let newValue = kpi.valorActual;
        
        // Para métricas donde menor es mejor (tiempos, errores)
        if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos") || kpi.nombre.includes("Errores")) {
            newValue = kpi.valorActual * (1 + (variation * 0.05));
        } 
        // Para métricas donde mayor es mejor
        else {
            newValue = kpi.valorActual * (1 + (variation * 0.03));
        }
        
        // Redondear según el tipo de métrica
        if (kpi.unidad.includes("Porcentaje")) {
            newValue = Math.round(newValue * 10) / 10;
            if (newValue > 100) newValue = 100;
            if (newValue < 0) newValue = 0;
        } else if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos")) {
            newValue = Math.round(newValue * 10) / 10;
            if (newValue < 0) newValue = 0;
        } else {
            newValue = Math.round(newValue);
        }
        
        return {
            ...kpi,
            valorActual: newValue
        };
    });
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
    document.getElementById('dashboard-title').textContent = 'Dashboard de KPIs';
    document.getElementById('filtros-sucursal').style.display = 'block';
    updateDashboard();
}

function switchToMatriz() {
    isMatrizView = true;
    document.getElementById('dashboard-title').textContent = 'Casa Matriz - KPIs Centrales';
    document.getElementById('filtros-sucursal').style.display = 'none';
    updateDashboard();
}

function updateDashboard() {
    // Generar datos dinámicos basados en los filtros actuales
    kpisData = generateDynamicKpiData(allKpisData);
    
    // Filtrar KPIs según perspectiva seleccionada
    const perspectiva = document.getElementById('perspectiva-select').value;
    let filteredKpis = kpisData;
    
    if (perspectiva !== 'todas') {
        filteredKpis = kpisData.filter(kpi => kpi.perspectiva === perspectiva);
    }
    
    // Calcular KPIs consolidados
    const eficienciaKpis = kpisData.filter(kpi => kpi.perspectiva === "Eficiencia");
    const calidadKpis = kpisData.filter(kpi => kpi.perspectiva === "Calidad");
    const experienciaKpis = kpisData.filter(kpi => kpi.perspectiva === "Satisfacción del Cliente");
    
    const eficienciaValue = calculateConsolidatedKpi(eficienciaKpis);
    const calidadValue = calculateConsolidatedKpi(calidadKpis);
    const experienciaValue = calculateConsolidatedKpi(experienciaKpis);
    
    // Actualizar tarjetas con comparativas
    updateKpiCard('eficiencia', eficienciaValue, 85);
    updateKpiCard('calidad', calidadValue, 90);
    updateKpiCard('experiencia', experienciaValue, 88);
    
    // Actualizar comparativas históricas
    updateHistoricalComparisons();
    
    // Actualizar tabla
    updateKpiTable(filteredKpis);
    
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

function updateHistoricalComparisons() {
    const currentPeriod = document.getElementById('periodo-select').value;
    const currentMonth = parseInt(currentPeriod.split('-')[1]);
    const currentYear = parseInt(currentPeriod.split('-')[0]);
    
    // Obtener índices para comparaciones
    const currentIndex = historicalData.labels.findIndex(label => {
        const [month, year] = label.split(' ');
        return (month === getMonthName(currentMonth) && year === currentYear.toString());
    });
    
    // Actualizar comparativas para cada perspectiva
    updateComparisonValues('eficiencia', currentIndex);
    updateComparisonValues('calidad', currentIndex);
    updateComparisonValues('experiencia', currentIndex);
}

function updateComparisonValues(perspective, currentIndex) {
    if (currentIndex === -1 || !historicalData[perspective]) return;
    
    const currentValue = historicalData[perspective][currentIndex];
    
    // Mes anterior
    const prevMonthValue = currentIndex > 0 ? historicalData[perspective][currentIndex - 1] : 'N/A';
    
    // Trimestre anterior (promedio de últimos 3 meses)
    const prevQuarterValue = currentIndex >= 3 ? 
        (historicalData[perspective][currentIndex - 1] + 
         historicalData[perspective][currentIndex - 2] + 
         historicalData[perspective][currentIndex - 3]) / 3 : 'N/A';
    
    // Año anterior (mismo mes del año pasado)
    const prevYearValue = currentIndex >= 12 ? historicalData[perspective][currentIndex - 12] : 'N/A';
    
    // Actualizar elementos del DOM
    document.getElementById(`${perspective}-mes-anterior`).textContent = 
        prevMonthValue !== 'N/A' ? `${Math.round(prevMonthValue)}%` : 'N/A';
    document.getElementById(`${perspective}-trimestre-anterior`).textContent = 
        prevQuarterValue !== 'N/A' ? `${Math.round(prevQuarterValue)}%` : 'N/A';
    document.getElementById(`${perspective}-ano-anterior`).textContent = 
        prevYearValue !== 'N/A' ? `${Math.round(prevYearValue)}%` : 'N/A';
}

function updateKpiCard(kpiType, value, target) {
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
}

function updateKpiTable(kpis) {
    const tbody = document.querySelector('#kpi-table tbody');
    tbody.innerHTML = '';
    
    kpis.forEach(kpi => {
        const row = document.createElement('tr');
        
        // Calcular cumplimiento
        let cumplimiento;
        let estado;
        
        // Para métricas donde menor es mejor (como tiempos o errores), invertimos la relación
        if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos") || kpi.nombre.includes("Errores")) {
            cumplimiento = (kpi.valorBudget / kpi.valorActual) * 100;
        } else {
            cumplimiento = (kpi.valorActual / kpi.valorBudget) * 100;
        }
        
        cumplimiento = Math.round(cumplimiento * 100) / 100;
        
        // Determinar estado
        if (cumplimiento >= 90) {
            estado = '<span class="badge bg-success">Excelente</span>';
        } else if (cumplimiento >= 70) {
            estado = '<span class="badge bg-warning">Aceptable</span>';
        } else {
            estado = '<span class="badge bg-danger">Crítico</span>';
        }
        
        // Formatear valor actual según unidad
        let valorActualFormatted = kpi.valorActual;
        if (kpi.unidad.includes("Porcentaje")) {
            valorActualFormatted = `${kpi.valorActual}%`;
        } else if (kpi.unidad.includes("Horas") || kpi.unidad.includes("Minutos")) {
            valorActualFormatted = `${kpi.valorActual} ${kpi.unidad.includes("Horas") ? "h" : "min"}`;
        }
        
        row.innerHTML = `
            <td>${kpi.perspectiva}</td>
            <td><span class="kpi-name" data-kpi-id="${kpi.id}">${kpi.nombre}</span></td>
            <td>${valorActualFormatted}</td>
            <td>${kpi.valorBudget} ${kpi.unidad.includes("Porcentaje") ? "%" : kpi.unidad.includes("Horas") ? "h" : kpi.unidad.includes("Minutos") ? "min" : ""}</td>
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
            maintainAspectRatio: false,
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

function getMonthName(monthNumber) {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return months[monthNumber - 1];
}