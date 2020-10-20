export default class Item {
	category = "items";
	constructor(name, price, tooltip) {
		this.name = name;
		this.price = price;
		this.tooltip = `${tooltip} Можно продать за ${this.price}.`;
	}

}