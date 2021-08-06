console.log("Created by N. Sheik Ahamed Iqbal");
console.log("This Website is under Development");

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  document.getElementById("Title").style.left = "20px";

  document.getElementById("Logo").style.height = "85px";
  document.getElementById("Logo").style.width = "85px";
}
else {
  document.getElementById("Title").style.left = "450px";
  document.getElementById("Title").style.fontSize = "200%";

  document.getElementById("Logo").style.height = "100px";
  document.getElementById("Logo").style.width = "100px";
}
