(14-03-2026)
//Objects

//Symbols

const mySymbol = Symbol("Key1")
console.log(typeof(mySymbol))
//Using Symbol as a key in Objects
const newSymbol= {
 mySymbol:"Key2",//Method 1 but incorrect even though we get correct output
 [mySymbol]:"key1"//Method 2 and correct mrthod to use symbol as a key in objects , ye run nai ho ra so comment kar diya isko 
}
console.log(newSymbol.mySymbol)//Incorrect method to print as it will consider it as a string even though o/p is correct 
console.log(newSymbol[mySymbol])//Correct method to print and it considers this as a Symbol not string

//Updating values in Objects 
// JsUser.class="college"
// console.log(JsUser.class)


// Object.freeze(JsUser)//isko lagage ke baad changes made will not be updated 
// JsUser.name=12
console.log(JsUser.name)

//Functions in Objects
JsUser.Greeting=function(){
  console.log("Hello User")
}


console.log(JsUser.Greeting())//real o/p aayega jo function kaam karega vo
console.log(JsUser.Greeting) //"Function" o/p aayega 
  JsUser.GreetingTwo= function(){
    console.log(`Hello, ${this.name}`) 
  }
  
  console.log(JsUser.GreetingTwo)//firse galat tareeka ye neeche wala dekho sahi wala 
console.log(JsUser.GreetingTwo())	

(15-3-2026)
//Combining Objects
const obj1 = { 1:"ad" , 2: "ab" , 3: "cd"}
const obj2 = {3: "a" ,4:"r" , 5:"s"}
console.log(obj1,obj2) //Galat Method 
const obj3 = {obj1,obj2}//ye bhi galat method is se obj ke andar obj ban jaayega 
console.log(obj3)
const obbj3=Object.assign({}, obj1, obj2) ///output Obj1:{values},obj2:{values} karke aayega 
const objj3  = {...obj1,...obj2}
console.log(objj3)//Best Method kyuki o/p mai sirf{} in brackets ke andar combined values aayengi 




//Elements of Array as an Object 
users=[ {name:"Harshal",
id:1}, {name:"Me",
  id:2
}
 ]
console.log(users[1].id)
//Accessing Key,Values and Enteries 


//Deconstruction of Objects
const Obj={
  name:"obj1",
  topic:"Deconstruction of objects",
  date:"15-03-2026"
}
console.log(Obj.topic)//iske alawa ek or method 
const{date}= Obj
console.log(date)




(17-03-2026)

//Functions in Js
console.log("Functions in Js")
function my_function(){
  console.log("This is my first function ")
}
my_function()
//Function without return type 
function adda(no1,no2){
console.log("Result:",no1+no2)
}
adda(4,5)

adda(3,"6")//String value de diya to dusre ko bhi string consider kar liya js ne to galat o/p diya

//Storing outoput in a variable 
function addition(no1,no2){
console.log(no1+no2)
}
const result = addition(4,7)
console.log("Result 1:",result)//yaha result aa raha but variable mai nahi save ho raha kyuki
//return type nahi hai 

//function with return type
function add(no1,no2){
let sum= no1+no2
return sum
}
const resultt = add(7,5)
console.log("Result 2:",resultt)


//function with return type short form 
function add(no1,no2){ //function declare
return no1+no2//function return 
}
const Result = add(2,5) //function call 
console.log("Result 3:",Result) //output 

function login(user){
  return `${user} just logged in`
}
console.log(login("Harshal"))
//Ek hota hai function with return t ype or ek hota hai function without retrun type
//with return t ype 
function sub(one,two){
return one-two
}
console.log(sub(4,2))

//without return type 
function sub(one,two){
console.log(one-two)
}
sub(4,2)

(18-03-26)


//Functions Part-2 


function calculate(num1,num2){
  return num1+num2
  
}
console.log(calculate(7,3))

function sum(x,y){
  return x+y 
}
console.log(sum(2,3))

//ya to mai const mai functn call store karke fir console lagake fucntion call karu ya mai directly
//fucntion call kar du (with console), doesn't matter.

function handleobject(anyobject){//anyobject likhan xaroori nahi koi bhi naam de sakte 
  return anyobject
}
console.log(handleobject({
  name:"blah blah",
  price:"idk"
}
))
//is upar wale mai ya to directly mai oject bana du parameters ke andar ya pehle upar object
//banau or fir vo object name as a parameter pass kar du calling ke time 
getarray=[410,52,61]
function arrayy(getarray){//getarray likhna zaroori nai koi bu naam de sakte
  return getarray[2]
}
console.log(arrayy([3,4,5])) // array indexing 0 se initialized hai 
//Ye upar wale mai ya to directly mai array bana du parameters ke andar ya pehle upar array
//banau or fir vo array name as a parameter pass kar du calling ke time 



(20-03-2026)

//Scope in Js
if(true){
let x = 10
const y = 99
var z  = 100
}
// yaha pe variable as global use ho raha hai
// console.log(x)
// console.log(y)
console.log(z)// yaha a or b jaisa issue nahi aata yaha pe c ka local se hi value le leta hai bhale 
// c variable ko globally let var ya const lagake kuch bhi declare kare vo lega local value hi 
  

//Scope Level and Mini hoisting

function pehla(){
  const name = "me"
  function dusra(){
    const subject="js"
    console.log(name) // yaha child function parent function ki vaue access kar sakta hai 
  }
 // console.log(subject) // ye wala islye nahi hoga kyuki parent child andar wale function ko values
//access nahi kar sakta 
  dusra()
}
pehla()

if(true){
  const truly= "true hai"
  if(sahi="true hai"){
    const falsy= " par true nahi hai"
    console.log(truly+falsy)
    
    }
  //console.log ame above reason ie parent cannot access child value
}
//Two methods to declare function 
function naam(name){
  return name
}
console.log(naam("Harshal"))

const naaam= function(name){
  return name
}
console.log(naaam("Sita"))	

(30-03-2026)
//This and Arrow Function 
console.log("30-03-2026")
const details = {
  name:"Harshal",
  title:123,
  welcomeMessage:function(){
    console.log(`${this.name}, welcome to website`);
    console.log(this)
  }
}
console.log(details.name)
details.welcomeMessage()
details.name = "Hiya"
console.log(details.name) 
details.welcomeMessage()
console.log(this)//Engine jo js ko execue karta tha vo browser ke andar hi paya jaata tha 
//Browser ke andar jo global object hai vo windows obbject but yaha vo as an empty obj hai 
function me(){
  console.log("Me function is Harshal")
}
me()
(31-03-2026)
let a=6
let b=5
if(a==b){
  console.log("A is equal to B ")
}
else{
  console.log("They are not equal")
}
if(2==="2"){
  console.log("Data type is similar")
}
else{
  console.log("Data type is not similar")
}	

//Truthy and Falsy values

const userEmail = []
if  (userEmail.length===0){
  console.log("Arrayy is Empty")
}

const emptyObj= {}
if(Object.keys(emptyObj).length===0){
  // if(emptyObj){
  console.log("Object is Empty")
}
else{
  console.log("No empty")
}
// Nullish Coalescing Operator ?? ha yahi operator hai 
console.log("val1")
let val1
val1 = null ?? undefined
console.log(val1)

console.log("val2")
let val2
val2= undefined ?? null
console.log(val2)

console.log("val3")
let val3
val3 = 15 ?? undefined 
console.log(val3)

console.log("val4")
let val4
val4= undefined ?? 15
console.log(val4)

console.log("val5")
let val5
val5 = null ?? 12
console.log(val5)

console.log("val6")
let val6
val6 = 12 ?? null
console.log(val6)







  
  
  
  






