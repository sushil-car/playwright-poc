import { test , expect} from '@playwright/test';
// import { test, expect } from 'playwright-test-coverage';
import path from 'path';
import fs from 'fs';
const v8toIstanbul = require('v8-to-istanbul');
// import { expect } from '@bgotink/playwright-coverage';
// import path from 'path';
// import fs from 'fs';
//
// import { mergeTests } from '@playwright/test';
// import { test as testWithCoverage } from '@bgotink/playwright-coverage';
//
// export const test = mergeTests(testWithCoverage, _baseTest);

// mono-cart
// import { test, expect } from './app-fixtures';

test.describe('TodoListTestComponent', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });

  test('should add a new todo', async ({ page }) => {
    await page.getByPlaceholder('Add new todo').fill('Buy milk');
    await page.getByRole('button', { name: /add/i }).click();
    await expect(page.getByText('Buy milk test')).toBeVisible();
  });

  test('should remove a todo', async ({ page }) => {
    await page.getByPlaceholder('Add new todo').fill('Read book');
    await page.getByRole('button', { name: /add/i }).click();
    await expect(page.getByText('Read book')).toBeVisible();

    // Assuming each todo has a remove button next to it
    await page.getByRole('button', { name: /remove/i }).click();
    await expect(page.getByText('Read book')).not.toBeVisible();
  });

  test('should clear all todos', async ({ page }) => {
    // await page.coverage.startJSCoverage();

    await page.getByPlaceholder('Add new todo').fill('Task 1');
    await page.getByRole('button', { name: /add/i }).click();
    await page.getByPlaceholder('Add new todo').fill('Task 2');
    await page.getByRole('button', { name: /add/i }).click();

    await expect(page.getByText('Task 1')).toBeVisible();
    await expect(page.getByText('Task 2')).toBeVisible();

    await page.getByRole('button', { name: /clear/i }).click();
    await expect(page.getByText('Task 1')).not.toBeVisible();
    await expect(page.getByText('Task 2')).not.toBeVisible();

    // const jsCoverage = await page.coverage.stopJSCoverage();
    // console.log('JavaScript Coverage:', JSON.stringify(jsCoverage, null, 2));

    // console.log('jsCoverage =============>', jsCoverage);
    // const filePath = path.resolve(
    //   path.join(process.cwd(), '/tests/coverageSave/js-coverage.json'),
    // );
    // // console.log('filePath =============>', filePath);
    // fs.writeFileSync(filePath, JSON.stringify(jsCoverage, null, 2));

    // for (const entry of jsCoverage) {
    //   const converter = v8toIstanbul('', 0, { source: entry.source });
    //   await converter.load();
    //   converter.applyCoverage(entry.functions);
    //   console.log(JSON.stringify(converter.toIstanbul()));
    // }
  });
});
