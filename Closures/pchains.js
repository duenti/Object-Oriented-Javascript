var gold = {a:1};
//console.log(gold.a);	// 1

//var blue = extend({}, gold);
//blue.b = 2;
//console.log(blue.a);
//console.log(blue.b);

var rose = Object.create(gold);
rose.b = 2;
//console.log(rose.a);
//console.log(rose.z);

gold.z = 3;
//console.log(rose.z);

console.log(gold.toString());