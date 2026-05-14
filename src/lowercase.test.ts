import { describe, it, expect } from 'vitest';
import { lowercase } from './lowercase';

describe('lowercase', () => {
  it('converts uppercase to lowercase', () => {
    expect(lowercase('HELLO')).toBe('hello');
  });

  it('returns empty string unchanged', () => {
    expect(lowercase('')).toBe('');
  });
});
