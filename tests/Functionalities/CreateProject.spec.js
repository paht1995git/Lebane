import { test, expect } from '@playwright/test';
test.setTimeout(120000);
test('Crear Proyecto con lista de precios', async ({ page }) => { 

  // ==================================================
  // PASO 1 - Ingreso al sistema
  // ==================================================

  const URL = 'https://tst.lebane.app/sign-in';

  const User = page.locator('input[name="email"]');
  const Password = page.locator('input[name="password"]');

  const BtnIngresar = page.getByRole('button', { name: 'Ingresar' });

  await page.goto(URL);
  await User.fill('qapruebatec1@lebane.app');
  await Password.fill('x2EWs0s*tQ.Rhfn');
  await BtnIngresar.click();

  // ==================================================
  // PASO 2 - Ingreso a creación de proyecto
  // ==================================================

  const BtnAgregarProyecto = page.getByRole('button', { name: 'Agregar proyecto' });

  await BtnAgregarProyecto.click();

  // ==================================================
  // PASO 3 - Relleno de formulario para creación de proyecto
  // ==================================================

  // LOCATORS

  const NombreProyecto = page.locator('input[name="nombreProyecto"]');
  const Moneda = page.locator('[data-cy="new-renderer-field-moneda"]');
  const País = page.locator('[data-cy="new-renderer-field-pais"]');
  const Estado = page.locator('[data-cy="new-renderer-field-estado"]');
  const Ciudad = page.locator('[data-cy="new-renderer-field-ciudad"]');
  const IIBB = page.locator('[data-cy="new-renderer-field-jurisdiccionId"]');
  const Dirección = page.locator('input[name="calle"]');
  const NumeroDireccion = page.locator('input[name="numeroPuerta"]');
  const FechaIni = page.locator('[data-cy="new-renderer-field-fechaInicio"]');
  const FechaFin = page.locator('[data-cy="new-renderer-field-fechaFin"]');
  const TipoConstruccion = page.locator('[data-cy="new-renderer-field-tipoConstruccion"]');
  const ModalidadAjuste = page.locator('[data-cy="new-renderer-field-modalidadAjuste"]');
  const RazonSocial = page.locator('div[name="razonSocial"] input');

  // DATOS DE PRUEBA
 
  const ProyectoData = {
      // PROYECTO
    NombreProyecto: 'Prueba Auto PH46',
    Moneda: 'USD',
    Pais: 'Argentina',
    Estado: 'Capital Federal',
    Ciudad: 'Caballito',
    IIBB: 'Ciudad Autónoma de Buenos Aires (CABA)',
    Calle: 'San Jose',
    Altura: '1299',
    TipoConstruccion: 'Edificio',
    ModalidadAjuste: 'Disponible al vencimiento',
    RazonSocial: 'asdfghhjj',
 
      // UNIDADES - CAMPOS-OBLIGATORIOS
    PreLisMt2: '1000',
    CanPisos: '2',
    Tipologia: 'Dos ambientes',
    UniPorPiso: '2',
    NomPreLista: '',
      // UNIDADES -  CAMPOS-OPCIONALES
    RenEsperada: '',
    CanSubSuelos: '',
    Cocheras: '',
    SubEstUnidades: '',
    Planos: '',
    Renders: '',
    Presentaciones: '',
    Videos: '',
    BolModulo: '',
    StrView: '',
    GooMapView: '',
    LugIntCerca: '',

    // AGREGAR NUEVA UNIDAD
    UniNueva: '001',
    PisoNuevo: 'Piso0;',
    TipologiaNueva: 'Dos Ambientes',
    M2Cubiertos: '10',
    M2SemCubiertos: '10',
    M2Descubiertos: '10',
    Remetraje: '5',
    
  };

  // FECHAS DINÁMICAS

  const Hoy = new Date();

  const FechaInicioValor =
    String(Hoy.getDate()).padStart(2, '0') + '/' +
    String(Hoy.getMonth() + 1).padStart(2, '0') + '/' +
    Hoy.getFullYear();

  const FechaFinDate = new Date(
    Hoy.getFullYear() + 2,
    Hoy.getMonth(),
    Hoy.getDate()
  );

  const FechaFinValor =
    String(FechaFinDate.getDate()).padStart(2, '0') + '/' +
    String(FechaFinDate.getMonth() + 1).padStart(2, '0') + '/' +
    FechaFinDate.getFullYear();

  // COMPLETAR FORMULARIO
  // ==================================================
  
  // Nombre del proyecto
  await NombreProyecto.fill( ProyectoData.NombreProyecto);
  await expect(NombreProyecto).toHaveValue(ProyectoData.NombreProyecto);

  // Moneda
  await page.waitForTimeout(1000);
  await Moneda.fill(ProyectoData.Moneda);
  await page.keyboard.press('Enter');
  await expect(Moneda).not.toHaveValue('');

  // País
  await page.waitForTimeout(1000);
  await País.fill(ProyectoData.Pais);
  await page.keyboard.press('Enter');
  await expect(País).not.toHaveValue('');

  // Estado
  await page.waitForTimeout(1000);
  await Estado.fill(ProyectoData.Estado);
  await page.keyboard.press('Enter');
  await expect(Estado).not.toHaveValue('');

  // Ciudad
  await page.waitForTimeout(1000);
  await Ciudad.fill(ProyectoData.Ciudad);
  await page.keyboard.press('Enter');
  await expect(Ciudad).not.toHaveValue('');

  // IIBB
  await page.waitForTimeout(1000);
  await IIBB.fill(ProyectoData.IIBB);
  await page.keyboard.press('Enter');
  await expect(IIBB).not.toHaveValue('');

  // Dirección
  await Dirección.fill(ProyectoData.Calle);
  await expect(Dirección).toHaveValue(ProyectoData.Calle);

  await NumeroDireccion.fill(ProyectoData.Altura);
  await expect(NumeroDireccion).toHaveValue(ProyectoData.Altura);

  // Fecha Inicio
  await page.waitForTimeout(1000);
  await FechaIni.fill(FechaInicioValor);
  await page.keyboard.press('Enter');
  await expect(FechaIni).toHaveValue(FechaInicioValor);
 

  // Fecha Fin
  await FechaFin.click();
  await page.keyboard.type(FechaFinValor);
  await expect(FechaFin).toHaveValue(FechaFinValor);

  // Tipo Construcción
  await page.waitForTimeout(1000);
  await TipoConstruccion.fill(ProyectoData.TipoConstruccion);
  await page.keyboard.press('Enter');
  await expect(TipoConstruccion).not.toHaveValue('');

  // Modalidad Ajuste
  await page.waitForTimeout(1000);
  await ModalidadAjuste.fill(ProyectoData.ModalidadAjuste);
  await page.keyboard.press('Enter');
  await expect(ModalidadAjuste).not.toHaveValue('');

  // Razón Social
  await page.waitForTimeout(1000);
  await RazonSocial.fill(ProyectoData.RazonSocial);
  await page.keyboard.press('Enter');
  await expect(RazonSocial).not.toHaveValue('');


  // VALIDACIONES
  // ==================================================
  console.log('=== DATOS DEL PROYECTO ===');

  console.log('Moneda:', await Moneda.inputValue());
  console.log('Pais:', await País.inputValue());
  console.log('Estado:', await Estado.inputValue());
  console.log('Ciudad:', await Ciudad.inputValue());
  console.log('IIBB:', await IIBB.inputValue());
  console.log('Tipo Construccion:', await TipoConstruccion.inputValue());
  console.log('Modalidad Ajuste:', await ModalidadAjuste.inputValue());
  console.log('Razon Social:', await RazonSocial.inputValue());

  // ==================================================
  // PASO 4 - Registro del proyecto
  // ==================================================

  const BtnRegistrar = page.getByRole('button', { name: 'Registrar' });

  await BtnRegistrar.click();

  // VALIDACIÓN DE DESPLAZAMIENTO A UNA PANTALLA LUEGO DE HACER UN REGISTRO
  // ==================================================
 
  await expect(page.getByText(ProyectoData.NombreProyecto).first()).toBeVisible();
 
  // ==================================================
  // PASO 4.1 - DESPLAZAMIENTO A CLIENTES -> UNIDADES
  // ==================================================

  // Navegar a la sección Unidades

  const BtnClientes = page.locator('[data-cy="sidebar-clientes"]');

  const MnUnidades = page.getByRole('menuitem', {name:'Unidades'}); 

  await BtnClientes.click();
  await MnUnidades.click();

  // ==================================================
  // PASO 5 - FORMULARIO DE UNIDADES
  // ==================================================

  // LOCATORS - Formulario de Unidades Campos Obligatorios
  // ==================================================
const PreLisMt2 = page.locator('input[name="precioListaMetroCuadrado"]');
const CanPisos = page.locator('input[name="pisos"]');
const Tipologia = page.locator('[data-cy="new-renderer-field-tipologias"]');
const UniPorPiso = page.locator('input[name="unidadesPorPiso"]');
 
// LOCATORS - Formulario de Unidades Campos Opcionales
// ==================================================
const RenEsperada = page.locator('input[name="gananciaEsperada"]');
const CanSubSuelos = page.locator ('input[name="subsuelos"]');
const Cocheras = page.locator ('input[name="cantidadCocheras"]');
const SubEstUnidades = page.locator ('[data-cy="new-renderer-field-subEstadosUnidades"]');
const Planos = page.locator ('[data-cy="new-renderer-field-planos"]');
const Renders = page.locator ('[data-cy="new-renderer-field-renders"]');   
const Presentaciones = page.locator ('[data-cy="new-renderer-field-presentaciones"'); 
const Videos = page.locator('[data-cy="new-renderer-field-videos"]')   
const BolModulo = page.locator ('[data-cy="new-renderer-field-boletoModelo"]'); 
const StrView = page.locator ('[data-cy="new-renderer-field-streetView"]');
const GooMapView = page.locator ('[data-cy="new-renderer-field-googleMaps"]');
const LugIntCerca = page.locator ('[data-cy="new-renderer-field-lugaresDeInteres"]');

// CAMPOS OBLIGATORIOS

// Precio Lista Mt2
await PreLisMt2.fill(ProyectoData.PreLisMt2);
await expect(PreLisMt2).not.toHaveValue('');

// Cantidad de Pisos
await CanPisos.fill(ProyectoData.CanPisos);
await expect(CanPisos).not.toHaveValue('');

// Tipologías
await Tipologia.click();
await page.getByText(ProyectoData.Tipologia).click();

// Unidades por Piso
await UniPorPiso.fill(ProyectoData.UniPorPiso);
await expect(UniPorPiso).not.toHaveValue('');

  // ==================================================
  // PASO 6 - Guardar formulario de las Unidades
  // ==================================================
const BtnGuardar = page.getByRole('button', { name: 'Guardar' });

await BtnGuardar.click ();

  // ==================================================
  // PASO 6.1 - Validación de persistencia de datos
  // ==================================================

  // Constantes Obligaotrias
  const CrdMoneda = page.locator('.MuiPaper-root').filter({has: page.getByText('Moneda')});

  const CrdPreLisM2 = page.locator('.MuiPaper-root').filter({has: page.getByText('Precio lista M2')});
  const CrdCanPisos = page.locator('.MuiPaper-root').filter({has: page.getByText('Cantidad de pisos')});
  const CrdUniPisos = page.locator('.MuiPaper-root').filter({has: page.getByText('Unidades por piso')});
  const CrdNomLisPrecios = page.locator('.MuiPaper-root').filter({has: page.getByText('Nombre de la lista de precios')});
    // Constantes Opcionales
  const CrdRenEsperada = page.locator('.MuiPaper-root').filter({has: page.getByText('Rend. esp. (%)')});
  const CrdCanSubSuelos = page.locator('.MuiPaper-root').filter({has: page.getByText('Cantidad de subsuelos')});
  const CrdCocheras = page.locator('.MuiPaper-root').filter({has: page.getByText('Cocheras')});
  const CrdSubEstUnidades = page.locator('.MuiPaper-root').filter({has: page.getByText('Sub-Estados Unidades')});
  const CrdPlanos = page.locator('.MuiPaper-root').filter({has: page.getByText('Planos')});
  const CrdRenders = page.locator('.MuiPaper-root').filter({has: page.getByText('Renders')});
  const CrdPresentaciones = page.locator('.MuiPaper-root').filter({has: page.getByText('Presentaciones')});
  const CrdVideos = page.locator('.MuiPaper-root').filter({has: page.getByText('Videos')});
  const CrdBolModulo = page.locator('.MuiPaper-root').filter({has: page.getByText('Boleto modulo')});
  const CrdStrView = page.locator('.MuiPaper-root').filter({has: page.getByText('Street view')});
  const CrdGooMapView = page.locator('.MuiPaper-root').filter({has: page.getByText('Google Maps View')});
  const CrdLugIntCerca = page.locator('.MuiPaper-root').filter({has: page.getByText('Lugares de interes cerca')}); 

await expect(CrdMoneda).toContainText( ProyectoData.Moneda);

await expect( CrdPreLisM2).toContainText(ProyectoData.PreLisMt2);

await expect(CrdCanPisos).toContainText(ProyectoData.CanPisos);

await expect(CrdUniPisos).toContainText(ProyectoData.UniPorPiso);

// Campos Opcionales
// ==================================================

  console.log('=== DATOS DEL PROYECTO ===');
// Rendimiento Esperado
await expect(CrdRenEsperada).toContainText(ProyectoData.RenEsperada || 'Sin datos');

// Cantidad de Subsuelos
await expect(CrdCanSubSuelos).toContainText(ProyectoData.CanSubSuelos || 'Sin datos');

// Cocheras
await expect(CrdCocheras).toContainText(ProyectoData.Cocheras || 'Sin datos');

// Sub Estados de Unidades
await expect(CrdSubEstUnidades).toBeVisible();

// Planos
await expect(CrdPlanos).toContainText(ProyectoData.Planos || 'Sin datos');

// Renders
await expect(CrdRenders).toContainText(ProyectoData.Renders || 'Sin datos');

// Presentaciones
await expect(CrdPresentaciones).toContainText(ProyectoData.Presentaciones || 'Sin datos');

// Videos
await expect(CrdVideos).toContainText( ProyectoData.Videos || 'Sin datos');

// Boleto Módulo
await expect(CrdBolModulo).toContainText( ProyectoData.BolModulo || 'Sin datos');

// Street View
await expect(CrdStrView).toContainText(ProyectoData.StrView || 'Sin datos');

// Google Maps View
await expect(CrdGooMapView).toContainText(ProyectoData.GooMapView || 'Sin datos');

// Lugares de Interés Cerca
await expect(CrdLugIntCerca).toContainText(ProyectoData.LugIntCerca || 'Sin datos');

// VALIDACIONES
  // ==================================================
console.log('=== DATOS DE LAS UNIDADES ===');
console.log('Moneda:', ProyectoData.Moneda);
console.log('Precio Lista M2:', ProyectoData.PreLisMt2);
console.log('Cantidad Pisos:', ProyectoData.CanPisos);
console.log('Unidades por Piso:', ProyectoData.UniPorPiso);
console.log('Rendimiento Esperado:', ProyectoData.RenEsperada || 'Sin datos');
console.log('Cantidad de Subsuelos:', ProyectoData.CanSubSuelos || 'Sin datos');
console.log('Cocheras:', ProyectoData.Cocheras || 'Sin datos');
console.log('Sub Estados Unidades: Campo visible y sin valor');
console.log('Planos:', ProyectoData.Planos || 'Sin datos');
console.log('Renders:', ProyectoData.Renders || 'Sin datos');
console.log('Presentaciones:', ProyectoData.Presentaciones || 'Sin datos');
console.log('Videos:', ProyectoData.Videos || 'Sin datos');
console.log('Boleto Módulo:',ProyectoData.BolModulo || 'Sin datos');
console.log('Street View:',ProyectoData.StrView || 'Sin datos');
console.log('Google Maps View:',ProyectoData.GooMapView || 'Sin datos');
console.log('Lugares de Interés Cerca:',ProyectoData.LugIntCerca || 'Sin datos');


  // ==================================================
  // PASO 7 - Navegar a lista de unidades
  // ==================================================

  const LisUnidades = page.getByRole('tab',{ name: 'Unidades' });
  await LisUnidades.click();


  // ==================================================
  // PASO 7.1 - Validación de lista de unidades post carga de proyecto
  // ==================================================
  
  const GrillaUnidades = page.locator('tbody');
  const FilasUnidades = page.locator('tbody tr');
  
  await expect(GrillaUnidades).toBeVisible(); 
  console.log('Se evidencia creación de lista de unidades');
  await expect( FilasUnidades).not.toHaveCount(0);
  

const CanEspUnidades =
  Number(ProyectoData.CanPisos) * Number(ProyectoData.UniPorPiso);

await expect(FilasUnidades).toHaveCount(CanEspUnidades);
console.log('Cantidad esperada de unidades:', CanEspUnidades);

  // ==================================================
  // PASO 8 - AGREGAR UNIDAD MANUALMENTE
  // ==================================================

const BtnAdiUnidad = page.getByRole( 'button',{ name: 'Adicionar unidad' });

await expect(BtnAdiUnidad).toBeVisible();
await BtnAdiUnidad.click();

// CAMPO UNIDAD
const AdiUnidad = page.locator('tbody tr').last();
await AdiUnidad.locator('[data-column-id="numero"]').click();
await page.getByRole('textbox', { name: 'Valor...' }).fill(ProyectoData.UniNueva);
await page.getByRole('textbox', { name: 'Valor...' }).press('Enter');

// CAMPO PISO
await AdiUnidad.locator('[data-column-id="piso"]').click();
await page.getByRole('tooltip').getByText('Piso 0').click();

// CAMPO TIPOLOGIA

await page.getByRole('cell', { name: 'Seleccionar', exact: true }).nth(4).click();
await page.getByRole('tooltip').getByText('Dos ambientes').click();

// CAMPO M2 CUBIERTOS
await AdiUnidad.locator('[data-column-id="metrosCubiertos"]').click();
await page.getByRole('textbox', { name: 'Valor...' }).fill(ProyectoData.M2Cubiertos);
await page.getByRole('textbox', { name: 'Valor...' }).press('Enter');

// CAMPO M2 SEMI CUBIERTOS
await AdiUnidad.locator('[data-column-id="metrosSemiCubiertos"]').click();
await page.getByRole('textbox', { name: 'Valor...' }).fill(ProyectoData.M2SemCubiertos);
await page.getByRole('textbox', { name: 'Valor...' }).press('Enter');

// CAMPO DESCUBIERTO
await AdiUnidad.locator('[data-column-id="metrosDescubiertos"]').click();
await page.getByRole('textbox', { name: 'Valor...' }).fill(ProyectoData.M2Descubiertos);
await page.getByRole('textbox', { name: 'Valor...' }).press('Enter');

//CANTIDAD DE MT2 
const M2Esperados = Number(ProyectoData.M2Cubiertos) + Number(ProyectoData.M2SemCubiertos) + Number(ProyectoData.M2Descubiertos);

await expect(AdiUnidad.locator('[data-column-id="metrosTotales"]')).toContainText(M2Esperados.toString());
console.log('M2 Totales Esperados:',M2Esperados);

// PRECIO FINAL DE LA UNIDAD 
const PreEsperado = (M2Esperados * Number(ProyectoData.PreLisMt2)).toLocaleString('es-AR');

await expect(AdiUnidad.locator('[data-column-id="precio"]')).toContainText(PreEsperado);
console.log('Precio de la unidad:', PreEsperado)

  // ==================================================
  // PASO 9 - MODIFICAR PRECIO DE LA UNIDAD
  // ==================================================
await AdiUnidad.locator('[data-column-id="metrosCubiertos"]').click();

const Remetraje =  page.getByRole('textbox', { name: 'Valor...' });

await Remetraje.clear();
await Remetraje.fill(ProyectoData.Remetraje);
await Remetraje.press('Enter');

const NueM2Esperado = Number(ProyectoData.Remetraje) + Number(ProyectoData.M2SemCubiertos) + Number(ProyectoData.M2Descubiertos);
await expect(AdiUnidad.locator('[data-column-id="metrosTotales"]')).toContainText(NueM2Esperado.toString());


const NuePrecioEsperado = (NueM2Esperado * Number(ProyectoData.PreLisMt2)).toLocaleString('es-AR');
await expect(AdiUnidad.locator('[data-column-id="precio"]')).toContainText(NuePrecioEsperado);
console.log('Nuevo M2 Total:', NueM2Esperado);
console.log('Nuevo Precio Unidad:', NuePrecioEsperado);

  // ==================================================
  // PASO 10 - ELIMINAR UNIDAD DE LA LISTA
  // ==================================================

const CanFilas = await FilasUnidades.count();
console.log('Cantidad antes de eliminar:',CanFilas);

await AdiUnidad.getByLabel('Eliminar').click();

await page.getByRole('button', { name: 'Confirmar' }).click();

await expect(FilasUnidades).toHaveCount(CanFilas - 1);

const CanFilas2 = await FilasUnidades.count();

console.log('Cantidad después de eliminar:', CanFilas2);
console.log('Registros eliminados:', CanFilas - CanFilas2);

  // ==================================================
  // PASO 11 - ELIMINAR ULTIMA UNIDAD DE LA LISTA
  // ==================================================
const CantidadInicial = await FilasUnidades.count();
console.log('Cantidad inicial de registros:',CantidadInicial);

await page.getByRole('checkbox', {name: 'Alternar seleccionar todo'}).check();

const Toast = page.getByText('Unidad eliminada de la lista de precios');

if (await Toast.isVisible().catch(() => false)) {await page.getByRole('alert').getByRole('button', { name: 'Cerrar' }).click();}

await page.getByTestId('toolbar-eliminar-seleccionadas').click();

await page.getByRole('button', { name: 'Confirmar'}).click();

const MsjExito = page.getByText('Proceso completado con exito, puedes cerrar este diálogo.',{ exact: true });
await expect(MsjExito).toBeVisible({timeout: 60000});

const Dialog = page.getByRole('dialog');
await expect(Dialog).toBeVisible();
await Dialog.getByRole('button', { name: 'Cerrar' }).click({ force: true });

const GrillaVacia = page.getByText('No hay registros para mostrar',{ exact: true });
await expect(GrillaVacia).toBeVisible();

const CantidadFinal = await FilasUnidades.count();

console.log('Cantidad inicial:',CantidadInicial);
console.log('Cantidad final:',CantidadFinal);
console.log('Registros eliminados:', CantidadInicial - CantidadFinal);
console.log(`Se eliminaron ${CantidadInicial} registros de forma masiva`);

  // ==================================================
  // PASO 12 - LISTA SIN UNIDADES SE ELIMINA AUTOMATICAMENTE
  // ==================================================

console.log('La grilla quedó vacía correctamente');
console.log('"No hay registros para mostrar" se visualiza');

 });