const ftoc = function(far) {

	// c = (f-32)* 5/9

	result = (far - 32) * 5/9;
	result = Math.round(result * 10) /10;
	
	return result;

};

const ctof = function(cel) {

	// f = c * 9/5 + 32

	result = cel * 9/5 + 32;
	result = Math.round(result * 10)/10;

	return result;

};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
