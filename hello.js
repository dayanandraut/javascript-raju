// variable declaration
// let, var, const

let number1 = 56;
let number2 = 60;
let result = number1 + number2;
console.log(result)

var name = "Gyani"
const city = "Rajbiraj"
console.log(name +" "+city)


// if statements
var per = 88
if(per<40){
  console.log("Fail")
}else if(per<60){
  console.log("Second")
} else if(per<80){
  console.log("First")
}else{
  console.log("Distinction")
}




// loops
// for loop ; while loop

for(let i = 1; i<=10; i++){
  if(i==5) break
  console.log(i)
}

let j =1
while(j<=10){
  j++
  console.log("Raju")
}
// functions
function sayHello(name){
  console.log("Namaste, "+name)
}

sayHello("Santosh")
sayHello("Teju")

let myfunction = function(name){
  console.log("Good Evening, "+name)
}

let jai = (name)=>console.log("Jaiho, "+name)

myfunction("Yogu")
jai("Daya")

// array
let A = [7,8,9,12,90]
console.log(A)
console.log(A[2])
for(let i=0;i<A.length;i++){
  console.log(A[i])
}

// advanced: class and object, arrow function, promise, async