let balance = 0;

let deposit = (amount) => {
    balance += amount;
    console.log(`Deposit ${amount} into account`);
};

let withdrawal = (amount) => {
    balance -= amount;
    console.log(`Withdrawal ${amount} from account`);
};

let checkBalance = () => {
    console.log(`The balance is ${balance}`);
};

checkBalance();
deposit(100);
checkBalance();
withdrawal(25);
checkBalance();


