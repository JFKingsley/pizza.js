var Order = function () {

};

Order.prototype.setBase = function (base) {
	if (base !== "thin" && type !== "normal" && type !== "stuffed") {
	    throw new Error('Base type must be valid');
	}
	this.base = base;
};

Order.prototype.getOrder = function () {
	var order = {
		base: this.base,
		toppings: this.toppings,
		sides: this.sides,
		drinks: this.drinks
	}
	return order;
} 

Order.prototype.getOrderStatus = function () {
	if(this.ordered == true) {
		//Return parsed XML from the order status
		return {};
	}else{
		return false;
	}
}

module.exports = Order;