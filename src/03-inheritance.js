'use strict';
class Vehicule{
    constructor(marque,modele,annee){
        this._marque = marque
        this._modele = modele;
        this._annee = annee;
    }
}
class Voiture extends Vehicule{
    constructor(marque,modele,annee,couleur){
        super(marque,modele,annee);
        this._couleur = couleur;
    }

    get afficherDetails(){
        return 'une voiture de marque ' + this._marque + ' de modele ' + this._modele + ' de ' + this._annee + ' couleur ' + this._couleur;
    }

    get marque(){
        return this._marque;
    }
    get modele(){
        return this._modele;
    }
    get annee(){
        return this._annee;
    }
    get couleur(){
        return this._couleur;
    }

    set marque(marque){
        this._marque = marque;
    }
    set modele(modele){
        this._modele = modele;
    }
    set annee(annee){
        this._annee = annee;
    }
    set couleur(couleur){
        this._couleur = couleur;
    }
}

let voitureOne = new Voiture('mercedes','Benz Classe C','2010','bleu')
console.log(voitureOne.afficherDetails);