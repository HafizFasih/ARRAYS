// ARRAYS IN TYPESCRIPT
// PROPERTY: 1
// DECLARATION OF VARIABLES TO STORE AN ARRAY IN DIFFERENT METHODS.
let number1: number [] = [1,2,3,4,5];
let number2: Array<number> = [2,4,6,8,0];
let str1: string [] = ["name1","name2","name3","name4","name5"];
let str2: Array<string> = ["name1","name2","name3","name4","name5"];
let combinedData: Array<string|number> = ["name1",1,"name2",2,"name3",3,"name4",4,"name5",5]; // union data type

// PROPERTY: 2
// ACCESSING ELEMENTS
// variablename[index]       and the output would be the 'element' of such index.
let answer1:number = number1[3];
console.log(answer1);
let answer2:string = str2[4];
console.log(answer2);


// PROPERTY: 3
// MODIFYING ELEMENTS
// variablename[index] = new element.
number2[3] = 1;
console.log(number2);

str2[0] = "name5";
console.log(str2);

// PROPERTY: 4 (a)
// ADDING AND REMOVING ELEMENTS
// ADDING ELEMENTS
// WHEN YOU HAVE TO ADD AN ELEMENT FROM THE TOP OF AN ARRAY (at 0 index)
str2.unshift("extra name");
console.log(str2);
// WHEN YOU HAVE TO ADD AN ELEMENT AT THE END OF AN ARRAY (at last index)
str1.push("last name");
console.log(str1);
// WHEN YOU HAVE TO ADD AN ELEMENT AT THE SPECIFIC INDEX OF AN ARRAY
console.log(str2);
str2.splice(2,0,"Name2");   // variablename.splice(index,number of elements wants to remove,new element)
console.log(str2);

// REMOVING ELEMENTS
// WHEN YOU HAVE TO REMOVE AN ELEMENT FROM THE TOP OF AN ARRAY.  (at 0 index)
console.log(number1);
number1.shift();
console.log(number1);
// WHEN YOU HAVE TO REMOVE AN ELEMENT FROM THE BOTTOM OF AN ARRAY. (at last index)
console.log(number2);
number2.pop();
console.log(number2);
// WHEN YOU HAVE TO REMOVE AN ELEMENT AT THE SPECIFIC INDEX
console.log(number1);
number1.splice(1,2);  // variablename.splice(index,number of elements wants to remove)
console.log(number1);

// PROPERTY 4 (b)
// SEARCHING AN ELEMENT
console.log(str1);
let indexOfString:number = str1.indexOf("name2"); // variablename.indexOf(element);
str1[indexOfString] = "Name5";
console.log(str1);

console.log(number2);
let indexOfNumber:number = number2.indexOf(6);
// console.log(indexOfNumber)
number2[indexOfNumber] = 5;
console.log(number2);
