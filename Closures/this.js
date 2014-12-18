var fn =  function(one, two){
	console.log(this,one,two);
};

var r = {};
var g = {};
var b = {};
var y = {};

r.method = fn;

//r.method(g,b);				// R, G, B
//fn(g,b);						// <global>, G, B
//fn.call(r,g,b)				// R, G, B
//r.method.call(y,g,b);			// Y, G, B
//setTimeout(fn,1000);  		// <global, <undefined>, <undefined>
//setTimeout(r.method, 1000);	// <global, <undefined>, <undefined>
//setTimeout(function(){
///	r.method(g,b);				// R, G, B
//},1000);

new r.method(g,b);