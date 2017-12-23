let car1Pos =440;
let car2Pos =340;
let car3Pos =1100;
let car4Pos =340;
let car5Pos =1100;
let car6Pos =1100;
let movecars= function(){
  car1Pos=car1Pos+15;
  car1.style.right= car1Pos+"px";
  if(car1Pos>=1100) car1Pos=340;

  car2Pos=car2Pos+10;
  car2.style.right= car2Pos+"px";
  if(car2Pos==1100) car2Pos=340;

  car3Pos=car3Pos-10;
  car3.style.right= car3Pos+"px";
  if(car3Pos==340) car3Pos=1100;

  car4Pos=car4Pos+5;
  car4.style.right= car4Pos+"px";
  if(car4Pos==1100) car4Pos=340;

  car5Pos=car5Pos-15;
  car5.style.right= car5Pos+"px";
  if(car5Pos<=340) car5Pos=1100;

  car6Pos=car6Pos-5;
  car6.style.right= car6Pos+"px";
  if(car6Pos==340) car6Pos=1100;
}
let startGame= function(){
  setInterval(movecars,50);
}
let playerHorPos= 780;
let playerVerPos= 830;

let movePlayer = function(event){
  let player = document.getElementById("player");
  if(event.key=="ArrowUp"){
    playerHorPos=playerHorPos-83;
    player.style.top= playerHorPos+"px";
    if(playerHorPos<20) {
      playerHorPos=865;
      playerVerPos= 830;
    }
  }
  if(event.key=="ArrowLeft"){
    playerVerPos=playerVerPos+15;
    if(playerVerPos>1099) playerVerPos=1250;
    player.style.right= playerVerPos+"px";
  }
  if(event.key=="ArrowRight"){
    playerVerPos=playerVerPos-15;
    if(playerVerPos<340) playerVerPos=340;
    player.style.right= playerVerPos+"px";
  }
}
window.onkeydown=movePlayer;
window.onload=startGame;
