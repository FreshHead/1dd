import Monster from "../Monster.js";
import ImpHorn from "../items/ImpHorn.js";

export default class Imp extends Monster {
    constructor() {
        super(60, 2, 5, 1500, "бесёнок", [new ImpHorn()]);
    }
}