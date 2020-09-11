export default class Monster {
    drop = [];
    constructor(maxHp, minDmg, maxDmg, speed, name, drop) {
        this.maxHp = maxHp;
        this.hp = this.maxHp;
        this.speed = speed;
        this.minDmg = minDmg;
        this.maxDmg = maxDmg;
        this.name = name;
        if (drop) {
            this.drop = drop;
        }
    }

}