import {Generator} from './Generator.js';
import Hero from "./Hero.js";
import Bag from "./Bag.js"
import Hand from "./Hand.js"
import Bat from "./monsters/Bat.js";
import Ghost from "./monsters/Ghost.js";
import Imp from "./monsters/Imp.js"
import Snapper from "./monsters/Snapper.js"

const generator = new Generator();
console.log("Игра началась!")

let hero = new Hero();
let bag = new Bag();
let hand = new Hand();

$("#chimney").droppable({
    drop: (event, ui) => {
    var draggable = ui.draggable;
    bag.trashItem(draggable);
    }
});

$("#hand").droppable({
    drop: (event, ui) => {
    let weapon = ui.draggable;
    bag.removeItem(weapon);
    // bag.items = bag.items.filter(item => item.id !== weapon.attr("id"))
    hand.putWeapon(weapon[0]);
    }
});

function battle(monster) {
    return new Promise((monsterKilled, heroKiled)=>{
        $('#monster').attr("src",`res/monsters/${monster.constructor.name.toLowerCase()}.png`);
        setTimeout(() => { // Костыльная пауза, чтобы изображение успело смениться.
            $("#monsterHP").width("100%");
            $('#monster').css('visibility', 'visible');
            $('#monster').fadeIn();

            let monsterTurn = setInterval(() => {
                $('#monster').animate({
                    width: '102%'
                }, "fast",
                () => {
                    let damage = Math.floor(Math.random() * (monster.maxDmg - monster.minDmg) + monster.minDmg);
                    hero.hp -= damage;
                    $("#heroHP").width((hero.hp / hero.maxHp * 100) + "%")
                    console.log(`${monster.name} нанёс ${damage} урона`)
                    console.log(`Жизнь героя:  ${hero.hp}/${hero.maxHp} hp`);
                    if (hero.hp <= 0) {
                        clearInterval(heroTurn);
                        clearInterval(monsterTurn);
                        console.log("Герой погиб")
                        heroKiled();
                    }
                $('#monster').animate({
                    width: '100%'
                }, "fast");
            });

        }, monster.speed);
            let heroTurn = setInterval(() => {
                monster.hp -= 5;
                $("#monsterHP").width((monster.hp / monster.maxHp * 100) + "%")
                console.log(`Жизнь ${monster.name}: ${monster.hp}/${monster.maxHp} hp`);
                if (monster.hp <= 0) {
                    clearInterval(heroTurn);
                    clearInterval(monsterTurn);
                    console.log(`${monster.name} повержен`)
                    bag.addItem(monster.drop[0]);
                    $('#monster').fadeOut('800', ()=> {
                        $('#monster').css('visibility', 'hidden');
                        monsterKilled();
                    });
                }
            }, 1000);
        }, 200);
    });
};

function getRandomMonster() {
    let monsters = [Bat, Imp];//, Ghost, Imp, Snapper];
    let randomInd = Math.floor(Math.random() * monsters.length);
    return new monsters[randomInd];
}

function gameLoop() {
    setTimeout(() => battle(getRandomMonster()).then(gameLoop)
        .catch(() => { alert("Герой погиб. Нажмите ctrl+r, чтобы начать заново.") })
        , 1000);
} 
gameLoop();


$("#potion").click(function () {
    if(hero.potions > 0) {
        hero.hp = hero.hp + 45 > hero.maxHp ? hero.maxHp : hero.hp + 45;
        hero.potions--;
        console.log(`Герой выпил зелье. Осталось ${hero.potions} глотков зелья`)
    }
});
