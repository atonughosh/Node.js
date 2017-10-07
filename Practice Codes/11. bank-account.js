//Account object
var account = {
	balance : 0
};


//Deposit function
function deposit(acc, amt) {
	acc.balance = acc.balance + amt;
}

//Withdraw function
function withdraw(acc, amt) {
	acc.balance = acc.balance - amt;
}

//Get balance function
function getBalance(acc) {
	return acc.balance;
}

console.log(getBalance(account));

deposit(account, 100);

withdraw(account, 50);

console.log(getBalance(account));
