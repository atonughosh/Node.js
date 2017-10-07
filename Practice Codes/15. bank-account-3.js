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

	for (i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) {
			matchedAccount = accounts[i];
		} else {
			console.log('Account not found!');
		}
	}

	/*accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});*/

	return matchedAccount;
}



//Deposit function
function deposit(acc, amt) {
	if (typeof amt === 'number'){
		acc.balance = acc.balance + amt;
	} else {
		console.log('Amount should be a number! Deposit rejected.')
	}
}

//Withdraw function
function withdraw(acc, amt) {
	if (typeof amt === 'number'){
		acc.balance = acc.balance - amt;
	} else {
		console.log('Amount should be a number! Withdrawl rejected.')	
	}
}

//Get balance function
function getBalance(acc) {
	return acc.balance;
}


function createBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}


var atonusAccount = createAccount ({
	username : 'Atonu',
	balance : 2000
});

var atonu = getAccount('Atonu');

//console.log(withdraw(atonusAccount, 100));
// console.log(deposit(atonusAccount, 100));

// console.log(getBalance(atonusAccount));

var getAtonuBalance = createBalanceGetter(atonu);
console.log(getAtonuBalance());
