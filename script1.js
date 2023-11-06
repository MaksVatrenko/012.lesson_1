// Мережа фастфудів пропонує кілька видів гамбургерів:
//
//     маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).
// Гамбургер може бути з одним із декількох видів начинок:
//
//     сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).
// Можна додати добавки:
//
//     посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
//
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
//
// Приклад роботи коду:
//
// // маленький гамбургер з начинкою з сиру
//     var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//
// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
//
// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());
//
// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());
//
// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);
//
// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

const Hamburger = {
    SIZE_SMALL: {price: 50, calories: 20},
    SIZE_LARGE: {price: 100, calories: 40},
    STUFFING_CHEESE: {price: 10, calories: 20},
    STUFFING_SALAD: {price: 20, calories: 5},
    STUFFING_POTATO: {price: 15, calories: 10},
    TOPPING_SPICE: {price: 15, calories: 0},
    TOPPING_MAYO: {price: 20, calories: 5},
};

class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        const basePrice = Hamburger[this.size].price + Hamburger[this.stuffing].price;
        const toppingsPrice = this.toppings.reduce((total, topping) => total + Hamburger[topping].price, 0);
        return basePrice + toppingsPrice;
    }

    calculateCalories() {
        const baseCalories = Hamburger[this.size].calories + Hamburger[this.stuffing].calories;
        const toppingsCalories = this.toppings.reduce((total, topping) => total + Hamburger[topping].calories, 0);
        return baseCalories + toppingsCalories;
    }
}

var cheesburger = new Burger('SIZE_SMALL', 'STUFFING_CHEESE');
var saladburger = new Burger('SIZE_LARGE', 'STUFFING_SALAD');

cheesburger.addTopping('TOPPING_MAYO');
saladburger.addTopping('TOPPING_SPICE');

console.log('ціна чізбургера', cheesburger.calculatePrice());
console.log('калорійність чізбургера', cheesburger.calculateCalories());

console.log('ціна салатбургера: ', saladburger.calculatePrice());
console.log('калорійність салатбургера: ', saladburger.calculateCalories());

cheesburger.addTopping('TOPPING_MAYO');
cheesburger.addTopping('TOPPING_MAYO');
cheesburger.addTopping('TOPPING_MAYO');
cheesburger.addTopping('TOPPING_MAYO');
cheesburger.addTopping('TOPPING_MAYO');
cheesburger.addTopping('TOPPING_MAYO');

console.log('ціна чізбургера з майонезом (багато майонеза)', cheesburger.calculatePrice());
console.log('калорійність чізбургера (багато майонеза)', cheesburger.calculateCalories());
