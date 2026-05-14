import { describe, it, expect } from 'vitest';
import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('converts a lowercase string to uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });

  it('returns an empty string unchanged', () => {
    expect(uppercase('')).toBe('');
  });
});
