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

// আগের ইমেজ টা পরিবতন করে এই ইমেজ টা দেয় 
  let ChgImag = img.setAttribute("src" ,"https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=")

// Class List 
// class list এর কাজ হল আমরা যে htmle code করি  class name নামে পরিবতন করা বা যোগ করে ডিলিট করা একসাথে ডিলিট ২ টায়  ও করা মানে আমরা js diye control করতে পারব কোনটা কখন কাজ করবে চল আমরা দেখি কেমন করে কাজ করে 

// HTML 40 no line Css 1 no line Strat
function togole1(){
    let box = document.getElementById("value");
// box1 css শুধু যোগ হবে এই ক্লাস  এ যে যে css code ace shudu add hobe 
// box.classList.add("box2")
//শুধু এক বের  ওই ক্লাস এ যে যে আছে সব css delete হয়ে যাবে 
// box.classList.remove("box")

// toggle এক বার নতুন টা দেই আরেকবার যেইটা আছে ওইটা দেয় ১ click new 2 click a ative ta day 
    box.classList.toggle("box2")

    // contains এর কাজ হল ক্লাস টা আছে কি না তা দেখা যদি থাকে তাহলে true and flasc return kore 
    console.log(box.classList.contains("box3"))
}

//Changing Styles with style Property
// আমরা js দিয়ে কিভাবে css style দিতে পারব সেই টায় এই style a dakhbo আমরা চাইলে js দিয়েও ইছা মত style পরিবত করেতে পারি বা দিতে পারি চল দেখি 

function chang(){
let styleChang = document.getElementById("Style");
// .style.আমরা যেইটা css করতে চাব সেই তা দিব মনে রাখেতে হবে যে css আমরা যেখানে - usd করি ২ টা জন্য সেই - টা হবে না তার পরিবতে ১টা ঠিক থাকবে পরর ওয়ার্ড বড় হাতের হব যেমন css font-size jss fontSize CSS এর সকল value আমরা uesd করতে পারি 
styleChang.style.color ="red";
styleChang.style.marginTop = "5px";

}