const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};
  
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const minDmg = 15;
  const { strength } = dragon;
  const dmgDragon = Math.floor(Math.random() * (strength - minDmg) + minDmg);
  return dmgDragon;
}

const warriorAttack = () => {
  const { strength } = warrior;
  const { weaponDmg } = warrior
  const maxDmg = strength * weaponDmg;
  const dmgWarrior = Math.floor(Math.random() * (maxDmg - strength) + strength);
  return dmgWarrior;
}

const mageAttack = () => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnsStats = {
    manaSpent: 0,
    demageDealt: 'Não possui mana suficiente',
  };

  if (mageMana > 15) {
    const mageDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
    turnsStats.manaSpent = 15;
    turnsStats.demageDealt = mageDmg;
    return turnsStats
  }
  return turnsStats;
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack();
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack();
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
  },
  turnResults: () => battleMembers,
};
gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);

console.log(gameActions.turnResults());




