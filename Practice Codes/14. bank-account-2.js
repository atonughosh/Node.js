//array to store accounts
var accounts = [];

var account = {
	balance : 0,
	username : undefined
};

//function to create account
function createAccount (account) {
	accounts.push(account);
	console.log('Account created!');
	return account;
}

//function to get account
function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}



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

var atonusAccount = createAccount ({
	username : 'Atonu',
	balance : 0
});


deposit(atonusAccount, 100);
console.log(getBalance(atonusAccount));

withdraw(atonusAccount, 50);
console.log(getBalance(atonusAccount));

var existingAccount = getAccount('Atonu');
console.log(getBalance(existingAccount));


var linasAccount = createAccount({
	username : 'Lina',
	balance : 0
});

console.log(accounts);

var linaAccount = getAccount('Lina');
console.log(linaAccount);
