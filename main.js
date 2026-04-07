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
  