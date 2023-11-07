// RESULT-SHEET
let num = prompt();

console .log(typeof num)

if(num >=80 && num <=100){
    document.querySelector("h1").innerText = "A+"
}else if(num >=70 && num <=80){
    document.querySelector("h1").innerText = "A"
    document.h1.style.color = "black";
}else if(num >=60 && num <=70){
    document.querySelector("h1").innerText = "A-"
}else if(num >=50 && num <=60){
    document.querySelector("h1").innerText = "B"
}else if(num >=40 && num <=50){
    document.querySelector("h1").innerText = "B-"
}else if(num >=33 && num <=40){
    document.querySelector("h1").innerText ="C "
}else if(num >=100 && num <=100000000){
    document.querySelector("h1").innerText = "Invalid Number Please Try Again!!"
}else{
    document.querySelector("h1").innerText = "Tmr Dara Kisu Hobe Na :("
}



 
