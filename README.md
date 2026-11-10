QA Automation Challenge - Lebane

Descripción:
Este proyecto contiene una prueba automatizada E2E desarrollada con Playwright para validar el flujo principal de gestión de proyectos y listas de precios.
La automatización cubre escenarios Happy Path y Edge Cases relacionados con:

Creación de proyectos.
Creación de listas de precios.
Generación automática de unidades.
Alta manual de unidades.
Recalculo de precios.
Eliminación individual de unidades.
Eliminación masiva de unidades.
Eliminación automática de listas vacías.

No se implementó el escenario de carga por Template Excel debido a limitaciones de tiempo. Se priorizaron los flujos de negocio críticos solicitados.

Instalación:

Clonar el repositorio
git clone <url-del-repo>
cd <nombre-del-proyecto>

Instalar dependencias
npm install

Instalar navegadores de Playwright
npx playwright install

Ejecución
Ejecutar todos los tests
npx playwright test

Ejecutar un test específico
npx playwright test tests/Functionalities/CreateProject.spec.js

Ejecutar en modo UI
npx playwright test --ui

Visualizar reporte
npx playwright show-report

Estructura del proyecto
project-root/
│
├── tests/
│   └── Functionalities/
│       └── CreateProject.spec.js
│
├── playwright.config.js
├── package.json
└── README.md

Descripción
tests/Functionalities

Contiene los escenarios automatizados del desafío.

CreateProject.spec.js

Contiene el flujo principal:
Login.
Creación de proyecto.
Configuración de lista de precios.
Validación de datos registrados.
Gestión de unidades.
Escenarios de eliminación.
Decisiones de diseño
Flujo E2E único

Se implementó un flujo punta a punta que cubre la creación del proyecto y todas las operaciones requeridas sobre las unidades.
Esto permite validar las reglas de negocio en un escenario lo más cercano posible al uso real del sistema.
Datos de prueba centralizados
Los datos utilizados para la prueba se agruparon dentro del objeto:
const ProyectoData = { ... }


Esto facilita el mantenimiento y la reutilización de información durante todo el flujo.
Validaciones orientadas al negocio
Además de validar la interacción con la interfaz, se verifican reglas funcionales como:

Generación automática de unidades.
Cálculo de metros cuadrados totales.
Recalculo automático del precio.
Eliminación automática de listas vacías.
Sincronización explícita

Debido al comportamiento dinámico de la aplicación (tooltips, grillas dinámicas y procesos de eliminación masiva), se incorporaron validaciones explícitas y esperas para estabilizar la ejecución del test.

Casos adicionales que testearía

Validaciones de creación Proyecto sin nombre

Verificar que el sistema impida registrar proyectos sin completar campos obligatorios.
Por qué: evita registros inválidos e inconsistencias de datos.

Precio Lista M2 igual a cero

Verificar comportamiento cuando el valor del metro cuadrado es cero.
Por qué: afecta directamente los cálculos de precios y resultados financieros.

Cantidad de pisos o unidades por piso igual a cero


Gestión de unidades
Creación de unidades duplicadas

Intentar crear una unidad con un identificador ya existente.
Por qué: previene duplicidad de información y conflictos de negocio.

Edición con valores inválidos

Validar ingreso de:
Valores negativos.
Caracteres no numéricos.
Campos vacíos.

Por qué: garantiza integridad de datos y validaciones de frontend/backend.

Tipología no seleccionada
Intentar guardar una unidad sin tipología.

Por qué: la tipología es un dato relevante para la clasificación comercial de la unidad.

Cálculos
Validación de redondeo
Verificar cálculos con valores decimales.

Ejemplo:
33.33 m²
45.75 m²
Por qué: evita diferencias de cálculo y errores financieros.

Recalculo masivo
Modificar múltiples unidades y validar actualización de precios.
Por qué: asegura consistencia en escenarios de uso reales.

Eliminaciones
Cancelar eliminación
Iniciar una eliminación y cancelarla.