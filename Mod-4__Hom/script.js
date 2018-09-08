'use strict';
// цена продуктов
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};
const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
};

// конструктор
function Cashhier(name, productsDatabase, totalPrice = 0, customerMoney = 0, changeAmount = 0) {
    this.name = name;
    this.productsDatabase = productsDatabase;
    this.totalPrice = totalPrice;
    this.customerMoney = customerMoney;
    this.changeAmount = changeAmount;

    this.greet = function () {
        console.log(`Здравствуйте, вас обслуживает ${this.name}`);
    }
    this.countTotalPrice = function(bill) {
        for (let key in bill) {
            this.totalPrice += bill[key] * this.productsDatabase[key]
        }
        return this.totalPrice;
    }
    this.getCustomerMoney = function (value) {
        this.customerMoney = value;
        return value;
    }
    this.countChange = function () {
        this.changeAmount = this.customerMoney - this.totalPrice;
        return this.changeAmount;
    }
    this.checkCustomerMoney = function () {
        if (customerMoney >= totalPrice) {
            return this.changeAmount;
        }
        else {
            return null;
        }
    }
    this.onSuccess = function () {
        if (this.changeAmount > 0) {
            console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
        }
        else if (this.changeAmount === 0) {
            console.log(`Спасибо за покупку`);
        }
    }
    this.onError = function () {
        console.log('Очень жаль, вам не хватает денег на покупки');
    }
    this.ChechCalculationMoney = function () {

        if (this.changeAmount >= 0) {
            this.onSuccess();
        }
        else {
            this.onError();
        }
    }
    this.reset = function () {
        this.totalPrice = 0;
        this.changeAmount = 0;
        this.customerMoney = 0;
    }
}

const igor = new Cashhier('Игорь', products);
igor.greet();
console.log(`Сума покупки: ${igor.countTotalPrice(order)}`); // Сума покупки
console.log(`Заплачено денег: ${igor.getCustomerMoney(300)}`); // заплатив покупець
console.log(`Ваша сдача: ${igor.countChange()}`); // здача
igor.checkCustomerMoney(); // перевырка наявносты грошей у поупця
igor.ChechCalculationMoney();
igor.reset();
console.log(`after reset() :`);
console.log(igor.totalPrice);
console.log(igor.customerMoney);
console.log(igor.changeAmount);

