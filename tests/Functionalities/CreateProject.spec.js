import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//Pagina Login del sistema
  await page.goto('https://tst.lebane.app/sign-in');

// Ingreso de credenciales para acceder al sistema
  await page.getByRole('textbox', { name: 'ejemplo@compañia.com' }).click();
  await page.getByRole('textbox', { name: 'ejemplo@compañia.com' }).fill('qapruebatec1@lebane.app');

  await page.getByRole('textbox', { name: 'Contraseña *' }).press('ControlOrMeta+V');
  await page.getByRole('textbox', { name: 'Contraseña *' }).fill('x2EWs0s*tQ.Rhfn');

// Botón de Ingreso al sistema
  await page.getByRole('button', { name: 'Ingresar' }).click();

// Dentro del sistema - Botón de nuevo proyecto
  await page.getByRole('button', { name: 'Agregar proyecto' }).click();


// Relleno del formulario nueo proyecto
//Nombre del Proyecto
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Prueba funcional PH 3');
// Moneda
await page.getByRole('button', { name: 'Abrir' }).first().click();

await expect(
    page.getByRole('option', { name: 'USD' })
).toBeVisible();

await page.getByRole('option', { name: 'USD' }).click();
  await page.waitForTimeout(10000);

  await page.getByRole('combobox', { name: 'Seleccionar' }).first().click();
  await page.getByRole('option', { name: 'USD' }).click();
// Pais
  await page.getByRole('combobox', { name: 'Seleccionar' }).nth(1).click();
  await page.getByRole('option', { name: 'Argentina' }).click();
// Estado
  await page.getByRole('combobox', { name: 'Seleccionar' }).nth(2).click();
  await page.getByRole('option', { name: 'Capital Federal' }).click();
// Ciudad
  await page.getByRole('combobox', { name: 'Seleccionar' }).nth(3).click();
  await page.getByRole('option', { name: 'Boedo' }).click();
// Jurisdicción IIBB
  await page.getByRole('combobox', { name: 'Se deduce de la dirección' }).click();
  await page.getByRole('option', { name: 'Ciudad Autónoma de Buenos' }).click();
// Direección
  await page.getByRole('textbox', { name: 'Dirección' }).click();
  await page.getByRole('textbox', { name: 'Dirección' }).fill('Boedo');
// Número  
  await page.getByRole('textbox', { name: 'Número' }).click();
  await page.locator('input[name="numeroPuerta"]').fill('125');
// Fecha de inicio
await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).first().fill('05/11/2026');
// Fecha de finalización
await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).nth(1).fill('05/11/2028');
//Tipo de construcción
  await page.getByRole('combobox', { name: 'Seleccionar' }).nth(4).click();
  await page.getByRole('option', { name: 'Edificio', exact: true }).click();
 //Modalidad de ajuste 
  await page.locator('div:nth-child(14) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click();
  await page.getByRole('option', { name: 'Definitivo' }).click();
  // Razón social
  await page.getByRole('combobox', { name: 'Escribí para buscar o crear' }).click();
  await page.getByRole('option', { name: 'asdfghhjj' }).click();
 await page.waitForTimeout(10000);

/*
  //Botón de registro de formulario
  await page.getByRole('button', { name: 'Registrar' }).click();



  await page.getByRole('button', { name: 'Clientes' }).click();
  await page.getByRole('link', { name: 'Unidades' }).click();
  await page.locator('input[name="precioListaMetroCuadrado"]').click();
  await page.locator('input[name="precioListaMetroCuadrado"]').fill('500');
  await page.locator('input[name="pisos"]').click();
  await page.locator('input[name="pisos"]').fill('2');
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Dos dormitorios' }).click();
  await page.locator('input[name="unidadesPorPiso"]').click();
  await page.locator('input[name="unidadesPorPiso"]').fill('2');
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.getByRole('tab', { name: 'Unidades' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Exportar Excel' }).click();
  const download = await downloadPromise;
  */
});

