let num = 266219;
let multiNumbers = num.toString().split("");
let multiplication = multiNumbers.reduce(function(sum, current) {
    return sum * +current;
}, 1)
let exponentiation = multiplication ** 3;
let twoNum = +exponentiation.toString().substr(0, 2);

console.log(multiNumbers);
console.log(multiplication);
console.log(exponentiation);
console.log(twoNum);