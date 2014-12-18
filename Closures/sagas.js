function aHero (){
	heros = ["Atticus","Indiana","Bond","Blaine","Kane",
	"tarling","Balboa","Ripley","Bailey","Lawrence"];
	var x = Math.floor((Math.random() * 10));
	return heros[x];
}

function aFoil (){
	foils = ["Basilisco", "Centauro", "Chupa Cabra", 
	"Ciclope", "Cocatriz", "Cerbero", "Fenix", "Goblin", "Gorgona", "Grifo"];
	var x = Math.floor((Math.random() * 10));
	return foils[x];
}

function aDeed(){
	deeds = [" Matou "," Correu do "," Chorou para ",
	" Escondeu do "," Fingiu de morto para o ", " dancou para ", " gritou com o ",
	" brincou com ", " montou no ", " comeu o "];
	var x = Math.floor((Math.random() * 10));
	return deeds[x];
}

var sagas = [];
var hero = aHero();
var newSaga = function(){
	var foil = aFoil();
	sagas.push(function(){
		var deed = aDeed();
		console.log(hero+deed+foil);
	});
};
newSaga();
sagas[0]();
sagas[0]();
newSaga();
sagas[0]();
sagas[1]();
sagas[0]();