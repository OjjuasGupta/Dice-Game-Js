var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdiceimage="images/"+"dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage); 


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player1 WINS!!!";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player2 WINS!";
else
document.querySelector("h1").innerHTML="ITS A DRAW!!!"