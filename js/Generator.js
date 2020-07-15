import Weapon from "./Weapon.js"
import {QUALITIES} from "./enums/qualities.js"
import {MATERIALS} from "./enums/materials.js"
import {TYPES} from "./enums/types.js";
import {ENCHANTMENTS} from "./enums/enchantments.js";

export class Generator {
  genWeapon(){
    let quality = this.getRandom(QUALITIES);
    let material = this.getRandom(MATERIALS);
    let type = this.getRandom(TYPES);
    let enchantments = this.getRandom(ENCHANTMENTS);

    return new Weapon(quality, material, type, enchantments)
  }

  getRandom(objects){
    return  objects[Math.floor(Math.random() * objects.length)];
  }

}