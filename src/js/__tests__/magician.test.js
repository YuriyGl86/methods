import Magician from '../magician';

test('shoud create object', () => {
  expect(new Magician('testName', 'magician')).toBeInstanceOf(Magician);
});