export default class Weapon {
  constructor(quality, material, type, enchantment){
    this.quality = quality
    this.material = material
    this.type = type
    this.enchantment = enchantment
  }

  toString(){
    return this.capitalize(`${this.quality} ${this.material} ${this.type} ${this.enchantment}`);
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
}