var Car = function(loc){
	//A linha de baixo é chamado automaticamente pelo construtor
	//this = Object.create(Car.prototype);
	this.loc = loc;
	//Essa tb
	//return this;
};

Car.prototype.move = function(){
		this.loc++;
};