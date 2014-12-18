var Car = function(loc){
	var obj = {loc: loc};
	extend(obj, Car.methods);

	return obj;
};

var Car.methods = {
	move : function(){
		this.loc++;
	}
};