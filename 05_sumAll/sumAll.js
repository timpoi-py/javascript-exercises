const sumAll = function(num1,num2) {

    let sum=0;

    if (!(Number.isInteger(num1) && Number.isInteger(num2))){
        return "ERROR"
    } else if (num1<num2 && num1>=0 && num2>=0) {
        for (i=num1;i<num2+1;i++) {
            sum += i;
        }
        return sum;
    } else if (num1>num2 && num1>=0 && num2>=0) {
        for (i=num2; i<num1+1; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR"
    }
};

console.log(sumAll(123,1));

// Do not edit below this line
module.exports = sumAll;
