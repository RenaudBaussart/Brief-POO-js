'use strict';
class Voiture{
    constructor(marque,modele,annee,couleur){
        this.marque = marque
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails(){
    console.log('une voiture de marque ' + this.marque + ' de modele ' + this.modele + ' de ' + this.annee + ' couleur ' + this.couleur);
    }
}   

let voitureOne = new Voiture('mercedes','Benz Classe C','2010','gris')
voitureOne.afficherDetails();