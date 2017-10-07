//creating an array for storing grades
var grades = [85, 90, 80];

//variable to store sum of grades in array
var totalGrade = 0;


grades.unshift(98);
grades.push(88);

//adding all the grades in array and storing in totalGrade
grades.forEach (function (grade) {
	totalGrade+=grade;
});

console.log(totalGrade);

//calculating and printing the average of the grades
console.log('The average grade is : ' + totalGrade / grades.length);
