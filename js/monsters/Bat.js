import Monster from "../Monster.js";
import BatFang from "../items/BatFang.js";

export default class Bat extends Monster{
    constructor() {
        super(40, 1, 4, 800, "летучая мышка", [new BatFang()]);
    }
}