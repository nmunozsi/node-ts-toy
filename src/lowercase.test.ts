import { describe, it, expect } from 'vitest';
import { lowercase } from './lowercase';

describe('lowercase', () => {
  it('converts string to lowercase', () => {
    expect(lowercase('HELLO')).toBe('hello');
  });

  it('returns empty string when given empty string', () => {
    expect(lowercase('')).toBe('');
  });
});
