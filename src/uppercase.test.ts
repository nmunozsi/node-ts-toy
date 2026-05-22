import { describe, it, expect } from 'vitest';
import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('converts a string to uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });

  it('returns an empty string when given an empty string', () => {
    expect(uppercase('')).toBe('');
  });
});
