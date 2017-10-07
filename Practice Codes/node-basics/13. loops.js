function countDownWhile (start, end) {
	while (start > end) {
		console.log('While : ' + start);
		start--;
	}
}


function countDownFor (start, end) {
	for (i = start; i>end; i-- ) {
		console.log('For : ' + i);
	}
}


countDownFor(10, 0);
countDownWhile(20,10);