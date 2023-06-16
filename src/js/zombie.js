import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'zombie', 40, 10);
  }
}
