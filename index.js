var randomNumber1=Math.floor(Math.random()*6)+1;
var rand1="images/dice"+randomNumber1+".png";
document.querySelector(".dice .img1").setAttribute("src",rand1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var rand2="images/dice"+randomNumber2+".png";
document.querySelector(".dice .img2").setAttribute("src",rand2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw!🏁"
}