//dice roll code for 1st dice
var num1=Math.random();
var randomNumber1=Math.floor((num1*6)+1);
if(randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}else if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}else if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}else if(randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}
//dice roll code for 2nd dice
var num2=Math.random();
var randomNumber2=Math.floor((num2*6)+1);
if(randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}else if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}else if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}else if(randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
//winner selection
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins! ";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").textContent="Draw!";
}