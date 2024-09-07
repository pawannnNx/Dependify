import { handleVersioning } from '../../versioning/src/versioning';

test('should handle versioning', () => {
  expect(() => handleVersioning()).not.toThrow();
});
