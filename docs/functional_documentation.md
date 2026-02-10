# Documentación Funcional del Proyecto - PerfPRJ

Este proyecto es una solución integral para el aseguramiento de calidad y rendimiento de **The Simpsons API**. Centraliza pruebas funcionales automatizadas y una suite de performance planificada.

## 1. Misión del Proyecto
Validar la confiabilidad, integridad de datos y escalabilidad de la API, proporcionando visibilidad clara sobre su comportamiento bajo condiciones normales y extremas.

## 2. Estructura del Proyecto
```text
PerfPRJ/
├── docs/               # Documentación y especificaciones Técnicas
│   ├── walkthrough.md  # Guía del proceso de construcción
│   ├── api_spec.md     # Especificación técnica de la API
│   └── perf.md         # Teoría y estrategias de Performance
├── JMeter/             # Planes de prueba (.jmx) y estrategias
│   ├── strategies/     # Detalle de carga y escenarios
│   └── baseline_*.jmx  # Planes específicos para líneas base
├── tests/              # Scripts de pruebas funcionales (Python)
├── results/            # Reportes de ejecución
└── requirements.txt    # Dependencias del proyecto
```

## 3. Arquitectura de Pruebas

### 3.1 Pruebas Funcionales (`/tests`)
Utilizamos **Pytest + Playwright** para interactuar con la API a nivel de protocolos.
- **Fixture Global**: Definida en `conftest.py` para manejar el contexto de la API eficientemente.
- **Enfoque Data-Driven**: Los casos de prueba están parametrizados para cubrir múltiples IDs y páginas con una sola lógica.
- **Validaciones de Esquema**: Se valida no solo el código de respuesta, sino la estructura JSON completa y la consistencia de los datos.

### 3.2 Pruebas de Performance (`/JMeter`)
Basadas en el **PTLC (Performance Test Life Cycle)**.
- **Separación de Responsabilidades**: Cada endpoint tiene su propia estrategia y plan de línea base.
- **Variables Dinámicas**: Uso de variables de usuario para facilitar el cambio de entorno (Base URL).
- **Aserciones de Rendimiento**: No solo medimos si la API responde, sino si lo hace dentro de los tiempos permitidos.

## 4. Tecnologías Core
- **Client**: Playwright API Request Context.
- **Runner**: Pytest.
- **Load Tool**: Apache JMeter.
- **Reporting**: JMeter HTML Dashboard & Pytest logs.

## 5. Instrucciones de Ejecución

### Setup Inicial
```bash
# Crear entorno virtual (Recomendado)
python -m venv venv
.\venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt
playwright install
```

### Ejecutar Pruebas
| Tipo | Comando | Destino |
| :--- | :--- | :--- |
| **Funcional** | `pytest --verbose` | Consola / Logs |
| **Performance (Baseline)** | `jmeter -n -t JMeter/baseline_characters.jmx -l JMeter/results/baseline_characters.jtl` | `JMeter/results/` |
| **Reporte HTML** | `jmeter -g JMeter/results/baseline_characters.jtl -o JMeter/results/baseline_characters_report/` | `JMeter/results/..._report/` |

## 6. Reportes Excluyentes
- **Análisis de Spike Test**: Disponibles en `JMeter/results/spike_test_analysis_report_v2.md`.
- **Dashboards HTML**: Cada ejecución de performance genera un reporte interactivo en su carpeta respectiva dentro de `JMeter/results/`.

## 7. Mantenimiento y Extensibilidad
- **Agregar nuevos endpoints**: 
  1. Definir el esquema en `docs/api_spec.md`.
  2. Crear un nuevo archivo `tests/test_<endpoint>.py`.
  3. Crear el plan de carga correspondiente en la carpeta `JMeter/`.
- **Actualizar Baselines**: Se recomienda re-ejecutar los tests de baseline después de cada cambio significativo en la infraestructura de la API para actualizar los puntos de referencia en `docs/perf.md`.

---
*Para una vista detallada sobre cómo se construyó este proyecto paso a paso, consulte el [Walkthrough](walkthrough.md).*

