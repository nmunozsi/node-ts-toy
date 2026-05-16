import { describe, it, expect } from 'vitest';
import { GITMOJI_SMOKE_OK } from './index';

describe('GITMOJI_SMOKE_OK', () => {
  it('equals true', () => {
    expect(GITMOJI_SMOKE_OK).toBe(true);
  });
});
