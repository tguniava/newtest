//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n)
//დააბრუნებს რომელიც მეტია იმ რიცხვს
//თუ რიცხვები ტოლია დააბრუნებს 0 -ს


function total(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}
console.log (total (1,3));

//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს)
// დააბრუნეთ რიცხვების ჯამი

function sum (a,b) {
    return a+b;
}
console.log (sum(3,5));

//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function myname (){
console.log ("Tamar Guniava");
}
myname (); 
//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname 
// დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function fullname (firstName, lastName) {
    return firstName + lastName; 
}
 let myfullname=fullname ('Tamar ', 'Guniava');
 console.log (myfullname);

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და 
//ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი 
//(ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
// დაგჭირდებათ ახალი ცვლადის გამოცხადება 
// ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
//Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

//function number (n) {
  // for (let index=1; index <=n; index ++){
    //result =result*1
   //}
//} return result; ვერ ... 

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

const student = {
    firstName: "Tamar",
    lastName: "Guniava",
    age: 40,
    scores: [5,10,20, 25], 
    
    fullName: function() {
        return student.firstName +  student.lastName; 
    }
}
console.log (student.fullName());
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) 
// და ფუნქცია დააბრუნებს  ქულების ჯამს
function sum (scores) {
    let total = 0; 
    for (let number = 0; number< scores.length; number++) {

    }
    return total; 

}
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
const student ={

    firstName: "Tamar",
    lastName: "guniava", 
    age: 40, 
    Scores: [5,10,20,25], 

    fullName: function () {
        return student.firstName + student.lastName; 
    }
}
console.log (student.fullName()); 



