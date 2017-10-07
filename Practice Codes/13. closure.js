function createAdder (baseNumber) {
	return function (num) {
		return baseNumber + num;
	}
}


var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(20));
