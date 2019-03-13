import namespacedTypes from 'src/lib/redux/action-helper';

describe('[unit] lib/redux/action-helper', () => {
  describe('namespacedTypes', () => {
    it('namespaces the action types', () => {
      expect(namespacedTypes('NAMESPACE', ['CANCEL', 'SUBMIT'])).toEqual({
        CANCEL: 'NAMESPACE:CANCEL',
        SUBMIT: 'NAMESPACE:SUBMIT'
      });
    });
  });
});
