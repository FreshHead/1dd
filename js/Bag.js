import Sword from "./weapons/Sword.js";
import decapitalizeFirstLetter from "./Utils.js"

export default class Bag {
	capasity = 9;
	items = [new Sword()];
    constructor() {
    	this.items.forEach(item => $('#bag').append(`<div><img src=./res/${item.category}/${item.constructor.name.toLowerCase()}.png class="${item.category}" draggable="false"/></div>`));
    }

    addItem(item) {
    	if(this.items.length <= this.capasity){
            item.id = `${item.name.split(' ').join("_")}-${this.uuidv4()}`
            this.items.push(item)  
            $('#bag').append(`<img id="${item.id}" src=./res/${item.category}/${decapitalizeFirstLetter(item.constructor.name)}.png class="${item.category}" draggable="false"/>`)
			$(`#${item.id}`).draggable()

    	} else {
			console.error(`${item.name} не поместился в сумку и был выброшен в трубу!`)    		
    	}
    }

    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    removeItem(itemEl) {
        let id = itemEl.attr("id")
        this.items = this.items.filter(item => item.id !== id)
        itemEl.remove();
        console.log(itemEl)
    }

}