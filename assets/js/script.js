document.getElementById('image1').onmouseover = function() {borderSwitch(true)};
document.getElementById('image1').onmouseout = function() {borderSwitch()};

function borderSwitch(over){
  if (over==true) {document.getElementById("image1").style.border = '3px solid black';}
  else {document.getElementById("image1").style.border = '';}
}
// function test() {
//   document.getElementById('image1').style.border="3px solid black";
// }
// function mouseOut() {
//   document.getElementById('image1').style.border='';
// }
