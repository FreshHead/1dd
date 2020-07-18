import Sword from "./weapons/Sword.js";

export default class Bag {
	items = [new Sword()];
    constructor() {
    	items.forEach(item => $('#bag').append(`<img src=./res/weapons/${item.constructor.name.toLowerCase()}.png class="weapon"/>`));
    }

}