import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'daemon', 10, 40);
  }
}
