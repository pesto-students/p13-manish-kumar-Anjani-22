class Vechicle
{
    constructor(make, model, drive, color)
    {
        this.make=make;
        this.model=model;
        this.drive=drive;
        this.color=color;
    }
    drive()
    {
        console.log("Driving {$make} {$model}");
    }
}

class Car extends Vechicle
{
    constructor()
    {
        this.numSeeats=numSeeats;
    }
}

class RideShareCar extends Car
{
    constructor()
    {
        this.isAvailable=this.isAvailable;
    }
}

//Polymorphism

class Shape
{
    calculateArea(){};
}

class Rectangle extends Shape{
    calculateArea(width, hieght)
    {
        return this.hieght * this.width;
    };
}
class Traingle extends Shape{
    calculateArea(base, hieght)
    {
        return this.hieght * this.base/2;
    };
}
class Circle extends Shape{
    PI=3.14;
    calculateArea(radius)
    {
        return PI*radius*radius;
    };
}

//Abstraction & encapsulation


class BankAccount 
{
   
    #accountHolderName;
    #accountNumber;
    #balance=0;
    
    constructor(accountHolderName,accountNumber, balance)
    {
        this.#accountHolderName= accountHolderName;
        this.#accountNumber=accountNumber;
        this.#balance=balance;
    }
}

class checkingAccount extends BankAccount
{
    constructor(accountHolderName,accountNumber, balance)
    {
        super(accountHolderName,accountNumber, balance);
    }
    deposit(amount, balance)
    {
        this.balance=balance+amount;
    }
    withdraw(amount, balance)
    {
        this.balance=balance-amount;
    }

    getbalance()
    {
        return this.balance;
    }
}
class savingsAccount extends BankAccount
{
    constructor(accountHolderName,accountNumber, balance)
    {
        super(accountHolderName,accountNumber, balance);
    }
    
    deposit(amount)
    {
        this.balance=this.balance+amount;
    }
    withdraw(amount, balance)
    {
        this.balance=this.balance-amount;
    }
    getbalance()
    {
        return this.balance;
    }
}

const checkObj=new checkingAccount("A", "00912845", 1000);
const savingObj=new savingsAccount("B", "80912845", 1050);

console.log(checkObj.deposit(1000, 0));
console.log(checkObj.withdraw(100, 0));
console.log(checkObj.getbalance());

console.log(savingObj.deposit(1000, 0));
console.log(savingObj.withdraw(100, 0));
console.log(savingObj.getbalance());