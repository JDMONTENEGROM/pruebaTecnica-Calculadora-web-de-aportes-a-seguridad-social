Calculadora de aportes a seguridad social (trabajadores dependientes)

Descripción
- Calcula los valores mensuales a pagar por Salud, Pensión, ARL y Caja de compensación para trabajadores dependientes.
- Presenta los resultados por concepto y el total, con una interfaz de una sola columna y caja centrada.

Estructura visual
- Encabezado con título “Calculadora de aportes – Dependientes” y texto corto explicativo.
- Formulario en una tarjeta blanca, centrada, con una sola columna y espacios claros.
- Resultados debajo del formulario, ocultos hasta calcular.
- Botón principal azul, total destacado en negrita.

Cómo funciona el cálculo
- Salud: 4% del salario.
- Pensión: 16% del salario.
- Caja de compensación: 4% del salario.
- ARL según riesgo:
  Riesgo 1 → 0,52%
  Riesgo 2 → 1,04%
  Riesgo 3 → 2,44%
  Riesgo 4 → 4,35%
  Riesgo 5 → 6,96%
- Cada valor: valor = salario × porcentaje.
- Total: suma de los cuatro conceptos.

Validaciones
- El salario debe ser positivo y no puede ser menor al salario mínimo legal vigente.
- El nivel de riesgo ARL es obligatorio.
- Si hay errores, se muestran mensajes claros y no se presentan resultados.

Tecnologías
- HTML para la estructura.
- CSS para estilos y diseño responsivo.
- JavaScript para validaciones y cálculos.

Cómo ejecutar
- Abra index.html en un navegador moderno.
- Ingrese el salario mensual y seleccione el nivel de riesgo ARL.
- Presione “Calcular aportes”.

Configuración del salario mínimo
- En script.js, edite la constante SMMLV al valor vigente.

Alcance y límites
- Solo para trabajadores dependientes.
- No se guardan datos ni se realizan pagos.
- Uso informativo.