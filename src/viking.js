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
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  saxonDamage = this.saxon.receiveDamage(this.vicking.attack());
  if (this.saxon.health <= 0) {
    this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    }
    return saxonDamage;
  }
  
  saxonAttack() {
      const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    vikingDamage = this.viking.receiveDamage(this.saxon.attack());
    if (this.viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
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
