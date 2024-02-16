/**
 * @jest-environment node
 */

import { GET } from './route';

describe('GET /api/hello', () => {
  test('returns message', async () => {
    const resp = await GET({} as Request);
    expect(await resp.text()).toBe('Hello, from API!');
  });
});
