var n = Math.random();
n = n * 6;
var rndno1 = Math.floor(n)+1;


var m = Math.random();
m = m * 6;
var rndno2 = Math.floor(m)+1;


// Solution 1 --------------------
document.querySelector(".img1").setAttribute("src","images/dice"+rndno1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+rndno2+".png");


// Solution 2 --------------------
// if (rndno1 == 1) 
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// else if (rndno1 == 2) 
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// else if (rndno1 == 3) 
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// else if (rndno1 == 4) 
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// else if (rndno1 == 5) 
//     document.querySelector(".img1").setAttribute("src","images/dice5.png"); 
// else if (rndno1 == 6) 
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");   


// if (rndno2 == 1) 
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// else if (rndno2 == 2) 
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// else if (rndno2 == 3) 
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// else if (rndno2 == 4) 
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// else if (rndno2 == 5) 
//     document.querySelector(".img2").setAttribute("src","images/dice5.png"); 
// else if (rndno2 == 6) 
//     document.querySelector(".img2").setAttribute("src","images/dice6.png"); 

if (rndno1 > rndno2)
    document.querySelector("h1").textContent = "Player 1 win!";
else if (rndno1 < rndno2)
    document.querySelector("h1").textContent = "Player 2 win!";
else 
    document.querySelector("h1").textContent = "Draw!";