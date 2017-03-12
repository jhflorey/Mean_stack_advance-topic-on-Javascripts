// we now will work with some more advanced topics commonly used in JavaScript, getting these down will dramatically improve what you can do with JavaScript!

// it's a callback function!!!!

function myOriginalFunction(){
	console.log('hello');
}
// myOriginalFunction();

function invokeFunction(callback){
	var x = setInterval(function(){
		callback();
	}, 4000)
}

invokeFunction(myOriginalFunction);
invokeFunction(function(){console.log('world')});