import { test, expect } from '@playwright/test';

test('Iniciar Sesion en Sistema', async ({ page }) => {
  await page.goto('https://tst.lebane.app/sign-in');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'ejemplo@compañia.com' }).click();
  await page.getByRole('textbox', { name: 'ejemplo@compañia.com' }).fill('qapruebatec1@lebane.app');
  await page.waitForTimeout(2000);

  await page.getByRole('textbox', { name: 'Contraseña *' }).click();
  await page.getByRole('textbox', { name: 'Contraseña *' }).fill('x2EWs0s*tQ.Rhfn');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.waitForTimeout(2000);

  // Locator cuando las credencailes son incorrectas
  if (await page.locator('#password-helper-text').isVisible()) {

    throw new Error('Login fallido: Por favor, asegurate que la contraseña es correcta.');
  }

  // Texto cuando credenciales son correctas y se pudo acceder al Home del sistema
  await expect( page.getByText('A. qa prueba')).toBeVisible();
});

// Usuario: qapruebatec1@lebane.app
// Password: x2EWs0s*tQ.Rhfn