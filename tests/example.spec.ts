import { test, expect } from '@playwright/test';

test.describe('TodoListTestComponent', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });

  test('should add a new todo', async ({ page }) => {
    await page.getByPlaceholder('Add new todo').fill('Buy milk');
    await page.getByRole('button', { name: /add/i }).click();
    await expect(page.getByText('Buy milk')).toBeVisible();
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
    await page.getByPlaceholder('Add new todo').fill('Task 1');
    await page.getByRole('button', { name: /add/i }).click();
    await page.getByPlaceholder('Add new todo').fill('Task 2');
    await page.getByRole('button', { name: /add/i }).click();

    await expect(page.getByText('Task 1')).toBeVisible();
    await expect(page.getByText('Task 2')).toBeVisible();

    await page.getByRole('button', { name: /clear/i }).click();
    await expect(page.getByText('Task 1')).not.toBeVisible();
    await expect(page.getByText('Task 2')).not.toBeVisible();
  });
});




