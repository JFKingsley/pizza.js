var PizzaAPI = function (type) {
    if (type !== "dominos" && type !== "pizzaHut" && type !== "justEat") {
        throw new Error('Pizza Delivery type must be valid');
    }
    this.type = type;
};

PizzaAPI.prototype.getDrinks = function () {

};

PizzaAPI.prototype.getSides = function () {

};

PizzaAPI.prototype.getPizzas = function () {

};

PizzaAPI.prototype.getToppings = function () {

};

module.exports = PizzaAPI;