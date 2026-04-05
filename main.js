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

