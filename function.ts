function add(n1: number, n2:number) {
    return n1=n2
}

function printResult(num:number):void {
    console.log('Result:' + num)
}

function addAndHandle( n1:number, n2:number, callbackFunction: (num:number)=>void) {
    const result = n1 + n2;
    callbackFunction(result);
}

printResult(add(5,12))

// Function types are type that describe a function regarding the parameters, return value 
let combinedValues: (a:number, b:number) => number;

combinedValues = add;
console.log(combinedValues(8,8));

addAndHandle(10,20,(result)=>{
    console.log(result)
})