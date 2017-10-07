//say Hello username if a name is passed else say Hello world
function greetUser (name) {
	if (typeof name === 'undefined') {
		console.log('Hello World !');
	} else {
		console.log('Hello ' + name + ' !');
	}
}

greetUser('Atonu');