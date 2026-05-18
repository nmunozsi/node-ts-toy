import { describe, it, expect } from 'vitest';
import { archSmokeTwo } from './index';

describe('archSmokeTwo', () => {
  it('returns 2', () => {
    expect(archSmokeTwo()).toBe(2);
  });
});
