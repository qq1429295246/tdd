module.exports = function main(inputs) {
    // write your code here...
	var price;
	var realPrice;
	var distance = parseInt(inputs.distance);
	var parkTime = parseInt(inputs.parkTime);
	var flagNum;
	if(distance <= 2){
		realPrice = 6 + parkTime * 0.25;
	}
	if(distance > 2 && distance <= 8){
		realPrice = 6 + (distance-2) * 0.8 + parkTime * 0.25;
	}
	if(distance > 8){
		realPrice = 10.8 + (distance-8) * 1.2 + parkTime * 0.25;
	}
	flagNum = realPrice * 10 % 10;
	if(flagNum >=5){
		price = parseInt(realPrice) + 1;
	}else{
		price = parseInt(realPrice);
	}
    return price;
};
