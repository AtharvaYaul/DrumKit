var noOfDrums=document.querySelectorAll(".bttn").length;
for(var i=0;i<noOfDrums;i++){
document.querySelectorAll(".bttn")[i].addEventListener("click",function(){
    var buttet=this.innerHTML;
    makeSound(buttet);

});
}
document.addEventListener("keypress",function(){
  makeSound(event.key);
});
function makeSound(key){
  switch(key){
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
    break;
    case "a":
      var tom2 =new  Audio("tom-2.mp3");
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
    break;
    case "j":
      var snare =new  Audio("snare.mp3");
      snare.play();
    break;
    case "k":
      var Kick = new Audio("kick-bass.mp3");
      Kick.play();
    break;
    case "l":
    var crash = new Audio("crash.mp3");
    crash.play();
    break;
    default:
    console.log(but);
    break;

  }
  // alert("Key was pressed....");
}
