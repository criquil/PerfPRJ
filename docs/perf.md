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

| Estrategia | Definición | Racional (Por qué) | Objetivo (Para qué) | Ejecución Sugerida | Ejemplo / SLA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Baseline Test** | Medición inicial en condiciones ideales. | Establece un punto de referencia sólido. | Comparar ejecuciones futuras y detectar regresiones. | Carga baja/media (10-30 VU), 30 min. | Latencia < 500ms, Error 0%. |
| **Load Test** | Comportamiento bajo carga esperada. | Valida si soporta el tráfico proyectado. | Confirmar estabilidad en producción. | Usuarios concurrentes según SLA (p.ej. 500 VU). | 500 VU por 30-60 min. |
| **Stress Test** | Carga más allá del límite teórico. | Revela el punto de quiebre (Breaking Point). | Identificar cuellos de botella y recuperación. | Incremento gradual hasta fallo del servicio. | Error Rate > 5% o Latencia > 10s. |
| **Spike Test** | Incremento súbito y masivo de tráfico. | Simula eventos inesperados o virales. | Validar resiliencia y auto-escalado rápido. | De 10 a 1000 VU en segundos. | Disponibilidad tras pico abrupto. |
| **Endurance Test** | Carga constante por tiempo prolongado. | Detecta degradación acumulativa. | Identificar fugas de memoria (Memory Leaks). | Carga moderada por 4, 8 o 24 horas. | 12h estables sin reinicios. |
| **Scalability Test** | Medición de rendimiento vs recursos. | Asegura que el escalado sea eficiente. | Validar si más fierro = más performance. | Probar con distintas configuraciones de CPU/RAM. | +50% recursos = +40/50% throughput. |

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

| Métrica | Baseline | Load Test | Stress Test | Spike Test | Endurance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Avg Resp Time** | < 500 ms | < 2 s | N/A (Punto de quiebre) | < 2 s (Post-pico) | < 2.5 s |
| **Percentil 95** | < 800 ms | < 3 s | N/A | < 3 s (Post-pico) | < 3 s |
| **Error Rate** | < 0.1% | < 1% | > 5% (Target) | < 2% | < 1% |
| **Throughput** | Máximo ideal | Estable | Degradación | Recuperación | Estable |
| **Recursos (CPU)** | < 30% | < 70% | Saturation | Spike & Recovery | Estable |


---

## 6. Benchmarks de mercado
- **REST APIs**: latencia < 1 s en operaciones simples, < 2 s en complejas.  
- **GraphQL**: < 500 ms en queries simples, < 1.5 s en queries con joins múltiples.  
- **gRPC**: < 200 ms en llamadas internas, < 500 ms en externas.  
- **Event-driven APIs (Kafka, RabbitMQ)**: throughput estable, latencias < 100 ms en mensajes críticos.  

---

## 7. Encaje en el PTLC (Performance Test Life Cycle)

1. **Identificación de requerimientos**: definir métricas y thresholds.  
2. **Planificación y diseño**: seleccionar estrategias y escenarios.  
3. **Configuración del entorno**: preparar infraestructura y herramientas.  
4. **Ejecución de pruebas**: baseline iterado, carga, estrés, spike, endurance.  
5. **Análisis de resultados**: comparar contra thresholds y benchmarks.  
6. **Optimización y reejecución**: ajustar y validar mejoras.  
7. **Monitoreo continuo**: integrar en CI/CD y usar baseline como referencia histórica.  

---

## 8. Conclusiones
- La **unidad inicial** son las pruebas de API.  
- Las diferentes pruebas de performance son **estrategias de probar APIs de manera masiva** o con diferentes cargas.  
- Se clasifican como **NFT (Non Functional Tests)**, cuyo propósito es evaluar componentes internos, no la funcionalidad de una web.  
- El **Baseline Test** debe ser recalculado en múltiples ocasiones y nunca heredado de corridas previas.  
- Los **thresholds claros y benchmarks de mercado** son esenciales para asegurar APIs estables, escalables y competitivas.  