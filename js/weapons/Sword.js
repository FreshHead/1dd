import Weapon from "../Weapon.js";

export default class Sword extends Weapon {
	constructor() {
		super("меч", 10, `Кажется этот меч никогда не точили.`)
	}
}