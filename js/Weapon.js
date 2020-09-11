import Item from "./Item.js";
export default class Weapon extends Item {
  category = "weapons";
  constructor(name, price) {
    super(name, price)
  }

  toString() {
    // return this.capitalize(`${this.quality} ${this.material} ${this.type} ${this.enchantment}`);
  }

  capitalize(string) {
    // return string[0].toUpperCase() + string.slice(1);
  }
}