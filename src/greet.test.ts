import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('returns a greeting with the provided name', () => {
    expect(greet('world')).toBe('hello, world');
  });
});
