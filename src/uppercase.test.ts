import { describe, it, expect } from 'vitest';
import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('converts lowercase to uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });

  it('returns empty string for empty input', () => {
    expect(uppercase('')).toBe('');
  });
});
