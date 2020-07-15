import {Generator} from './Generator.js';
import Hero from "./Hero.js";
import Bat from "./monsters/Bat.js";

const generator = new Generator();
console.log("main стартовал")

$("#genWeaponBtn").click(function () {
    let weapon = generator.genWeapon();
    $("#weaponName").text(weapon.toString())
});

let hero = new Hero();


async function battle(monster) {
    let heroDamage = setInterval(() => {
        hero.hp -= 3;
        $("#heroHP").width((hero.hp / 100 * 100) + "%")
        console.log(`Жизнь героя:  ${hero.hp}/${hero.maxHp} hp`);
        if (hero.hp <= 0) {
            clearInterval(monsterDamage);
            clearInterval(heroDamage);
            console.log("Герой погиб")
            return;
        }
    }, 800);

    let monsterDamage = setInterval(() => {
        monster.hp -= 5;
        $("#monsterHP").width((monster.hp / 40 * 100) + "%")
        console.log(`Жизнь ${monster.name}: ${monster.hp}/${monster.maxHp} hp`);
        if (monster.hp <= 0) {
            clearInterval(monsterDamage);
            clearInterval(heroDamage);
            console.log(`${monster.name} повержен`)
            return;
        }
    }, 1000);
};

battle(new Bat()).then(()=> battle(new Bat()));






