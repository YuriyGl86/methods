export default class Character {
  constructor(name, type, attack, defence) {
    if (Character.checkName(name) && Character.checkType(type)) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    }
  }

  static checkName(name) {
    if (typeof name !== 'string' || name.length > 10 || name.length < 2) {
      throw new Error('имя должно быть строкой от 2 до 10 символов');
    } else {
      return true;
    }
  }

  static checkType(type) {
    const charackters = ['bowerman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];
    if (typeof type !== 'string' || !(charackters.includes(type))) {
      throw new Error('тип персонажа должен быть один из Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    } else {
      return true;
    }
  }

  levelUp(){
    this.level +=1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    if(this.health > 0){
      this.health = 100;
    } else{
      throw new Error('нельзя повысить левел умершего')
    }
  }

  damage(points){
    const damage = points * (1 - this.defence / 100)
    if (this.health <= damage){ this.health = 0}
    else {this.health -= damage}
    
  }


}
