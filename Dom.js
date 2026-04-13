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


//JavaScript-এ textContent আর innerText—দুটাই HTML element-এর ভিতরের লেখা পরিবর্তন বা নেওয়ার জন্য ব্যবহার হয়।

//textContent দিয়ে element এর সব লেখা পরিবতন করা যায় hidden সহ 

let demo = document.querySelector("#demo").textContent;
 
 console.log(demo);

// innerText দিয়ে hidden text গুলা দেখায় না 

 let demo1 = document.querySelector("#demo").innerText;
 console.log(demo1);
 
 //Working with Element Attributes using getAttribute() and setAttribute()

 // Attributes হল HTML Tag এর ভিতরে যে যে  এক্সট্রা info thle সেই গুলা attribute বলে 
 //getAttribute() and setAttribute() কাজ হল সেই attribute গুলা ধরে value poriboton ba add করে 

 // getAttribute() এর কাজ হল যে attribute er value নেওয়ার জন্য 

 let link1 = document.getElementById("link").getAttribute("href");
 console.log(link1);

 // setAttribute() এর কাজ হল attribute নতুন vaule set বা change করে দেয় 
 
 let img = document.getElementById("img");  


  let ChgImag = img.setAttribute("src" ,"https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=")