// @ts-check
import { test, expect } from '@playwright/test';

test('Test Case 1: Register User', async ({ page }) => {
  // Launch the browser and navigate to the URL.
  await page.goto('https://www.automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.screenshot({ path: 'TestEvidence/TC01/landingPage.png'});
  // Signup and Login page
  await expect (page.locator('a[href="/login"]')).toBeEnabled();
  await page.locator('a[href="/login"]').click();
  await page.waitForURL('https://www.automationexercise.com/login');
  await expect(page).toHaveURL('https://www.automationexercise.com/login');
  await page.screenshot({ path: 'TestEvidence/TC01/signupPage.png'});
  // Verify that the signup form is visible.
  await expect(page.locator('div[class="signup-form"] h2')).toHaveText("New User Signup!");
  // Fill in the signup form.
  await page.locator('input[placeholder="Name"]').fill('Bugs Bunny');
  await page.locator('input[data-qa="signup-email"]').fill('BugsBunny@gmail.com');
  await page.screenshot({ path: 'TestEvidence/TC01/signupFormFilled.png'});
  // Click the Signup button.
  await page.locator('button[data-qa="signup-button"]').click();
  // Verify that the ENTER ACCOUNT INFORMATION message is displayed.
  await expect(page).toHaveURL('https://www.automationexercise.com/signup');
  await page.screenshot({ path: 'TestEvidence/TC01/accountInfoPage.png'});
  await expect(page.locator('//b[normalize-space()="Enter Account Information"]')).toHaveText('Enter Account Information');
  // Fill in the account information form.
  await page.locator('input[id="id_gender1"]').check();
  await expect(page.locator('input[id="id_gender1"]')).toBeChecked();
  await page.locator('input[id="name"]').fill('Bugs Bunny');
  await expect(page.locator('input[id="name"]')).toHaveValue('Bugs Bunny');
  await page.locator('input[id="password"]').fill('BugsBunny123');
  await page.locator('#days').selectOption('6');
  await expect(page.locator('#days')).toHaveValue('6');
  await page.locator('#months').selectOption('January');
  await expect(page.locator('#months')).toHaveValue('1');
  await page.locator('#years').selectOption('1993');
  await expect(page.locator('#years')).toHaveValue('1993');
  await page.locator('#newsletter').check();
  await expect(page.locator('#newsletter')).toBeChecked();
  await page.locator('#optin').check();
  await expect(page.locator('#optin')).toBeChecked();
  await page.screenshot({ path: 'TestEvidence/TC01/accountInfoFormFilled.png'});
  // Fill in the address information form.
  await page.locator('#first_name').fill('Bugs');
  await expect(page.locator('#first_name')).toHaveValue('Bugs');
  await page.locator('#last_name').fill('Bunny');
  await expect(page.locator('#last_name')).toHaveValue('Bunny');
  await page.locator('#company').fill('Warner Bros');
  await expect(page.locator('#company')).toHaveValue('Warner Bros');
  await page.locator('#address1').fill('123 Looney Tunes Lane');
  await expect(page.locator('#address1')).toHaveValue('123 Looney Tunes Lane');
  await page.locator('#address2').fill('Suite 100');
  await expect(page.locator('#address2')).toHaveValue('Suite 100');
  await page.locator('#country').selectOption('United States');
  await expect(page.locator('#country')).toHaveValue('United States');
  await page.locator('#state').fill('California');
  await expect(page.locator('#state')).toHaveValue('California');
  await page.locator('#city').fill('Los Angeles');
  await expect(page.locator('#city')).toHaveValue('Los Angeles');
  await page.locator('#zipcode').fill('90001');
  await expect(page.locator('#zipcode')).toHaveValue('90001');
  await page.locator('#mobile_number').fill('1234567890');
  await expect(page.locator('#mobile_number')).toHaveValue('1234567890');
  await page.screenshot({ path: 'TestEvidence/TC01/addressInfoFormFilled.png'});
  // Click the Create Account button.
  await page.locator('button[data-qa="create-account"]').click();
  // Verify that the ACCOUNT CREATED! message is displayed.
  await expect(page.locator('h2[data-qa="account-created"]')).toHaveText('Account Created!');
  await page.screenshot({ path: 'TestEvidence/TC01/accountCreatedMessage.png'});
  await page.locator('a[data-qa="continue-button"]').click();
  await page.screenshot({ path: 'TestEvidence/TC01/continueButtonClicked.png'});
  await expect(page.locator('ul[class="nav navbar-nav"] li a b')).toHaveText('Bugs Bunny');
  await page.locator('a[href="/delete_account"]').click();
  // Verify that the ACCOUNT DELETED! message is displayed.
  await expect(page.locator('h2[data-qa="account-deleted"]')).toHaveText('Account Deleted!');
  await page.screenshot({ path: 'TestEvidence/TC01/accountDeletedMessage.png'});
  // Click the Continue button.
  await page.locator('a[data-qa="continue-button"]').click();
});
