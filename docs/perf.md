# Documentación: Web API Performance Testing dentro del PTLC (Performance Test Life Cycle)

---

## 1. ¿Qué es un Web API Performance Test?
Es un conjunto de pruebas que evalúan cómo responde una API bajo diferentes condiciones de uso: carga normal, picos de tráfico, estrés prolongado, etc.  
Se centra en métricas como latencia, throughput, error rate y consumo de recursos, asegurando que la API cumpla con los SLA definidos.  

- **Unidad inicial de las pruebas**: las pruebas de API son la base.  
- **Estrategias de performance**: no son más que formas de probar APIs de manera masiva o con diferentes cargas.  
- **Clasificación**: se consideran **NFT (Non Functional Tests)**. El propósito no es validar la funcionalidad de una web, sino **evaluar sus componentes internos** (endpoints, infraestructura, capacidad de respuesta).  

---

## 2. ¿Para qué sirve?
- Validar **estabilidad y escalabilidad** de la API.  
- Detectar **cuellos de botella** antes de producción.  
- Definir **thresholds aceptables** para cada tipo de prueba.  
- Comparar contra **benchmarks de mercado** y asegurar competitividad.  
- Monitorear **regresiones** en cada release dentro de CI/CD.  

---

## 3. Estrategias de Performance Testing

| Estrategia | Definición | Por qué | Para qué sirve | Cuándo aplicarla | Cómo ejecutarla | Ejemplo |
|------------|------------|---------|----------------|------------------|-----------------|---------|
| **Baseline Test** | Medición inicial en condiciones normales. | Establece referencia. | Comparar futuras pruebas y detectar regresiones. | Inicio de proyecto, cambios menores. | Carga moderada (30–50 usuarios), 5–10 min. | Latencia <500 ms, error rate <1%. |
| **Load Test** | Validar comportamiento bajo carga sostenida. | Asegura capacidad esperada. | Confirmar estabilidad. | Antes de producción. | Simular cientos de usuarios concurrentes. | 500 usuarios por 30 min. |
| **Stress Test** | Empujar la API más allá de su capacidad. | Revela punto de quiebre. | Identificar límites y recuperación. | En entornos críticos. | Incrementar usuarios hasta fallo. | Error rate >5%. |
| **Spike Test** | Evaluar respuesta ante incrementos súbitos. | Simula picos inesperados. | Validar resiliencia. | APIs expuestas a eventos masivos. | Subir usuarios de 100 a 1000 en segundos. | Disponibilidad tras pico abrupto. |
| **Endurance Test** | Validar estabilidad prolongada. | Detecta degradación en el tiempo. | Identificar memory leaks. | Servicios 24/7. | Carga constante por horas. | 12h de ejecución estable. |
| **Scalability Test** | Medir respuesta al aumentar recursos. | Asegura escalado correcto. | Validar autoescalado. | Entornos cloud. | Probar con distintos niveles de CPU/RAM. | Throughput proporcional al escalado. |

---

## 4. Baseline Test (detalle)
- **Definición**: primera medición de rendimiento en condiciones normales.  
- **Recomendación**: nunca tomar como baseline la corrida previa, ya que el threshold permitido puede ir “comiendo” milisegundos en cada ejecución.  
- **Iteración**: debe repetirse en múltiples ocasiones y circunstancias (distintos horarios, tras deploys, con caché limpio) para mayor exactitud.  
- **Thresholds aceptados**:  
  - Latencia promedio < 500 ms  
  - Percentil 95 (p95) < 800 ms  
  - Error rate < 1%  
  - Throughput estable  

---

## 5. Thresholds por estrategia

| Métrica | Baseline | Load Test | Stress Test | Spike Test | Endurance Test |
|---------|----------|-----------|-------------|------------|----------------|
| Tiempo de respuesta promedio | < 500 ms | < 2 s | Puede superar 2 s | < 2 s tras pico | < 2–3 s sostenido |
| Percentil 95 (p95) | < 800 ms | < 3 s | Puede superar 3 s | < 3 s tras estabilización | < 3 s sostenido |
| Error rate | < 1% | < 2% | >5% aceptado para quiebre | < 2% | < 2% |
| Throughput | Constante | Constante bajo carga | Disminuye al límite | Recupera tras pico | Constante en horas |
| Consumo de CPU/memoria | Bajo | Moderado | Elevado, medir recuperación | Elevado en pico, luego estable | Sin leaks ni acumulación |

---

## 6. Benchmarks de mercado
- **REST APIs**: latencia < 1 s en operaciones simples, < 2 s en complejas.  
- **GraphQL**: < 500 ms en queries simples, < 1.5 s en queries con joins múltiples.  
- **gRPC**: < 200 ms en llamadas internas, < 500 ms en externas.  
- **Event-driven APIs (Kafka, RabbitMQ)**: throughput estable, latencias < 100 ms en mensajes críticos.  

---

## 7. Herramienta recomendada: JMeter
- **Por qué JMeter**:  
  - Es una herramienta robusta y ampliamente utilizada para **Non Functional Tests**.  
  - Permite simular múltiples usuarios concurrentes y diferentes patrones de carga sobre APIs.  
  - Ofrece integración con CI/CD y generación de reportes detallados.  

- **Por qué no se recomienda para pruebas funcionales**:  
  - JMeter está diseñado para medir rendimiento, no para validar lógica de negocio o flujos funcionales.  
  - Carece de capacidades avanzadas de verificación funcional (ej. validaciones complejas de UI o reglas de negocio).  

- **Limitaciones de JMeter**:  
  - Alto consumo de recursos en pruebas muy grandes (se recomienda distribuir con JMeter en modo cluster).  
  - Curva de aprendizaje inicial para configurar escenarios complejos.  
  - Interfaz menos amigable comparada con herramientas modernas como k6.  
  - No es ideal para pruebas funcionales de front-end o validaciones visuales.  

---

## 8. Encaje en el PTLC (Performance Test Life Cycle)

1. **Identificación de requerimientos**: definir métricas y thresholds.  
2. **Planificación y diseño**: seleccionar estrategias y escenarios.  
3. **Configuración del entorno**: preparar infraestructura y herramientas (ej. JMeter).  
4. **Ejecución de pruebas**: baseline iterado, carga, estrés, spike, endurance.  
5. **Análisis de resultados**: comparar contra thresholds y benchmarks.  
6. **Optimización y reejecución**: ajustar y validar mejoras.  
7. **Monitoreo continuo**: integrar en CI/CD y usar baseline como referencia histórica.  

---

## 9. Conclusiones
- La **unidad inicial** son las pruebas de API.  
- Las diferentes pruebas de performance son **estrategias de probar APIs de manera masiva** o con diferentes cargas.  
- Se clasifican como **NFT (Non Functional Tests)**, cuyo propósito es evaluar componentes internos, no la funcionalidad de una web.  
- El **Baseline Test** debe ser recalculado en múltiples ocasiones y nunca heredado de corridas previas.  
- Los **thresholds claros y benchmarks de mercado** son esenciales para asegurar APIs estables, escalables y competitivas.  
- **JMeter** es la herramienta más adecuada para ejecutar estas pruebas, aunque debe complementarse con otras soluciones para casos funcionales o validaciones de UI.  