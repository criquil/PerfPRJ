# Project Walkthrough - PerfPRJ

Este documento detalla el proceso seguido para la construcción de la suite de pruebas de **The Simpsons API**, desde la exploración inicial hasta la implementación de pruebas de performance avanzadas.

## 🟢 Fase 1: Descubrimiento de la API
La primera etapa consistió en explorar los endpoints disponibles y entender el modelo de datos.
- **Endpoints identificados**: `/characters`, `/episodes`, `/locations`.
- **Hallazgos clave**:
  - Uso de paginación consistente en todos los listados.
  - Manejo de recursos estáticos a través de un CDN propio (`cdn.thesimpsonsapi.com`).
  - Algunos campos como `age` en `/characters` pueden ser nulos, lo que requiere validaciones flexibles.
- **Resultado**: Creación de `api_spec.md` y `api_findings.md`.

## 🟡 Fase 2: Automatización Funcional
Se implementó una suite de pruebas robusta utilizando **Python + Playwright**.
- **Enfoque**: Pruebas de contrato y validación de esquemas JSON.
- **Características**:
  - Uso de `pytest.mark.parametrize` para pruebas data-driven.
  - Validación de tipos de datos, códigos de estado y contenido de campos.
  - Verificación de la construcción correcta de URLs de imágenes.
- **Resultado**: 100% de éxito en los 20 casos de prueba iniciales. Documentado en `test_documentation.md`.

## 🟠 Fase 3: Planeación de Performance
Antes de ejecutar pruebas de carga, se definieron estrategias claras para cada endpoint.
- **Tipos de prueba**: Baseline, Load, Stress, Spike, Endurance, Scalability.
- **Thresholds**: Se establecieron límites de latencia (<500ms para baseline) y tasas de error (<1%).
- **Resultado**: Creación de documentos de estrategia detallados en `JMeter/strategies/`.

## 🔴 Fase 4: Implementación en JMeter
Se crearon planes de prueba (`.jmx`) que replican la lógica de las pruebas funcionales pero a escala.
- **Modularidad**: Planes separados para Baseline por endpoint y un plan maestro `the_simpsons_api.jmx`.
- **Extensibilidad**: Los planes están configurados para ser ejecutados tanto en GUI como en CLI (CI/CD).
- **Reporteo**: Configuración de generación de Dashboards HTML automáticos.

---

## 🚀 Próximos Pasos
1. **Ejecución Continua**: Integrar las pruebas funcionales en un flujo de GitHub Actions.
2. **Monitoreo de Baselines**: Ejecutar periódicamente los tests de baseline para detectar degradación de rendimiento tras actualizaciones de la API.
3. **Análisis Profundo**: Utilizar los reportes de Stress y Spike para identificar cuellos de botella específicos en la infraestructura de la API.
