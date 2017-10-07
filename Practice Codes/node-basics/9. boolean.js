//function to flip only boolean variable
function toggleBoolean (variable) {
	if (typeof variable === 'boolean') {
		return !variable;
	}
}


console.log(toggleBoolean(true));
