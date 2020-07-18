import {Generator} from './Generator.js';
import Hero from "./Hero.js";
import Bag from "./Bag.js"
import Bat from "./monsters/Bat.js";
import Ghost from "./monsters/Ghost.js";
import Imp from "./monsters/Imp.js"
import Snapper from "./monsters/Snapper.js"

const generator = new Generator();
console.log("main стартовал")

$("#genWeaponBtn").click(function () {
    let weapon = generator.genWeapon();
    $("#weaponName").text(weapon.toString())
});

$("#bag").on('click', '.weapon', function () {
  let e = window.event;
  let target = e.target;
  console.log("Выбрано оружие")
});

let hero = new Hero();
let bag = new Bag();
 

function battle(monster) {
    return new Promise((monsterKilled, heroKiled)=>{
        $('#monster').attr("src",`res/monsters/${monster.constructor.name.toLowerCase()}.png`);
        // $('#monster').css('visibility', 'visible');

        let monsterTurn = setInterval(() => {
        hero.hp -= 3;
        $("#heroHP").width((hero.hp / 100 * 100) + "%")
        console.log(`Жизнь героя:  ${hero.hp}/${hero.maxHp} hp`);
        if (hero.hp <= 0) {
            clearInterval(heroTurn);
            clearInterval(monsterTurn);
            console.log("Герой погиб")
            heroKiled();
        }
    }, 800);

        let heroTurn = setInterval(() => {
            monster.hp -= 5;
            $("#monsterHP").width((monster.hp / 40 * 100) + "%")
            console.log(`Жизнь ${monster.name}: ${monster.hp}/${monster.maxHp} hp`);
            if (monster.hp <= 0) {
                clearInterval(heroTurn);
                clearInterval(monsterTurn);
                console.log(`${monster.name} повержен`)
                // $('#monster').css('visibility', 'hidden');
                monsterKilled();
            }
        }, 1000);
    });
};

function getRandomMonster() {
    let monsters = [Bat, Ghost, Imp, Snapper];
    let randomInd = Math.floor(Math.random() * monsters.length);
    return new monsters[randomInd];
}

function gameLoop() {
    setTimeout(() => battle(getRandomMonster()).then(gameLoop), 1000);
  
} 
gameLoop();


$("#potion").click(function () {
    if(hero.potions > 0) {
        hero.hp = hero.hp + 45 > hero.maxHp ? hero.maxHp : hero.hp + 45;
        hero.potions--;
        console.log(`Герой выпил зелье. Осталось ${hero.potions} глотков зелья`)
    }
});

