import decapitalizeFirstLetter from "./Utils.js"
export default class Hand {
    constructor() {

    }

    putWeapon(weapon){
    	$('#hand').append(`<img id="${weapon.id}" src=${weapon[0].src} class="item ${weapon.category}" draggable="false"/>`)
    	// $('#hand').append(weapon[0])
    	// $('hand').append(`<img id="${item.id}" src=./res/${item.category}/${decapitalizeFirstLetter(item.constructor.name)}.png class="item ${item.category}" draggable="false"/>`)1
    }

    rerender(){
        $('#hand').empty()
        
      
    }
}