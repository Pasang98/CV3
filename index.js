var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomImage1 = "dice"+RandomNumber1+".png";
var RandomImageSource = "images/"+RandomImage1;
document.querySelectorAll("img")[0].setAttribute("src", RandomImageSource);

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var RandomImage2="images/"+"dice"+RandomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomImage2);

if(RandomNumber1 > RandomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(RandomNumber2 > RandomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
  document.querySelector("h1").innerHTML="Draw";
}
