//OBJECT
// const person: {
//     name: string;
//     age: number
// } = {

const person : {
            name: string;
            age: number;
            hobbies: string[];
            role: [number, string]
        } = {
    name :'test',
    age: 30,
    hobbies: ['Sports','Cooking'],
    role: [2,'author']          //<-- Tuple, fixed-length and design array 
}; 


// Use of enum
enum Role { ADMIN, READ_ONLY, AUTHOR} //<-- enum, apply number to a value
const person2 = {
    name :'test',
    age: 30,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN         
}; 


//Array of string
let favoriteActivities: string[];
favoriteActivities = ['Sports','Cooking']
//Array of many format
let favoriteActivitiesBis: any[];
favoriteActivitiesBis = ['Sports',1]


for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

console.log(person.name)