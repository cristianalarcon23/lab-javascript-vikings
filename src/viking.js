// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    this.name = name;
    super(health, strength);
  }
  
    receiveDamage (damage) {
    this.health = this.health - damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
      }
      else {
        return `${this.name} has died in act of combat`
      }
  }
    battleCry() {
      return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
    this.health = this.health - damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
      }
      else {
        return `A Saxon has died in combat`
      }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(Viking) {
    vikingArmy.unshift(Viking);
  }
  
  addSaxon(Saxon) {
    saxonArmy.unshift(Saxon);
  }
  
  vikingAttack() {
      const saxon = Math.random(this.saxonArmy);
      const viking = Math.random(this.vikingArmy);
    saxonDamage = saxon.receiveDamage(viking.attack());
    if (saxon.health <= 0) {
      this.saxonArmy.push(saxon);
    }
    return saxonDamage;
  }
  
  saxonAttack() {
      const saxon = Math.random(this.saxonArmy);
      const viking = Math.random(this.vikingArmy);
    vikingDamage = viking.receiveDamage(saxon.attack());
    if (viking.health <= 0) {
      this.vikingArmy.push(viking);
    }
    return vikingDamage;
  }
  
  showStatus() {
    
  }
  
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
