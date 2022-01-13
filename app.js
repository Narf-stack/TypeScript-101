function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var n1 = 5;
var n2 = 2;
var printResult = true;
var resultPhrase = 'Result is:';
add(n1, n2, printResult, resultPhrase);
