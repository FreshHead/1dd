import decapitalizeFirstLetter from "./Utils.js"
export default class Hand {
    constructor() {

    }

    putWeapon(weapon) {
        $('#hand').append(`<img id="${weapon.id}" src=${weapon.src} class="item ${weapon.category}" draggable="false"/>`)
    }

    rerender() {
        $('#hand').empty()


    }
}