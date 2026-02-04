//შექმენი ცვლადი number 
//თუ რიცხვი დადებითია → დაბეჭდე "დადებითია" 
// თუ არა → "უარყოფითი ან ნულია

let number=1; 
if (number>0) {
console.log ("დაადებითია"); 
} else {
console.log ('უარყოფითია');
}

//2. შექმენი ცვლადი temperature
//თუ > 30 → "ცხელა"
//თუ 15–30 → "სასიამოვნო ამინდია"
//თუ < 15 → "ცივა"

let temperature=5;
if (temperature>30) {
    console.log ('ცხელა');
} else if (temperature>=15 && temperature<=30){
    console.log ('სასიამოვნო ამინდია');
 } else {
        console.log ('ცივა')
    }

//3. შექმენი ცვლადი password
//თუ ტოლია "123456" → "შესვლა წარმატებულია"
//თუ არა → "არასწორი პაროლი"

let password= "123456"
if (password=='123456') {
    console.log ("შესვლა წარმატებულია"); 
} else {
    console.log ('არასწორი პაროლი');
}

//4.დაბეჭდე მხოლოდ ლუწი რიცხვები 1-დან 20-მდე

for (let num=2; num<=20; num+=2) {
console.log (num);
}

//5. შექმენი მასივი: let names = ["ანა", "გიორგი", "ნიკა"]; დაბეჭდე 
// თითოეული სახელი და მათი ინდექსი for ციკლით

const names =['ანა', 'გიორგი', 'ნიკა']
for (index=0; index <=names.length-1; index++){
    console.log (names[index])
}

//6.დაბეჭდე "Hello" 5-ჯერ

let word = 'hello'
for (let index=1; index <=5; index++) {
    console.log (word)
}
//7. დაბეჭდე მასივიდან მხოლოდ ის სიტყვები, რომელთა სიგრძე მეტია 4-ზე
//const names =['ანა', 'გიორგი', 'ნიკა']
//for (let index=0; index<=names.length-1; index++) {
//if ()
  //8. შექმენი ცვლადი role (გამოიყენე switch / case
//doctor - დაბეჭდე "ექიმის გვერდი"
//patient- დაბეჭდე "პაციენტი"
//სხვა ნებისმიერი მნიშვნელობა → "წვდომა შეზღუდულია"

let role ="baby"
switch (role) {
case "doctor":
    console.log ('ექიმის გვერდი')
    break; 
    case "patient":
        console.log ("პაციენტი")
    break; 
    default: 
        console.log ('წვდომა შეზღუდულია')

        }