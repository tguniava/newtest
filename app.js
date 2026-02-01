//1. ვაცხადებთ ორ ცვლადს და მათ ჯამს ვბეჭდავთ 

 let x=87; 
 let y=65; 
 console.log (x+y);

//2. ვაცხადებთ ობიექტს - student, with properties: firstName,lastName, age, email, marks ვბეჭდავთ Student ის სახელს . 
    let student ={
        firstName: "Tamar",
        lastName: "Guniava",
        age: 18,
        email: 'tguniava@gmail.com',
        marks: [90, 98, 100], 
    }
console.log (student.firstName); 

//3. ვაცხადებთ ცვლადს studentName და ვანიჭებთ ჩემ სახელს მნიშვნლობად. 
// ვბეჭდავთ "Rise and shine, "ჩემი სახელი"!" 

let studentName ={
    firstName: 'Tamar'
}
console.log ("Rise and shine", studentName.firstName,"!");

//4. ვაცხადებთ ცვლადს a,b და c. სადაც a=23, b=a-ნახევარი, c=a და ბ-ს ჯამი. დაბეჭდეთ c. 
 let a=23,
b=a/2,
c=a+b
 console.log (c)

// 5. ვაცხადებთ მასივს phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi
let arr = ["iPhone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
console.log (arr);
//6. ვბეჭდავთ phones მასივის პირველ და ბოლო ელემენტს ( ცალ-ცალკე console.log ეგში)
let phones = ["iPhone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
console.log(phones[0]); 
console.log(phones[4]); 
