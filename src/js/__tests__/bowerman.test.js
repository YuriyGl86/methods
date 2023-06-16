import Bowerman from '../bowerman';

test('shoud create object', () => {
  expect(new Bowerman('testName', 'bowerman')).toBeInstanceOf(Bowerman);
});

test('charackter levelUp', () => {
  const bowerman = new Bowerman('testName', 'bowerman');
  bowerman.health = 80;
  bowerman.levelUp()
  expect(bowerman.health).toBe(100)
})


test('charackter is dead', () => {
  const bowerman = new Bowerman('testName', 'bowerman');
  bowerman.damage(1000)
  expect(() => { bowerman.levelUp() }).toThrow();
})

test('damage', () => {
  const bowerman = new Bowerman('testName', 'bowerman');
  bowerman.damage(100)
  expect(bowerman.health).toBe(25)
})