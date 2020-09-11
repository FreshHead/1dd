import Sword from "./weapons/Sword.js";
import decapitalizeFirstLetter from "./Utils.js"

export default class Bag {
	capasity = 9;
	items = [new Sword()];
    constructor() {
        this.rerender()
    }

    addItem(item) {
    	if(this.items.length <= this.capasity){
            item.id = this.generateId(item)
            this.items.push(item)  
            $('#bag').append(`<img id="${item.id}" src=./res/${item.category}/${decapitalizeFirstLetter(item.constructor.name)}.png class="item ${item.category}" draggable="false"/>`)
	       this.makeDraggable(item)
    	} else {
			console.error(`${item.name} не поместился в сумку и был выброшен в трубу!`)    		
    	}
    }

    generateId(item) {
        return `${item.name.split(' ').join("_")}-${this.uuidv4()}`
    }

    makeDraggable(item){
        $(`#${item.id}`).draggable({
            stop: ()=> {
                console.log("!!!")
                this.rerender()
            }
        });
    }

    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    trashItem(itemEl) {
        let id = itemEl.attr("id")
        this.removeItem(itemEl)
        this.items = this.items.filter(item => item.id !== id)
        itemEl.remove();
        console.log(`Ты выбросил ${deletingItem.name} в трубу`)
    }

    removeItem(itemEl){
        let id = itemEl.attr("id")
        this.items = this.items.filter(item => item.id !== id)
    }

    rerender(){
        $('#bag').empty()
        this.items.forEach(item => {
            item.id = item.id || this.generateId(item)
            $('#bag').append(`<img id="${item.id}" src=./res/${item.category}/${decapitalizeFirstLetter(item.constructor.name)}.png class="item ${item.category}" draggable="false"/>`)
            this.makeDraggable(item)
        });
    }

}