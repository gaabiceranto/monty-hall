export default class DoorModel {
    #number: number;
    #haveAGift: boolean;
    #select: boolean;
    #open: boolean;
    
    constructor(number: number ,haveAGift = false, select = false, open = false){
        this.#number = number
        this.#haveAGift = haveAGift
        this.#select = select
        this.#open = open
    }

    get number (){
        return this.#number
    }
    get haveAGift (){
        return this.#haveAGift
    }
    get select (){
        return this.#select
    }
    get open (){
        return this.#open
    }

    unselect(){
        const select = false
        return new DoorModel(this.number, this.haveAGift, select, this.open)
    }
    changeSelection(){
        const select = !this.select
        return new DoorModel(this.number, this.haveAGift, select, this.open)
    }
    open12(){
        const open = true
        return new DoorModel(this.number, this.haveAGift, this.select, open)
    }
}