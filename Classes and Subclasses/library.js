var Car = function(loc){
	this.loc = loc;
};
Car.prototype.move = function(){
		this.loc++;
};

var Van = function(loc){
	Car.call(this,loc); //Chama super classe
}
Van.prototype = Object.create(Car.prototype);
Van.constructor = Van;
Van.prototype.grab = function(){/*...*/};