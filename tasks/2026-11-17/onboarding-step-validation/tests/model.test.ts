import { describe, expect, it } from 'vitest';
import { canContinue } from '../src/model';

describe('onboarding required profile fields', () => {
  it('blocks an empty profile', () => expect(canContinue({name:'',email:''})).toBe(false));
  it('blocks a missing email', () => expect(canContinue({name:'Riya',email:''})).toBe(false));
  it('allows a complete profile', () => expect(canContinue({name:'Riya',email:'riya@example.test'})).toBe(true));
});
