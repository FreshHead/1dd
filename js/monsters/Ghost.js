import Monster from "../Monster.js";

export default class Ghost extends Monster{
    constructor() {
        super(25, 1, 8, 1200, "призрак");
    }
}