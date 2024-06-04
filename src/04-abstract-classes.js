'use strict';
class Animal{
    faireDuBruit(){
        console.log('Un bruit retentie!');
    }
}
class Chien extends Animal{
    constructor(nom){
        this._nom = nom
    }
    faireDuBruit(){
        console.log(this._nom +' aboie!');
    }
    get nom(){
        return this._nom
    }
}
class Chat extends Animal{
    constructor(nom){
        super(Animal);
        this._nom = nom
    }
    faireDuBruit(){
        console.log(this._nom +' miaule!');
    }
    get nom(){
        return this._nom
    }
}
let catOne = new Chat('inox');
catOne.faireDuBruit();