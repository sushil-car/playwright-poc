import { defineConfig, devices } from '@playwright/test';
// import { defineCoverageReporterConfig } from '@bgotink/playwright-coverage';
// import path from 'path';
// import { V8CoverageEntry } from 'monocart-reporter';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  // testDir: './instrumented',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: [['list'], ['html']],
  // reporter: [
  //   ['list'],
  //   [
  //     'monocart-reporter',
  //     {
  //       name: 'My Test Report',
  //       outputFile: './monocart-report/index.html',
  //       coverage: {
  //         logging: 'debug',
  //         reports: [['codecov'], ['v8'], ['console-summary']],
  //         entryFilter: (entry: V8CoverageEntry) => {
  //           console.log('entry url======> ', entry.url);
  //           return true;
  //         },
  //         // sourceFilter: (sourcePath: string) => {
  //         //   console.log('sourcePath======> ', sourcePath);
  //         //   return true;
  //         // },
  //         // sourceFilter: (sourcePath: string) => {
  //         //   return (
  //         //     sourcePath.startsWith('packages/') &&
  //         //     !sourcePath.includes('node_modules/') && // dependencies.
  //         //     !sourcePath.includes('build/esm/') && // @shopify/web-worker.
  //         //     !sourcePath.includes('external-window') && // webpack externals.
  //         //     !sourcePath.includes('webpack/') && // webpack runtime.
  //         //     !sourcePath.includes('.css/') && // css js chunks.
  //         //     !sourcePath.includes('test/')
  //         //   );
  //         // },
  //         sourcePath: (filePath: string) => {
  //           // Remove project folder.
  //           return filePath.replace('media-experiments/', '');
  //         },
  //       },
  //     },
  //   ],
  // ],
  // reporter: [
  //   ['list'],
  //   [
  //     '@bgotink/playwright-coverage',
  //     defineCoverageReporterConfig({
  //       /* Path to the root files should be resolved from, most likely your repository root */
  //       sourceRoot: __dirname,
  //       /* Files to ignore in coverage, useful
  //          - if you're testing the demo app of a component library and want to exclude the demo sources
  //          - or part of the code is generated
  //          - or if you're running into any of the other many reasons people have for excluding files */
  //       exclude: ['path/to/ignored/code/**'],
  //       /* Directory in which to write coverage reports */
  //       resultDir: path.join(__dirname, 'results/e2e-coverage'),
  //       /* Configure the reports to generate.
  //          The value is an array of istanbul reports, with optional configuration attached. */
  //       reports: [
  //         /* Create an HTML view at <resultDir>/index.html */
  //         ['html'],
  //         /* Create <resultDir>/coverage.lcov for consumption by tooling */
  //         [
  //           'lcovonly',
  //           {
  //             file: 'coverage.lcov',
  //           },
  //         ],
  //         /* Log a coverage summary at the end of the test run */
  //         [
  //           'text-summary',
  //           {
  //             file: null,
  //           },
  //         ],
  //       ],
  //       /* Configure watermarks, see https://github.com/istanbuljs/nyc#high-and-low-watermarks */
  //       // watermarks: {},
  //     }),
  //   ]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200',
    reuseExistingServer: true, // !process.env.CI
  },
});
