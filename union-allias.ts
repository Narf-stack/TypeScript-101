// Use of union type in the parameter definition. Can be different type at the same time

// type Alias, help to clean code for type definition
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor // literal type when given , 'as-number'
    ){
    let result ; 
    if (typeof input1 ==='number' && typeof input2 ==='number'|| resultConversion === 'as-number') {
        result = +input1 + +input2; // "+" before to convert into number, equal to parse()
    } else {
        result = input1.toString() + input2.toString()
    }
    
    return result;
}

const combinedAges = combine(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26','as-number');
console.log(combinedStringAges);

const combinedNames = combine('A','B','as-text');
console.log(combinedNames);
