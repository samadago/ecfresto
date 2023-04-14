
// 1. Modele de données : strucutre
let plats = {
    "titre": "",
    "description": "",
    "prix": ""
};

let categorie = {
    "titre": "",
    "plats": [] //une liste des plats composants cette categorie
}


let carte = {
    "titre": "La Carte",
    "categories": [] // tableau des categories composant la carte
};

// Fonctions pour manipuler les modeles de données

let afficherPlat = function (plat) {
    resultat = "<div>" +
        "<h4>" + plat.titre + "</h4>" +
        "<p>" + plat.description + "</p>" +
        "<p> Prix " + plat.prix + " EUROS </p>" +
        "</div>";
    return resultat;
}


let afficherCategorie = function (categorie) {

    let categorieHtml = "";

    let plats = categorie.plats;
    for (i = 0; i < plats.length; i++) {
        let platHtml = afficherPlat(plats[i]);
        categorieHtml = categorieHtml + platHtml;
    }

    let divCat = document.createElement("div");
    divCat.classList.add("grandTitre");

    contenuCat =

        "<h2>" + categorie.titre + "</h2>" + categorieHtml
    "<hr>";
    

    divCat.innerHTML = contenuCat;

    return divCat;
}

/* exercise */





/*let afficherCarte = function (carte) {

    let carteHtml = "";
    for (i = 0; i < carte.categories.length; i++) {
        let categorieHtml = afficherCategorie(carte.categories[i]);
        carteHtml = carteHtml + categorieHtml;
    }

    let h1carte = document.createElement("h1");
    h1carte.classList.add("notrecarte");

    contenuh1 =
        "<h1>" + categorie.carte + "</h1" + categorieHtml >
        "<hr>";
    
 h1carte = carte;
    return h1carte;

}*/



// ========= Données ===========

let categoriePlatMaison = {
    "titre": "Pour continuer",
    "plats": [
        {
            "titre": "Burger d'Eugène ",
            "description": "un brioché,véritable cheddar,tomates,oignons,salade,patates douces,steak haché charolais ou steak végétarien,beyond meat",
            "prix": "15"
        },

        {
            "titre": "Purée de choux fleur et pomme de terre gratinée ",
            "description": "Purée de choux fleur et pomme de terre gratinée",
            "prix": "14"
        },

        {
            "titre": " Filet de boeuf",
            "description": "Filet de boeuf Filet de boeuf(200g) sauce truffe ou gorgonzola,purée maison",
            "prix": "17"
        },
        {
            "titre": "Chicken crispy quesadillas ",
            "description": "Galette de blé,cheddar,poulet croustillant,avocat,salade et patates douces",
            "prix": "15"
        },
        {
            "titre": " Indian Bowl",
            "description": "Riz basmati,poulet crispy et sauce curry",
            "prix": "15"
        },

    ]
}

let categoriePlatSalade = {

    "titre": "Nos Belles salades",
    "plats": [
        {
            "titre": "Fresh Salade",
            "description": "Courgette, melon et pomme",
            "prix": "9.50"
        },

        {
            "titre": "César Salade",
            "description": "Salade,tomates cerises,poulet crispy,copeaux de parmaesan,croutons et sauce césar",
            "prix": "9.50"
        },

        {
            "titre": "Zoodles épices",
            "description": "Mozzarella courgette des légumes et grenades",
            "prix": "9 EUROS"
        }

    ]

}


let carteMidi = {
    "titre": "Carte midi",
    "categories": [categoriePlatMaison, categoriePlatS,] // tableau des categories composant la carte
};

//document.getElementById('carte_id').innerText = carte['titre'];

//affichage du categorie PlatMaison sur la page HTML
let categoriePlatMaisonHtml = afficherCategorie(categoriePlatMaison);
//document.getElementById("categories").appendChild(categoriePlatMaisonHtml);

//affichage du categorie PlatSalade sur la page HTML
let categoriePlatSaladeHtml = afficherCategorie(categoriePlatSalade);
//document.getElementById("categories").appendChild(categoriePlatSaladeHtml);

//affichage carteMidi sur la page HTML
//let carteMidiHtml = afficherCarte(carteMidi);

//affichage du categorieEntres sur la page HTML
let categorieEntresHTML=afficherCategorie(categorieEntresHTML);
document.getElementById("categorie").appendChild(categorieEntresHtml);




let divExo1 = document.getElementById('exo1');


let divContenuExo1= document.createElement('div');
divContenuExo1.setAttribute('id','contenu_exo1');

divExo1.appendChild(divContenuExo1);
divContenuExo1.classList.add("maclasse");
let p= document.createElement('p');
p.style.backgroundColor= "blue";
divContenuExo1.appendChild(p);
p.innerText= 'Ma jolietexte';

function direBonjour(){


    console.log("Bonjour!");
}


const FIRST_NAME = 'Julien';
function getName() {
    
       return FIRST_NAME;
       console.log(getName()); 

}

function cube(height, width, depth){

    return height * width * depth
}




//affichage du categorie Boisson sur la page HTML

/*

//creation des platsalade

}

// creation de categories 
let categorieplatSalade = {
    "titre": "Nos Belles Salades",
    "plats": []
}
categorieSalade.plats.push(platFreshSalade);
categorieSalade.plats.push(platCesar);
categorieSalade.plats.push(zoodlesEpices)

let categoriePizza = {
    "titre": "Nos Pizzas",
    "plats": [
        {
            "titre": "La Marguerite",
            "description": "Tomate san Marzano,fior dilatte,roquette et basilic",
            "prix": 14
        },
        {
            "titre": "La Reine",
            "description": "Tomate san Marzano,fior dilatte,champignons,jambon blanc",
            "prix": 13
        }
    ]
}

// ajout des categories sur la carte
let categories = []; // tableau des plat

categories.push(categorieSalade);
categories.push(categoriePizza);

carte.categories = categories;



//let afficherCategorie   
//let afficherCarte


document.getElementById("plats").innerHTML = afficherPlat(platCesar);




CARTE:




    Categorie1:
        plat1:
            titre: "d"
            description: ""
            prix: ""
        plat2:
            titre: "d"
            description: ""
            prix: ""
        plat3
   Categorie2:
        plat1,
        plat2    



let dessert4 = {
    "titre": "",
    "description": "",
    "prix": ""
};
//creation de categorie dessert
let categorie4 = {
    "titre": " dessert",

    "dessert": [
        {
            "titre": "Taramisu ou nutella",
            "description": "Taramisu ou nutella",
            "prix": "5 euros"
        },
        {
            "titre": "Banana bread maison ",
            "description": "Banana frais et kiwi",
            "prix": "4.50 euros"
        },

        {
            "titre": "Gateau maison au chocolat",
            "description": "Gateau maison au chocolat",
            "prix": "5 euros"
        },
        {
            "titre": "Gauffres à la creme au beurre",
            "description": "Gauffres à la creme au beurre",
            "prix": "5 euros"
        },


    ]
}

 //creation de categories 
le categoriesEntres={
"titre": "pour commencer ou partage ",


"Entres":[

    
        {
            "titre": "Avocat toast",
            "description": "Houmous de betterave,chèvre frais & roquette.Supplements Saumon",
            "prix": "10 euros"
        },
        {
            "titre": "Aubergines stracciatella,houmous de betterave, tomates, grenades & basilic",
            "description": "Aubergines stracciatella,houmous de betterave, tomates, grenades & basilic",
            "prix": "9.50 euros"
        },

        {
            "titre": "Cheddar,mozarella,chèvre et sauce tomate maison",
            "description": "Cheddar,mozarella,chèvre et sauce tomate maison",
            "prix": "10.5 euros"
        },
        {
            "titre": "Assiette de jambon deParme ou Assiette Mortadelle à la Truffe",
            "description": "Assiette de jambon deParme ou Assiette Mortadelle à la Truffe",
            "prix": "10.5 euros"
        },


    ]
}


categorieentres.Entres.push(Avocattoast);
categorieentres.Entres.push(Auberginesstracciatellahoumous de betteravetomatesgrenadesbasilic);
categorieentres.Entres.push(Cheddarmozarellachevreetsaucetomatemaison);
categorieentres.Entres.push(AssiettedejambondeParmeouAssietteMortadellealaTruffe);


//ajout des categories sur la carte
let categoriesEntres=[];// tableau des entres

categories.push(categoriesEntres);

carte.categories = categories;

document.getElementById('carte_id').innerText = carte['titre'];

let afficherEntres = function (Entre) {
    resultat = "<div>" +
        "<h4>" + Entre.titre + "</h4>" +
        "<p>" + Entres.description + "</p>" +
        "<p> Prix " + Entre.prix + " EUROS </p>" +
        "</div>";
    return resultat;

}

//let afficherCategorie   
//let afficherCarte


document.getElementById("entre").innerHTML = afficherentes(Entre);





// creation de categories 
let categoriedessert = {
    "titre": "Pour Terminer",
    "dessert": []
}
categoriedessert.dessert.push(Taramisuounutella);
categoriedessert.dessert.push(Bananabreadmaison);
categoriedessert.dessert.push(Gateaumaisonauchocolatglutenfree);
categoriedessert.dessert.push(Gauffresalacremeaubeurres);

// ajout des categories sur la carte
let categoriesdessert = []; // tableau des dessert 

categories.push(categoriedessert);


carte.categories = categories;

document.getElementById('carte_id').innerText = carte['titre'];

let afficherdessert = function (izinaPlat) {
    resultat = "<div>" +
        "<h4>" + izinaPlat.titre + "</h4>" +
        "<p>" + izinaPlat.description + "</p>" +
        "<p> Prix " + izinaPlat.prix + " EUROS </p>" +
        "</div>";
    return resultat;

}

//let afficherCategorie   
//let afficherCarte


document.getElementById("dessert").innerHTML = afficherPlat(dessert);




let boissons = {
    "titre": "",
    "description": "",
    "prix": "",

};

//creations de categorie boissons
let categorie5 = {
    "titre": " Les boissons",

    "boissons": [
        {
            "titre": "coca cola zero",
            "description": "coca cola zero",
            "prix": "5 euros"
        },

        {
            "titre": "Orange ou pamplemousse",
            "description": "orange ou pamplemousse",
            "prix": "6euros"
        },

        {
            "titre": "vittel",
            "description": "vittel",
            "prix": "3.50 euros"
        },
        {
            "titre": "la gègène sans alcool",
            "description": "la gègène sans alcool",
            "prix": "5 euros"
        },
        {
            "titre": "Kir 14.5cl",
            "description": "Kir 14.5 cl",
            "prix": "8 euros"
        },
        {
            "titre": "Mojito",
            "description": "Rhum,menthe,citron vert,cassannade",
            "prix": "8 euros"
        },
        {
            "titre": "Margarita",
            "description": "Cointreau,citron vert,téquila",
            "prix": "8 euros"
        }


    ]



}
// creation de categories 
let categorieBoissons = {
    "titre": "Boissons",
    "Boissons": []
}
categorieBoissons.Boissons.push(CocacolaZero);
categorieBoissons.Boissons.push(Orangeoupamplemousse);
categorieBoissons.Boissons.push(Vittel);
categorieBoissons.Boissons.push(LaGègènesansalcool);
categorieBoissons.Boissons.push(Kir);
categorieBoissons.Boissons.push(Mojito);
categorieBoissons.Boissons.push(Margarita);



// ajout des categories sur la carte
let categoriesBoissons = []; // tableau des Boissons

categories.push(categorieBoissons);


carte.categories = categories;

document.getElementById('carte_id').innerText = carte['titre'];

let afficherBoissons = function (Boissons) {
    resultat = "<div>" +
        "<h4>" + Boissons.titre + "</h4>" +
        "<p>" + Boissons.description + "</p>" +
        "<p> Prix " + Boissons.prix + " EUROS </p>" +
        "</div>";
    return resultat;

}
s
//let afficherCategorie   
//let afficherCarte


document.getElementById("Boisssons").innerHTML = afficherBoissons(Boissons);

let vins = {
    "titre": "",
    "description": "",
    "prix": ""
};

//creation de  categories vins 
let categorie6 = {
    "titre": " vins",

    "vins": [
        {
            "titre": "Bordeaux Chateau Beyran AOC",
            "description": "Bordeaux chateau beyran AOC",
            "prix": "8 euros"
        },

        {
            "titre": "Minutu prestige rosé",
            "description": "Minutu prestige rosé",
            "prix": "6 euros"
        },
        {
            "titre": "Cotes de Gascogne Millet IPG",
            "description": "Cotes de Gascogne Millet IPG",
            "prix": "7.50 euros"
        },
        {
            "titre": "Saint Amour AOP Lafont",
            "description": "Saint Amour AOP Lafont",
            "prix": "7.50euros"
        },
        {
            "titre": "Margarita",
            "description": "Margarita",
            "prix": "8 euros"
        }
    ]
}

// creation de categories 
let categorieVins = {
    "titre": "Vins",
    "Vins": []
}
categorieVins.Vins.push(BordeauxChateauBeyranAOC);
categorieVins.Vins.push(MinutuPrestigerose);
categorieVins.Vins.push(CotesdeGascogneMilletIGP);
categorieVins.Vins.push(SaintAmourAOPLafont);
categorieVins.Vins.push(Margarita);

// ajout des categories sur la carte
let categoriesVins = []; // tableau des Vins

categories.push(categorieSalade);


carte.categories = categories;

document.getElementById('carte_id').innerText = carte['titre'];

let affichervins = function (plat) {
    resultat = "<div>" +
        "<h4>" + Vins.titre + "</h4>" +
        "<p>" + Vins.description + "</p>" +
        "<p> Prix " + Vins.prix + " EUROS </p>" +
        "</div>";
    return resultat;

}

//let afficherCategorie   
//let afficherCarte


document.getElementById("Vins").innerHTML = afficherPlat(Vins);


let cafeterie7 = {
    "titre": "",
    "description": "",
    "prix": ""
};

//creation de categorie cafetarie
let categorie7 = {
    "titre": " cafeterie",

    "cafeterie": [

        {
            "titre": "cappuccino",
            "description": "cappuccino",
            "prix": " 5.50euros"
        },


        {
            "titre": "Chocolat Chaud",
            "description": "Chocolat chaud",
            "prix": " 4.50euros"
        },

        {
            "titre": "Thé biologique comptoil richard",
            "description": "Thé biologique Comptoil richard",
            "prix": "3 euros"
        },

        {
            "titre": "Décaféine",
            "description": "Décaféine",
            "prix": " 2.50euros"
        },


    ]

}

// creation de categories 
let categoriecafeterie = {
    "titre": "cafeterie",
    "cafeterie": []
}
categorieCafeterie.cafeterie.push(Cappuccino);
categorieCafeterie.cafeterie.push(ChocolatChaud);
categorieCafeterie.cafeterie.push(ThébiologiqueComptoirRichard);
categorieCafeterie.cafeterie.push(Décaféiné);


// ajout des categories sur la carte
let categoriesCafeterie = []; // tableau Cafeterie

categoriesCafeteri.push(categorieCafeterie);


carte.categories = categories;

document.getElementById('carte_id').innerText = carte['titre'];

let afficherCafeterie = function (cafetarie) {
    resultat = "<div>" +
        "<h4>" + Cafeterie7.titre + "</h4>" +
        "<p>" + cafeterie7.description + "</p>" +
        "<p> Prix " + categorie7.prix + " EUROS </p>" +
        "</div>";
    return resultat;

}

//let afficherCategorie   
//let afficherCarte


document.getElementById("cafeterie").innerHTML = afficherPlat(Cafeterie);

*/
