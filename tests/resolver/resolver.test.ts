import { resolveDependencies } from '../../resolver/src/resolver';

test('should resolve dependencies', () => {
  expect(() => resolveDependencies()).not.toThrow();
});
