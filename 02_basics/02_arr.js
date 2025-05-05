const marvel =["thor","ironman","spiderman"]
const dc =["super","flash","batman"]
// marvel.push(dc)


// console.log(marvel);
// console.log(marvel[3][1]);


const arr1 =marvel.concat(dc)
// console.log(arr1);

const arr2 =[...marvel,...dc]
// console.log(arr2);

const arr3 =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr4=arr3.flat(Infinity)
// console.log(arr4);




// console.log(Array.isArray("hahs"))

// console.log(Array.from("hahs"))

// console.log(Array.from({name:"hahs"}))

// console.log(Array.from({name:"hahs"}))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

