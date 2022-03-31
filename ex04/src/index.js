function main(){
    var myDecimal = 2.4;
    var myDecimalE = 254e-5;
    return {
        myDecimal,
        myDecimalE
    };
}

console.log(main());
module.exports = main;