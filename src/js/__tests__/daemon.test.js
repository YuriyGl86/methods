import Daemon from '../daemon';

test('shoud create object', () => {
  expect(new Daemon('testName', 'bowerman')).toBeInstanceOf(Daemon);
});
