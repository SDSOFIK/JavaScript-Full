//============== oop.js ==============
// Object Oriented Programming in JavaScript
//what is OOP?
//OOP is a programming paradigm that uses objects and classes to organize code and data. It allows developers to create reusable and modular code by encapsulating data and behavior into objects.
// oop 4 টি মূল ধারণা আছে:
//1. Encapsulation: 
//2. Inheritance: 
//3. Polymorphism: 
//4. Abstraction: 

// ============================ class ============================

// class হল এমন একটা design and tempelet যেখানে আমরা মেথড বা সব কিছু design করে রাখে দেই পরে object Create kore acess kori ক্লাস এর সকল probaty 
// class keyword diye class শুরু করতে হয় ক্লাস নামে varible নামে মত নিয়েম 
class addClas{
name = "Sofik"
age = 20;

};

// object crate kno akta virible মাঝে রাখে new keyword diye class name , 
let a = new addClas()
// ক্লাস এর মাঝে থেকে আমরা যে propty ta চাই ওইটা নিব 
console.log(a.name , a.age);

// constructor হল এমন একটা মেথড যা ক্লাস এর object create করার সময় স্বয়ংক্রিয়ভাবে কল হয় এবং আমরা এই মেথড এর মাধ্যমে ক্লাস এর প্রোপার্টি গুলোকে ইনিশিয়ালাইজ করতে পারি। 
// constructor method টা class এর ভিতরে define করতে হয় এবং এর নাম অবশ্যই constructor হতে হবে। 

class SumClass{
    // constructor এর যেই গুলা parameters  দিবেও অব্জেট তৈরি করার সময় সেই ভালু গুলা দিতে হবে  
constructor(a,b){
    this.a = a;
    this.b = b;
} 
// মেথড এর কাজ হল propaty গুলা নিয়ে কাজ করা কি ক্লাস এর ভিতরে মেথড তৈরি করা যায় অ্যান্ড যে কন অপারেশান চালান যায়  class এর সকল this . diye dorte hoy 

sum(){
    console.log(this.a+ this.b)
}

}

let sum1 = new SumClass(1, 4)

sum1.sum()




// =========================== Inheritance ============== 
// Inheritance হল Prant class এর সব কিছু child class এ পাওয়া যায় all property acess kora jay  

class Animal {
    constructor(name){
        this.name = name
    }
    results(){
        console.log(`Animal nameঃ ${this.name}`)
    }
}
// যেই ক্লাস টাঁকে inheritance করব extends diye ক্লাস নাম টা দিবো 
class Dog extends Animal{
constructor(name, sound){
  
    // jodi amra kno prant class er property call kori thle amder super (property name) dite hbe 
    super(name);
    // যদি সেম ক্লাস এ হয় তাহলে this. diye delecr korte hoy 
    this.sound = sound;
}
speek(){
    this.results()
console.log(` animal sound : ${this.sound}`)
}
}

let dog1 = new Dog("dog" , "gog gog ")
dog1.speek()

//================================== Encapsulation ===============================

// Encapsulation হল date কে hidden করে রাখে সুধু ওই constructor ছারা অনন কন জায়গায় acces পাওয়া যায় না and ওই constructor er মধে method caret korte hbe 

class BankAccount{
    constructor(balance ){

        // balance ডাটা টা কে privet করে নেই জাতে অন্য কথাও থেকে access করা না যায় 
        let _balance = balance;
    

    this.deposit = function(amount ){
        _balance += amount;
    }
    this.GetBalance = function(){
        return _balance
    }
}
}
// আমরা সরাসরি balance ke acces করতে পারব না 
let accound = new BankAccount(200)
accound.deposit(700);

console.log(accound.GetBalance())


// =============================== Polymorphism ================================== 
// Polymorphism হল এমন একটা মেথড যে নাম একই থাকে কিন্তু আলাদা আলদা জায়গায় আলাদা আলদা আউটপুট দেয় 

class Car{
    constructor(name, model){
        this.name = name
         this.model = model
    }
    CarInfo(){
        console.log(` name: ${this.name}  Model: ${this.model}`)
    }
}

class BMW extends Car{
    constructor(name , model){
        super(name, model)

    }
     CarInfo(){
        console.log(` name: ${this.name}  Model: ${this.model}`)
    }
}

let car = new Car("TOYOTA", "LC655")
let bmw = new BMW("BMW", "HL55")

// same method name but work define this polymorphism
car.CarInfo()
bmw.CarInfo()