function nameSend() {
    var nameResult = document.getElementById("nameInput").value;
   document.getElementById("nameLabel").innerText = "Bienvenido/a " + nameResult;
   document.getElementById("nameInput").style.display = "none";
   document.getElementById("nameButton").style.display = "none";
}
function functionNot() {
    document.getElementById("messageNot").innerHTML = "Nos vemos para la próxima";
    document.getElementById("wannaPlay").style.display = "none";
}
function functionYes() {
    document.getElementById("questions1").style.display = "block";
}
