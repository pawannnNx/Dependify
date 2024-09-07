import { managePackage } from '../../core/src/core';

test('should manage packages', () => {
  expect(() => managePackage('test-package', 'add')).not.toThrow();
  expect(() => managePackage('test-package', 'remove')).not.toThrow();
});
