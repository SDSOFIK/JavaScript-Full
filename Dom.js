// DOM Full Document Object Model একটা HTML পেজ লোড করে তখন সেটাকে গাছের মতো (tree structure) বানায় এটাকেই DOM বলে। DOM দিয়ে কী করা যায়? লেখা পরিবর্তন করা রং (style) পরিবর্তন করা বাটন ক্লিক ধরানোনতুন element যোগ করা element মুছে ফেলা ইতাদি করা যায় আমরা এই পেজ DOM শিখব DOM দিয়ে JS সব কিছু HTML সকল কাজ করা যায় আমরা সব শিখব

let updateTitle = document.getElementById("title");
updateTitle.textContent = "Hello Sofik Boss";


//=====================js dom accessing  elements ===============


// getElementsById হল DOM এর একটি bullt in Function যেটি দিয়ে HTML ভিতর থেকে id দিয়ে যে কোন Elemets খুজে বের করে আনে  মনে রাখেতে হবে ID কিন্তু একটা elements কেই আনবে তাই id unick হইতে হবে ডাবল নাম হয়া যাবে না 

// dobule "" দিয়ে ID নাম দিতে হয় 
document.getElementById("")

// getElementsByClassName সেম ID মতয় এইটা শুধু class name দিয়ে ধরে  claas name not unick যদি একটার বেশি class same name থাকে তাহলে array মত করে আসে যদি ১ টা ধরতে চাই তাহলে index[] diye dorte hobe 

// let a = document.getElementsByClassName("title");
// console.log(a[0]);

// getElemetsByTag হল সেম আগের মতই এইটা শুধু ট্যাগ দিয়ে দরে ক্লাস এর মত যদি অনেক গুলা index number diye find korta jay 

let p_tag = document.getElementsByTagName("p");
p_tag[0].textContent = "I love JS";

console.log(p_tag[0]);

// querySelector হল যেটা দিয়ে সব ট্যাগ বা id class সব ধরা যায়

// যদি আমরা id ধরতে চাই তাহলে আমরা # দিব 
let id_Select = document.querySelector("#idName")

// যদি আমরা Class ধরতে চাই তাহলে আমরা . দিব 
let Class_Select = document.querySelector(".ClasName")
// যদি আমরা Tag ধরতে চাই তাহলে আমরা কোন কিছু দিব না 
let tag_Select = document.querySelector("TagName")
