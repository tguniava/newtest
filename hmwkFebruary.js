// თუ რიცხვი დადებითია - დაბეჭდე "დადებითია", თუ არა, "უარყოფითი ან ნულია"
let number=50;
if (number>0) {
    console.log ("დადებითია");
} else {
        console.log ("უარყოფითი ან ნულია");
    }

//2. შექმენი ცვლადი temperature 
// თუ > 30 → "ცხელა"
// თუ 15–30 → "სასიამოვნო ამინდია"
// თუ < 15 → "ცივა"

let temperature = 25
if (temperature>30) {
   console.log ("ცხელა");
} else if (temperature>=15 && temperature<=30) {
    console.log ("სასიამოვნო ამინდია");
}else {
        console.log ("ცივა")
}
//3.შექმენი ცვლადი password
//თუ ტოლია "123456" → "შესვლა წარმატებულია"
//თუ არა → "არასწორი პაროლი"

let password = "123456"
if (password==="123456") {
    console.log ("შესვლა წარმატებულია"); 
} else {
    console.log ("არასწორი პაროლია");
}


//8. შექმენი ცვლადი role (გამოიყენე switch / case

//	doctor - დაბეჭდე "ექიმის გვერდი"
//	patient- დაბეჭდე "პაციენტი"
//	სხვა ნებისმიერი მნიშვნელობა → "წვდომა შეზღუდულია"

let role="doctor";
switch (role) {
    case "doctor":
    console.log ("ექიმის გვერდი")
    break; 
    case"patient":
    console.log ("პაციენტი")
    break; 
   default: 
    console.log ("წვდომა შეზღუდულია");
}

//4. დაბეჭდე მხოლოდ ლუწი რიცხვები 1-დან 20-მდე

for (let num=2; num<=20; num+=2){
    console.log (num);
}
//5. შექმენი მასივი: let names = ["ანა", "გიორგი", "ნიკა"]; 
// დაბეჭდე თითოეული სახელი და მათი ინდექსი for ციკლით
let names = ["ანა", "გიორგი","ნიკა"]; 
for (let num=0; num<names.length; num++){
    console.log (names [num]);
}
//6.დაბეჭდე "Hello" 5-ჯერ
for (let num=0; num <5; num++){
    console.log ("hello");
}
//7. დაბეჭდე მასივიდან მხოლოდ ის სიტყვები, რომელთა სიგრძე მეტია 4-ზე:




