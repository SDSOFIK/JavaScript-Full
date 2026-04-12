// what is a java secript ? and why used 
/* java secript is a Programming language of web এক কথায় Java secript web site ডাইনামিক ও ইন্টার‍্যাকটিভ করে তোলে 

java sceript মুল একটা ওয়েব সাইট কে জিবন্ত করে তুলে যেমন button click করেলে নতুন সাইট ওয়েব ওপেন হয়ে   data update date change animation এইগুলা কাজ করে থাকে */

// java secript setup and run 
/* java secript file name .js like main.js index.js অথাবা আমরা <secript></secript> tag লিখেতে পারি html file . javesecript links html file a body section a sebr ses a <secript src= " Js file addres"> </secript> java secript run kore output 3 vabe dakhe pari 1. web a giye inspect kore console a output dakhte pay and 2. node js install থাকতে হবে এবং Terminal a commde dibe (node file name  ) 
*/

// console.log("hello js")


// কেন HTML Code লেখের জন্য আমরা  document.write used kora hoy 
//dociment.write(Hello js)

// js কেন কিছু prit korar jnno console.log usd kori 
console.log(5+5);

//js code commend করার জন্য (single line commeand // এবং multi line commeand /* */ ) commeand হল কন লাইন যদি আমরা না দেখাতে চাই তাহলে commeant kore rakhi compile ke ingor kore boli thle commeint used kori 


//js code comment করার জন্য (single line comment // এবং multi line comment /* */ ) comment হল কন লাইন যদি আমরা না দেখাতে চাই তাহলে comment kore rakhi compile ke ingor kore boli thle commeint used kori 

// =========variable =========



/*  varible হল এমন বক্স যেখানে আমরা ডাটা জমা করে রাখে দেই যাতে করে পরে তা আমরা ব্যাবহার করতে পারি কন কিছু নামে এ veriable! js a veriable a 3 জিনিস দিয়ে তেরী করি ver let const  Exmple*/


//var হচ্ছে একটি keyword  যা veriable declar করে  name  হল ভারিবলে নামে "" এর ভিতর এ string date consol.log print 
var name1 = "sofik"
console.log(name1)

//let হচ্ছে একটি keyword  যা veriable declar করে  name  হল ভারিবলে নামে "" এর ভিতর এ string date consol.log print  let and var same কিন্ত কিছু বিসয় আছে যা হইলো var এর variable name same থাকলেও  erro day na tai pore akn let used kora hoy 
let name = "SDsofik"
console.log(name)

// let হচ্ছে একটি keyword  যা veriable declar করে age variable name r const হল যদি আমরা কন মান পরিবতন করতে না চাই তাহলে আমরা const uesd kori je পরে চেঞ্জ করা যায় না 


// varible লেখার কিছু নিয়েম আছে বা গুড কাজ  ও বলতে পারেন 
/* 

Variable নাম অবশ্যই letter, underscore (_) বা dollar ($) দিয়ে শুরু হতে হবে সংখ্যার দিয়ে শুরু করা যাবে না।
Variable নামের মধ্যে কোনো space (ফাঁকা জায়গা) থাকা যাবে না একাধিক শব্দ হলে একসাথে লিখতে হবে একাধিক শব্দ হলে প্রথম শব্দ ছোট, পরের শব্দ বড় অক্ষর দিয়ে শুরু হয় ।
Special character (যেমন @, #, %, & ইত্যাদি) ব্যবহার করা যাবে না শুধু (_) এবং ($) ব্যবহার করা যায়।
JavaScript এর reserved keyword (যেমন var, let, if, else) variable নাম হিসেবে ব্যবহার করা যাবে না
Variable name case-sensitive
বড় হাতের অক্ষর আর ছোট হাতের অক্ষর আলাদা হিসেবে গণ্য হয়।
Variable নাম এমন হওয়া উচিত যাতে বুঝা যায় এর মধ্যে কী data আছে
অর্থপূর্ণ নাম দেওয়া ভালো practice।

*/
const age = 25;
console.log(age)

//Primative Data Type হলো basic value এখানে কোনো object বা complex structure থাকে না। primative  মান আপনি পরিবতন করতে পারবেন না 
/*
js মোট ৭ টি Primative Date type ace \
1. N == number
2. S == String
3. B == boolean
4. U == undefined 
5. N == Null
6. S == symbol
7. B == bilnt
*/
// number যেকোন  number নেওয়ার জন্য দশমিক  ও হইতে পারে 
let num = 19
let num_1 =1.55
 // string  সব সময় (""  or '') এর মাঝে লিখতে হয় Example 
 let myName = "SD Sofik"

 //boolean data  সুধু সত্য মিথা জাছাই করে অন্ন কিছু হয় না যেমন 
  let _isLongIn = true
  let _isNotLongIn = false
  // undefiend  আমরা যদি কোনো  virable decler করি কিন্তু কোনো মান না দেই তাহলে তাকে undefiend বলে যেমন
  let x;

  //null  যদি কোনো মান আমরা দিতে না চাহি তাহলে null used kori 

  let y = null

  // symbol কোনো কিছু unick data used করতে চাইলে করি যেমন 
  let smy = Symbol("Hello Wold");
  console.log(smy); 
//bigInt হল  এমন একটা  int জা অনেক নাম্বার হয় 
const bigNum = 12345678901234567890n;


//Non-primitive = object type data মানে এখানে data গুলো memory-তে reference (address) হিসেবে store হয়। 
//exampe 


let name2 = 'sofik';
let year = 2026;
//Non-primitive = object type data মানে এখানে data গুলো memory-তে reference (address) হিসেবে store হয়। Non-primitive data type এর মধ্যে  object, array, function, date ইত্যাদি আছে 
//exampe 

//object  একটি object হল এমন একটা data type যা key value pair হিসেবে data store করে থাকে Example

//student হল object name  name, age, class হল key এবং "sofik", 25, "BSc in CSE" হল value

let Student ={
  name : "sofik",
  age : 25,
  class : "BSc in CSE"
}
//object এর value print করার জন্য Student.name and age or class আর যদি আমরা Full object Print করতে চাই তাহলে student dile hbe 
console.log(Student.name)
console.log(Student.age)
console.log(Student.class)
console.log(Student)


// Array হল এমন একটা data type যা একাধিক value কে একটি variable এর মধ্যে store করে থাকে Array এর মধ্যে value গুলো index (0, 1, 2) হিসেবে store হয় index 0 থেকে শুরু হয়। Example


// Array [] এর মধে লিখতে হয় এবং একটা পর , দিয়ে পরে value লিখেতে হয় আর print করার জন্য index number ধরে print kore hoy 
let food = ["Apple" , "Orange ", "Banana","etc"]

console.log(food[0]);



// সব Array Print করার জন্য Loop used করতে হয় ওইটা আমরা পরে দেখব

//Function হল এমন একটা block of code যা একটি নির্দিষ্ট কাজ সম্পাদন করে থাকে Function এর মধ্যে code লিখে আমরা পরে সেই code কে বার বার ব্যবহার করতে  Example
function person(){
  console.log("Hello function")
}
//function call করার জন্য functionname()  লিখতে হয় তাহলে function এর ভিতরে যা যা আছে তা print হবে
person()




//=========================Operators========================

//Operator হল এমন একটা symbol যা variable বা value এর উপর কিছু operation করে থাকে যেমন + - * / %  ইত্যাদি যেমন arithmetic operator, assignment operator, comparison operator, logical operator unary and ternary Operator ইত্যাদি আছে


//==================================arithmetic operator==================================
//Arithmetic operator হল এমন একটা operator যা দুইটা বা তার বেশি value এর উপর গাণিতিক operation করে থাকে যেমন + - * / % ইত্যাদি
let a = 10
let b = 5 
console.log(a+b) // যোগ
console.log(a-b) // বিয়োগ
console.log(a*b) // গুন
console.log(a/b) // ভাগ
console.log(a%b) // ভাগ শেষ


//================================= assignment Operator ===========================================

// Assignment Operator হল  ভেরিয়েবলে মান সংরক্ষণ করার জন্য ব্যবহৃত Symbole = , +=,  -= , *= , /=, %=
// =  হল কোনো verible মান নেওয়া  যেমন 
let Assignment = 5;
// +=,  -= , *= , /=, %= এই হল আগের যে ভেলু আছে  ওইটা সাথে ২য় টা ভেলু যোগ করা , বিয়োগ করা , গুন করা , ভাগ করা , ভাগশেষ  করা যেমন

Assignment += 5; 
console.log(Assignment);
Assignment -= 2; 
console.log(Assignment);
Assignment *= 3;    
console.log(Assignment);
Assignment /= 4;    
console.log(Assignment);
Assignment %= 3;    
console.log(Assignment);  

//============================== comparison Operator =========================================

//Comparison Operator হল এমন একটা operator যা দুইটা value এর মধ্যে তুলনা করে থাকে এবং ফলাফল হিসেবে true বা false return করে থাকে যেমন ==, ===, !=, !==, >, <, >=, <= ইত্যাদি
let cx = 10;
let cy = 5;  
//== হল দুইটা value সমান কিনা তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx == cy); 

//=== হল দুইটা value সমান এবং type সমান কিনা তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx === cy);
//!= হল দুইটা value সমান না কিনা তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx != cy);  
//!== হল দুইটা value সমান না এবং type সমান না কিনা তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx !== cy);
//> হল দুইটা value এর মধ্যে কোনটা বড় তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx > cy);
//< হল দুইটা value এর মধ্যে কোনটা ছোট তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx < cy);
//>= হল দুইটা value এর মধ্যে কোনটা বড় বা সমান তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx >= cy);  
//<= হল দুইটা value এর মধ্যে কোনটা ছোট বা সমান তা চেক করে যদি সতি হয় তাহলে true return করে না হলে false return করে
console.log(cx <= cy);
//============================== logical Operator =========================================


//Logical Operator হল এমন একটা operator যা দুইটা বা তার বেশি condition এর উপর logical operation করে থাকে এবং ফলাফল হিসেবে true বা false return করে থাকে যেমন &&, ||, !   
let ox = 10;
let oy = 5;

//&& হল দুইটা condition এর মধ্যে সব condition true হলে true return করে না হলে false return করে
console.log(ox > 5 && oy < 10);
//|| হল দুইটা condition এর মধ্যে কোন একটা condition true হলে true return করে না হলে false return করে
console.log(ox > 5 || oy < 3);
//! হল condition এর logical negation করে থাকে অর্থাৎ condition true হলে false return করে এবং condition false হলে true return করে
console.log(!(ox > 5));

//==================== unary and Ternary opetor =====================

// unary operator হল এমন এক operator যা শুধুমাত্র একটি মাত্র  operand উপের কাজ করে ++, --
// ++ হল কন value মান ১ ১ করে বারবে -- হল value মান ১ ১ করে কমবে  Exmaple 

let ux =10
ux++;

console.log(ux)
ux--
console.log(ux)

// Teranry operator হল এমন এক operator যা এক লাইন condition চেক করে এবং সত্যি মিথা retun  করে Example 

let tx =5;

let tx1 =(tx >= 18)? "adult":"not adult";
console.log(tx1)

//============ if eles Condition ===========
// if eles হল যদি কন সর্ত সত্যি হয় তাহলে একটা কাজ হবে আর যদি মিথা হয় তাহলে একটা কাজ হবে যেমন মনে করি ট্রাফিক লাইট যদি লাল জলে থলে stop যদি লিল জলে তআহলে run exmple code 

// if দিয়ে (১ সর্ত){sotti hole print korbe } যদি অনেক গুলা সর্ত থাকে থলে  eles if (more Codition){sotti hole Pirnt hobe} eles {upore gula sotti na hole }
let terifficeLite ="Rad";

if ( terifficeLite == "Rad"){
console.log("Stop")
}
else if(terifficeLite == "gren" ){
  console.log("Run")
}
else{
  console.log("Another way ")
}
// ==================== switch case condition ==================
// switch case condition হল যদি অনেক গুলা সর্ত থাকে তাহলে আমরা switch case condition ব্যাবহার করতে পারি যেমন উপরে if else condition a অনেক গুলা সর্ত ছিল তাই আমরা switch case condition ব্যাবহার করতে পারি Example

let day = 1;

// Switch (যেইটা চেক করতে চাই) {case check করবে যদি সতি হয় Print করবে করে brack kore dibe যদি সত্যি না হয় পরে case a যাবে যদি কন সত্যি না  default গিয়ে ja ace Print করে দিবে সব case এর পরে brack uesd করতে হবে না হলে চলতেই থাকবে stop হবে না   }
switch (day){
  case 1:
    console.log("Sunday")
    break;
  case 2:
    console.log("Monday") 
    break;
  case 3:
    console.log("Tuesday")  
    break;  
  case 4:
    console.log("Wednesday")  
    break;  
  case 5:
    console.log("Thursday")  
    break;
  case 6:   
    console.log("Friday")  
    break;
  case 7:
    console.log("Saturday")  
    break;
    default:
      console.log("Invild Day ")
    break;
}
// ==================== for Loop ====================
// for loop হল এমন একটা loop যা একটি নির্দিষ্ট সংখ্যক বার code block কে execute করে থাকে for loop এর মধ্যে ৩টা অংশ থাকে ১. initialization (যেখানে আমরা loop variable কে initialize করি) ২. condition (যেখানে আমরা loop চলার condition দেই) ৩. increment/decrement (যেখানে আমরা loop variable কে update করি) Example

//let i =0 থেকে সুরু হবে i<5 মানে i মান ৫ এর কম হবে ততখন loop চলবে এবং i++ মানে i মান ১ ১ করে বারবে
for (let i = 0; i < 5; i++){
  console.log(i, "Hello for loop");
}

// brack foop হল এমন একটা loop যা একটি নির্দিষ্ট condition এর উপর loop টাকে stop করে দেয় যেমন আমরা যদি বলিই if i== 5 মানে i এর মান ৫ হলে lopp ta আর চলবে না তাহলে আমরা break used করি Example

for (let i = 0; i < 10; i++){
  console.log(i)
  if (i == 5){
    break; // loop stop হবে যখন i এর মান ৫ হবে
  }
}
// continue loop হল এমন একটা loop যা একটি নির্দিষ্ট condition এর উপর loop টাকে skip করে দেয় যেমন আমরা যদি বলিই if i== 5 মানে i এর মান ৫ হলে 5 টা বাদ দিয়ে পরে লাইন চলে যাবে তাহলে আমরা continue used করি Example

for (let i = 0; i < 10; i++){ 
  if (i == 5){
    continue; // loop skip হবে যখন i এর মান ৫ হবে
  }
  console.log(i);
}

//7 এর নামতা প্রিন্ট করার জন্য for loop used করা হয়েছে Example
for (let k=1; k<=10; k++){
  console.log(`${7} * ${k} = ${7*k}`)
}


// ==================== while loop ====================
// while loop হল আগে codition চেক করে তারপর lopp চলে যদি সর্ত সত্যি হয় তাহলে এবং যা print করতে চাব করে তারপর ইনক্রিমেন্ট বা ডিক্রিমেন্ট হয় Example

let j = 0;  
while (j < 5){
  console.log(j, "Hello while loop");
  j++; // j মান ১ ১ করে বারবে
}
// do while loop হল আগে code block কে execute করে তারপর condition চেক করে যদি সর্ত সত্যি হয় তাহলে আবার code block কে execute করে থাকে Example

let k = 0;
do {
  console.log(k, "Hello do while loop");
  k++; // k মান ১ ১ করে বারবে
} while (k < 5);

//=====================function=====================
// function হল এমন একটা box বা tempelet যেখানে আমরা code সাজি রাখি এবং পরে ইচ্ছা মত used kore পারি Function এর মধ্যে code লিখে আমরা পরে সেই code কে বার বার ব্যবহার করতেস Example

function person (){
  name = "sofik"
  console.log(name)
}

person() // function call করার জন্য function name() লিখতে হয় তাহলে function এর ভিতরে যা যা আছে তা print হবে

//======================================= function parameter  ====================
// function parameter হল function এর ভিতরে যে variable declare করা হয় তাকে parameter বলে এবং argument হল function call করার সময় যে value pass করা হয় তাকে argument বলে Example  


// num1 and num2 হল parameter যেখন কন নাম্বার বা নাম দিব তখন  যেত গুলা varible নিব ত্তগুলা parameter পাস করব 
function add(num1, num2){
  console.log(num1 + num2)
}
// argumanet হল যেই parameter গুলা আমরা পাস করচি তার value দিবো সেইটা যে কন হইতে পারে থলে তার results দিবে ai add Function  ta আমরা যে কন জায়গায় uesd করতে পারব 
add(5, 8)
// ==================== function return value ==================
// function return value হল function এর ভিতরে যে value calculate করা হয় তাকে return করে থাকে যাতে করে পরে আমরা সেই value কে used করতে পারি Example 
function add(num1, num2){
  return num1 + num2; // function এর ভিতরে যে value calculate করা হয় তাকে return করে থাকে যাতে করে পরে আমরা সেই value কে used করতে পারি
} 

let result = add(5, 8); // function call করার সময় যে value pass করা হয় তাকে argument বলে Example  add(5, 8) এইটা argument এবং add function এর ভিতরে num1 and num2 হল parameter
console.log(result) // function return value হল function এর ভিতরে যে value calculate করা হয় তাকে return করে থাকে যাতে করে পরে আমরা সেই value কে used করতে পারি Example  add(5, 8) এইটা argument এবং add function এর ভিতরে num1 and num2 হল parameter


//==================== arrow function ==================
// arrow function হল এমন একটা function যা ES6 এ introduce করা হয় arrow function এর syntax অনেকটা compact হয় এবং this keyword কে lexical scope এ bind করে থাকে Example 
// function add(num1, num2){
//   return num1 + num2;
// }  
// arrow function এ আমরা function keyword এর জায়গায় => এইটা ব্যবহার করি এবং যদি function এর ভিতরে শুধু একটা parameter থাকে তাহলে parameter কে () দিয়ে ঘিরে দিতে হয় না Example
const add2 = (num1, num2) => {
  return num1 + num2;
}
console.log(add2(7 , 8))

//====================object====================
// object হল এমন একটা data type যা key value pair হিসেবে data store করে থাকে Object এর মধ্যে key এবং value থাকে এবং key এর মাধ্যমে value কে access করা হয় Example 
// student হল object name  name, age, class হল key এবং "sofik", 25, "BSc in CSE" হল value   object এ ভিতরে  fuction a used করা যায় 
let student = {
  name : "sofik",
  age : 25,
  class : "BSc in CSE",
   addition: (num1, num2) => {
  return num1 + num2 ;
  }
};



//যদি সদু student দিয়ে তাহলে সব print korbe 
// console.log(student)
// এই ভাবে ডট . দিয়ে আলাদা আলাদা করে portapy dore print kora jay 
console.log(student.name)
console.log(student.age)
console.log(student.class)


// আমরা যদি নতুন কিছু add করতে চাই তাহলে 
student.mobile = 1315116027
console.log(student)

// // আবার যদি DELET  করতে চাই তাহলে 
delete student.age
console.log(student);
// object এর ভিতরে function a used করা যায়
console.log(student.addition(10 , 10)) 

//====================array====================
// array হল এমন একটা data type যা একাধিক value কে একটি variable এর মধ্যে store করে থাকে Array এর মধ্যে value গুলো index (0, 1, 2) হিসেবে store হয় index 0 থেকে শুরু হয়। Example
// Array [] এর মধে লিখতে হয় এবং একটা পর , দিয়ে পরে value লিখেতে হয় আর print করার জন্য index number ধরে print kore hoy 
let boks = ["Bangla" , "English ", "Math"];

// array শেষ এ যদি কন values add করতে চাই তাহলে  push দিয়ে করতে হয়  example 
boks.push("physics");

// array শেষ এ যদি কন values deletes করতে চাই থলে pop দিয়ে করতে হয় যেমন 
boks.pop()

// array সামনে যদি কন values add করতে চাই তহলে unshift 

boks.unshift("java");

// array সামনে যদি কন values deletes  করতে চাই তহলে shift
boks.shift()
// arrey যে কন value এর index number change করতে চাই তাহলে splice used করতে হয় যেমন 0 index a physics add করতে চাই thle 0 index a physics add hbe and baki gula 1,2,3 index a chole jabe

// 1 number index এর পরে add হবে ০ দেওয়া হইছে ১ এর পর ০ numver index a যোগ হবে 
boks.splice(1, 0, "c++");
// আবার যদি delete kore cai thle ses er valu ta dibo na thle oi indes ta delete hoye jabe 

console.log(boks);

// আমরা যদি সব array একটা করে প্রিন্ট করতে চাই তাহলে for loop used করতে পারি যেমন
for (let i = 0; i < boks.length; i++){
  console.log(boks[i])
}
// অথবা js resarves key word ForEach used করতে পারি যেমন
boks.forEach((arr) =>{
  console.log(arr);
})


//====================for in loop====================
// for in loop হল এমন একটা loop যা object এর key গুলোকে iterate করে থাকে Example 
let person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person1) {
  //key যদি দেখতে চাই তাহলে key লিখলেই হবে যেমন 
  console.log(key);
  // আর যদি সুদু value দেখতে চাই তাহলে onject name [key]
  console.log(person1[key]);
  //যদি সব কিছু এক সাথে দেখতে চাই তাহলে 
  console.log(key + ": " + person1[key]);
}

//================================ for of loop =====================================
// for of loop হইলো array ba string ba je kno একটা একটা করে ভাগ করে আলাদা লাইন করে দেয় for of loop সব থাকে বেশি used হয় array te Example 
// array 
let arr = ["sofik" , "shakib", "Radhesh"];

//string 
arr = "Soffik";

for (const arrs of arr){
  console.log(arrs);
}


//========================Array Method ===================================
// array method হল js এর কিছু build করা কিছু function আছে যা দিয়ে array অনেক operation করা যায় 

//================= array at()
// array at() হল একটা array মধে অনেক মান থাকে সেই  index number দরে ভালু print kore যেমন 

let arra = [2, 3,4,5,6,7,8,9,];

console.log(arra.at(4)); // 4 no index er valu ta print kore valu 6


// Array concat() method হল ২ টা array কে এক সঙ্গে যোগ করা ২ টা array কে একটা array যোগ করে ৩ নাম্বার array add করে ২ টা array valu ১ টা array যোগ হবে Example
let arr1 = [2,3,4];
let arr2 = [5,6,7];

// array 3 ভালু হলিও array 1 2 er valu  arr1 and 2 ওদের মানো থাকে যায় ঠিক থাকে পরিবতন হয় না ।
let arr3 = arr1.concat(arr2);
console.log(arr1 , arr2, arr3);

// array every () method হইল কন একটা সর্ত সাপখে true and fales return korbe মনে করি আমদের এ

// every te akta array Function cali niye condittion diye dei jodi sotti hoy true and mitha hole fales print kore 

let result1 = arr3.every(num => num > 0);
console.log(result1);

// array filter () mathod হল array মধে যদি আমরা কন কিছু খুজতে চাই তাহলে  filter method diye kori যেমন 

// ধরি আমা চাই ai Array মধে যেই নাম্বার গুলা ৫ এর বড় বা সমান সেই গুলা arro function diye codition dibo  callBack Function ba perametr name amra je kno dite parbi যে কন সর্ত দিতে পারি 
let result2 = arr3.filter(num => num >=5 )
console.log(result2)
// array find () method হল যে কন একটা value find করে আমরা codition দিয়ে দিতে পারি আমরা যদি বলি যে ৫ এর পর যেটা আছে সেই টা দেখাও মনে রাখে হবে আমরা সর্তে যে দিবে তার পরে ভালু টা দিবে এইখানে ১ পর ২ এমন না চল দেখি আমরা যদি আমরা সমান নাম্বার দেখতে চাই তাহলে === দিতে হবে ।
let arr4 = [1,5,6]
let result4 = arr4.find(num1 => num1 ===5);
console.log(result4)
// findindex () method সেম find er মতি শুধু value  না দিয়ে  index নাম্বার দেয় চল দেখি 

let result5 = arr4.findIndex(num => num ===5);
console.log(result5)

// array from() method হল কোনো string কে array তে convert করে চল দেখি 
let arr5 = "sofik"
let result6 = Array.from(arr5);
console.log(result6)
//  আমরা চাইলে একটা করে ওয়ার্ড  ও প্রিন্ট করতে পারি 
console.log(result6[2]);

// Array join() method হল সব গুলা array কে এক সাথে যোগ করে string a convert করে চল দেখি 
let arr6 = ["sofik" , "islam" ]
// আমরা যদি সব array মাঝখানে ফাকা বা কোন কিছু রাখতে চাই সেইটা দিতে হবে 
let result7 = arr6.join(" ");
console.log(result7);

// array includes() method হল  array মাঝে যে কোনো array তাহলে ture and false দেখায় চল দেখি

let result8 = arr6.includes("sofik");
console.log(result8);

// array lastIndexOf () Method হল array index number দেয় যদি same array হয় তাহলে শেষ এর array index ননাম্বার দিবে । 
let arr7 = [4, 5, 6,7]
let result9 =arr7.lastIndexOf(7);
console.log(result9)

// array reverse() method হলে পুরা array টাকে ঘুরায় দেয় মানে সামনের array পিছনে  এবং পিছনের array টা সামনে 
arr7.reverse
console.log(arr7);

// array sliec() method হল নিদিষ্ট কোন array যদি রাখতে চাই এবং বাকি array গুলা বাদ দিতে চাই তাহলে এই মেথড used করি এই মেথড কিন্তু নতুন array decceler kore age array change hoye na চল দেখি 

let schooleName = ["sobuj B.L High School", "Sofik Primery School" , "ssc","Shakib BKSP High School"] // এই খানে থাকে আমি সফিক স্কুল এবং sobuj BL School রাখতে চাই 

// এইকে দিতে হবে যে কোন array থাকে কোন array প্রজান্ত থাকবে সুরু অ্যান্ড শেষ index number 
let UpdateSchool = schooleName.slice(0,2);

console.log(UpdateSchool);

// Array some method হল যে জন সর্ত সতি হলে ture and false return kore 

let undefinedNumber = [4, 5, 6];
let defiendNumber = undefinedNumber.some((num) => num <10);
console.log(defiendNumber);

// arry sort () method হল সারি করে সাজিয়ে দেওয়া মানে a b c এমন করে সাজিয়ে দেওয়া 

let undefinedName = ["a", "h", "c", "b"];
let DefiendName = undefinedName.sort()
console.log(DefiendName);

// কিন্তু নাম্বার যদি হয় তাহলে এমন করে হয় না চলে দেখি কেমন  করে হয় 
let numbers = [8, 6, 8, 0, 7, 1];
// যদি আমরা ছোট থেকে বড় তাহলে a -b jodi bro thle coto chai thole b-a dibo
let number = numbers.sort((a ,b) => a-b )
console.log(number)


// ===================== String Method ====================
/*String method হল string কিছু operation চালেনর জন্য js er buli in function যা দিয়ে string a অনেক অপারেশান চালান যায় */

// length method হল এই মেথড দিয়ে একটা string a কয়টি characther আছে তা দেখায় 
let counry  = "Hello Bangladesh"

// veriable নাম সাথে .langth দিলে কয় টি character আছে তা দেখাবে 
console.log(counry.length);

// toUpperCase() মেথড হল যেত string থাকবে সব Capital Later হয়ে যাবে 

console.log(counry.toUpperCase());

// toLowerCase() method হল oi String a  যেত string আছে সব small later hoye jabe 
console.log(counry.toLowerCase());
// includes() method হল যে কোনো word বা কোন string ওই varibale আছে কি না তা চেক করে যদি থাকে তাহলে true যদি না থাকে তাহলে false return করে মনে রাখতে হবে এইটা কিন্তু case canctive 

console.log(counry.includes("Hello"));

// indexOf() method হল যে ওয়ার্ড টা দিব ওইটা কত নাম্বার index থেকে সুরু হইচে সেইতে দেখাবে 

console.log(counry.indexOf("Bangladesh"));

// slice() method হল একটা veriable থেকে যে অংশ আমরা নিতে চাই সুধু বাকি টা বাদ দিবে parameter dite hbe index numer start and end যেখানে থেকে যেই প্রজান্ত নিতে চাই ওই index নাম্বার 
console.log(counry.slice(0, 5));

// replace() method হল যদি কন ওয়ার্ড আমরা পরিবন করতে চাই তাহলে সেই পরিবতন করে নতুন ওয়ার্ড দেই  মনে রাখতে হবে সুদু কিন্তু ১ম  এ যেই টার সাথে মিল পাবে ওইটা সুধু পরিবত করবে যদি আমরা সব গুলা পরিবতন করতে চাই তলে replaceAll() method uesd করতে হবে হলে যে গুলা সাথে মিল পাবে সব গুলা পরিবতন করে দিবে 

// parameter দিব প্রথম টা যেটাকে পরিবতন করতে চাই ২য় টা দিব পরিবতন করে যেইটা দিতে চাই 


let updateCountry = counry.replace("Hello", "My Country");
let updateCountry1 = counry.replaceAll("Hello", "My Country");
console.log(updateCountry);
console.log(updateCountry1);

// trim () method এর কাজ হল কন string এর সামনে বা পছনে ফাকা স্পেস থাকলে টা ডিলিট করে দেয় 
let specWord = " Sofik ";
console.log(specWord.trim());

// split() এর কাজ হল string কে Array te convert করা 

let StudentName = "Sofik  rofik  jobber  borkot";
console.log(StudentName.split(","));

// chartAt() method  এর কাজ হল string এর index number দিলে string er value  দেখায় 

//Pramater pas korbo কত নাম্বার index er ভালু দেখতে চাই 
console.log(StudentName.charAt(3));
// concat() method এই কাজ হল ২ টা string কে এক যায় করা  trimStrat trimEnd trimRight TrimLeftএই গুলা দিক দেখে সেই দেখ এর ফাকা ডিলিট করে 
// যেই টা সামনে দিবো পরে 1ম.concat(2য় String)  
let towStrigAdd = specWord.concat(StudentName);
console.log(towStrigAdd.trim());

//startsWith() মেথড এর কাজ হল কন string er সামনে ওই ওয়ার্ড টা আছে কি না তা চেক করে যদি থাকে তাহলে ture na hole false return kore 

console.log(towStrigAdd.startsWith(" sofik"));

//endsWith() seme এইটা সুধু শেষ টা চেক করে 
console.log(towStrigAdd.endsWith("borkot"));


// js Date Object  হলি buil-in object যে time date live time addres kore চল দেখি কি কি আছে 

// js এর buil in Function টার objecct Create করে নেই  এই গুলা সব লাইভ টাইম 
let now =new Date();

// full time চলে আসেবে date time year month 
console.log(now)
// যদি দিন বের করতে চাই দিন সুরু হয় ০ থেকে week day
console.log(now.getDay())

// যদি মাস বের করতে চাই তাহলে 
console.log("দিন " + now.getMonth());

// যদি বছর বের করতে চাই তাহলে 

console.log("বছর " + now.getFullYear());

// যদি ঘণ্টা বের করতে চাই তাহলে 
console.log("ঘণ্টা " +now.getHours());

// যদি মিনিট বের করতে চাই তাহলে 
console.log("মিনিট " +now.getMinutes());
// যদি সেকেন্ট বের করতে চাই তাহলে 
console.log("সেকেন্ট " +now.getSeconds());

// লোকাল টাইম zone  বানার জন্য 
// date 
let BDTime = now.toLocaleDateString("en-BD");
console.log(BDTime);

// time 
BDTime = now.toLocaleTimeString("en-BD");
console.log(BDTime)



// ============ JavaScript Math Object ================

//Math object হলো JavaScript-এর একটি built-in object যেটা দিয়ে বিভিন্ন ধরনের গাণিতিক কাজ করা যায়।


// Math.PI হলো PI এর মান বের করা 
let pi = Math.PI
console.log(pi); 
let e = Math.E
console.log(e);

// math.round এর কাজ হল যদি কন দশমিক সংখ্যা থাকে সেইটা পূর্ণ সংখ্যা করে দেয় যদি .5 থেকে বড় হয় তাহলে পূর্ণ সংখ্যা দিবে যদি ৪ থেকে কম হয়ে তাহলে সেই সংখ্যা পূর্ণ সংখ্যা দিবে ।
let FullInt = 5.8;

console.log(Math.round(FullInt)) ;

//  math.ceil এর কাজ হল যদি দশমিক যুক্ত কন সংখ্যা থাকে তাহলে তাহলে ওই দশমিক পরে পূর্ণ সংখ্যা দেয় 
let nextInt = 4.2;
console.log(Math.ceil(nextInt));

  // Math floor and math trunc এর কাজ হল দশমিক কন নাম্বার নেয় না দশমিক এর পরে টা বাদ দিয়ে সদু পূর্ণ মান টা নেয়
  console.log(Math.floor(nextInt)); 
  console.log(Math.trunc(nextInt)); 

  // math Power যদি কন নাম্বারে আমরা পাওয়া দিতে চাই তাহলে আমরা এই অব্জেট used korbo 
  // prameter 1st vamue 2nd power koto hbe 

  console.log(Math.pow(4, 2));

  //Math.sqrt() এর কাজ হল Root করে দেয় 
console.log(Math.sqrt(16));

// Math.abs() এর কাজ হল কন নেগিটিভে  নাম্বার থাকলে positive নাম্বার করে দিবে 

console.log(Math.abs(-66));

// math.max() এর কাজ হল সব থেকে বড় নাম্বার টা খুজে বের করবে 


console.log(Math.max(4, 5, 6, 7, 8));
// math.min() এর কাজ হল সব থাকে ছোট নাম্বার বের করা 

console.log(Math.min(4, 5, 6, 7, 8));

//Math.random() আমরা যদি কন rendom নাম্বার print করতে চাই বা rendom নাম্বার চাই তাহলে এইটা used kori 


// 0 to 1 number print korbe 
console.log(Math.random());

// 1 to 10 nuber print er jnno 
console.log(Math.floor(Math.random()*10)+1);
// 10 to 100 print korbe 

console.log(Math.floor(Math.random()*100)+1)
// 100 to 999 print korbe 

console.log(Math.floor(Math.random()*1000)+1)


// =====================JS Number Convert ========================

// toFixed এর কাজ হল দশমিক এর পর কয় টা সংখ্যা রাখেতে চাই সেই টা  

let underNumber = 4.8888;
console.log(underNumber.toFixed(1));

// toLocalStrin হল যে যেই সংখ্যা আছে সেইটা আমরা কোন ভাসায় দেখেতে চাই মানে কোন দেশ এর 

let globalLangague = 1222222222222222222
console.log(globalLangague.toLocaleString("bn-BD"));

// toString হল আমরা যদি কোন নাম্বার কে string a convert করতে চাই 


console.log(globalLangague.toString());