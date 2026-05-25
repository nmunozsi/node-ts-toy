import { describe, it, expect } from 'vitest';
import { archSmokeOne } from './index';

describe('archSmokeOne', () => {
  it('returns 1', () => {
    expect(archSmokeOne()).toBe(1);
  });
});
