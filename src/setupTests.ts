import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import { expect } from 'vitest';
afterEach(() => {
  cleanup();
});

// beforeAll(() => {
//   server.listen();
// });

// afterEach(() => {
//   server.resetHandlers();

// });

// afterAll(() => {
//   server.close();
// });
