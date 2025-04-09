// Import Jest DOM matchers
import '@testing-library/jest-dom';

// Polyfills for MSW and fetch API in Node environment
import { TextEncoder, TextDecoder } from 'util';
import { Response, Request, Headers } from 'node-fetch';

// Add necessary globals for MSW
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.Response = Response;
global.Request = Request;
global.Headers = Headers;

// Add fetch polyfill for Node environment
if (typeof global.fetch === 'undefined') {
  global.fetch = jest.fn();
}

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
}));

// Reset mocks between tests
beforeEach(() => {
  jest.clearAllMocks();
});
