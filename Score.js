//Დაბეჭდეთ რიცხვები 2 დან 8 მდე
for (let num=2; num<=8; num++) {
    console.log (num);
}
//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for (let num=5; num<=35; num+=4) {
 console.log (num);
}

//3.დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

let product =1; 
for (let num=3; num<=8; num++) {
    product *=num; 
}
    console.log (product);

    //4.Გამოაცხადეთ ობიექტი person რომელსაც აქვს /
    // /firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)

    let person = {
        firstName: "Tamar",
        lastName: "Guniava",
        age: 40
    };
    console.log (person.firstName, person.lastName);

    //5. მეოთხე დავალებაში გამოცხადებული person - ის ასაკის მიხედვით დაბეჭდეთ : 	
    //ა. თუ ასაკი 18 ზე ნაკლებია - “არასწრულწლოვანია”, 
    //ბ. თუ 18 ან მეტია - “სრულწლოვანია”. გამოიყენეთ if else

    let personAge=40
    if (personAge<18){
        console.log("არასრულწლოვანია");
     } else {
        console.log ("სრულწლოვანია");
    }
//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"], 
//დაბეჭდეთ მასივის თითოეული წევრი. 

let fruits = ["Apple", "Banana", "Orange"];

for (let num=0; num<fruits.length; num++) {
    console.log(fruits[num]);
}


//7. დაამატეთ fruits მასივის თავში Grapes, ბოლოში Pineapples 
// დაბეჭდეთ fruits 

fruits.unshift ('Grapes');
fruits.push ("Pineapples");
console.log (fruits);


//8. დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი 
let sum=0; 
for (let num=1; num<=34; num++) {
    sum+=num;
}
console.log (sum);




	
