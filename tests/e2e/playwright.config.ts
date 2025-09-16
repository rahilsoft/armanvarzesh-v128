import { defineConfig } from '@playwright/test';
export default defineConfig({
  timeout: 60000,
  use: { headless: true },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ]
});
