import { describe, it, expect } from 'vitest';
import { uppercase } from './uppercase';

describe('uppercase', () => {
  it('converts lowercase string to uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });

  it('returns empty string when input is empty', () => {
    expect(uppercase('')).toBe('');
  });
});
