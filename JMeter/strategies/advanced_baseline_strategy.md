# Estrategia de Generación de Baseline - Advanced Performance

## 1. Objetivo
Establecer una baseline confiable y estadísticamente consistente mediante la ejecución de múltiples iteraciones bajo condiciones controladas. Esto permitirá identificar los valores promedio esperados, así como los límites típicos y extremos de rendimiento del sistema.

---

## 2. Configuración de Escenarios
Se han parametrizado los archivos JMX (`baseline_*.jmx`) para soportar la variación de las siguientes condiciones:

### variables de Control
*   **Usuarios Concurrentes**: 10 (Baseline), 50 (Carga Normal), 100 (Carga Alta).
*   **Ramp-up Time**: 10s (Agresivo), 30s (Estándar), 60s (Suave).
*   **Datasets**: Uso de funciones `${__Random()}` para variar las páginas e IDs consultados en cada petición.
*   **Duración**: 300 segundos por iteración para asegurar estabilidad.

---

## 3. Matriz de Ejecución
Para reducir sesgos, cada escenario se ejecutará **3 veces**.

| Escenario | Usuarios | Ramp-up | Iteraciones | Objetivo |
| :--- | :--- | :--- | :--- | :--- |
| **B1: Baseline Low** | 10 | 10s | 3 | Establecer el "piso" de rendimiento. |
| **B2: Standard Load**| 50 | 30s | 3 | Comportamiento bajo carga típica esperada. |
| **B3: Stress Baseline**| 100 | 60s | 3 | Identificar degradación inicial bajo presión significativa. |

---

## 4. Procedimiento de Ejecución (Automatizado)
Para ejecutar la matriz de baseline desde la consola:

```powershell
# Ejemplo para ejecutar el Escenario B2 (50 users) para Characters
jmeter -n -t JMeter/baseline_characters.jmx `
       -Jthreads=50 -Jrampup=30 -Jduration=300 `
       -l JMeter/results/baselines/baseline_50u_run1.jtl
```

---

## 5. Métricas Clave a Registrar
Se deben consolidar los siguientes datos de las 3 ejecuciones de cada escenario:
1.  **Average Response Time**: Valor medio consolidado.
2.  **Percentiles (90, 95, 99)**: Para entender el comportamiento de la "cola larga".
3.  **Throughput (req/sec)**: Capacidad de procesamiento del sistema.
4.  **Error Rate**: Debe ser < 0.1% en condiciones de baseline.
5.  **Máximos y Mínimos**: Rango absoluto de respuesta.

---

## 6. Reporte Comparativo de Resultados (Template)

| Métrica | B1 (10 u) | B2 (50 u) | B3 (100 u) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Avg RT** | XXX ms | XXX ms | XXX ms | [Varianza %] |
| **95th %** | XXX ms | XXX ms | XXX ms | [Varianza %] |
| **Throughput**| XX/s | XX/s | XX/s | [Escalabilidad %] |
| **Errors** | 0% | 0% | X% | [Umbral] |

---

## 7. Uso como Referencia de Regresión
Estos valores consolidados servirán como el **"Performance Signature"** del sistema.
*   **Alerta Verde**: Variación < 10% respecto a la baseline consolidada.
*   **Alerta Amarilla**: Variación entre 10% - 20%. Requiere investigación.
*   **Alerta Roja**: Variación > 20% o aparición de errores. Indica regresión de performance inmediata.

---
**Resultado Esperado**: Un documento de baseline que refleje no solo un número estático, sino el comportamiento dinámico del sistema ante diferentes volúmenes de tráfico inicial.
