import Character from '../character';

test('shoud create object', () => {
  expect(new Character('testName', 'bowerman')).toBeInstanceOf(Character);
});

test.each([
  ['tooLongTestName', 'bowerman'],
  ['testName', 'someStarngeCharackter'],
  ['1', 'bowerman'],
])(('shoud throw error with name %s and type %s'), (name, type) => {
  // eslint-disable-next-line no-new
  expect(() => { new Character(name, type); }).toThrow();
});
