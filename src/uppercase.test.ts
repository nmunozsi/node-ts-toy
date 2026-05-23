import { describe, it, expect } from 'vitest';
import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('converts string to uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });

  it('returns empty string when given empty string', () => {
    expect(uppercase('')).toBe('');
  });
});
