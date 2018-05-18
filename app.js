function nameSend() {
    var nameResult = document.getElementById("nameInput").value;
   document.getElementById("nameLabel").innerText = "Bienvenido/a " + nameResult;
   document.getElementById("nameInput").style.display = "none";
   document.getElementById("nameButton").style.display = "none";
}
function nextPage() {
            if (answer1.value == "lima") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>La primera sede fue en Lima</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>La primera sede fue en Lima</p>"
            "</div>";
        }
        if (answer2.value == "no") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en Concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en Concepción</p>"
            "</div>";
        }
    document.getElementById("questions2").style.display = "block";
    document.getElementById("questions1").style.display = "none";
}

function submitAnswers() {
        if (answer3.value == "talent fest") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>La hackaton es el Talent Fest</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>La hackaton es el Talent Fest</p>"
            "</div>";
        }
        if (answer4.value == "36") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Las hackatones duran 36hrs</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Las hackatones duran 36hrs</p>"
            "</div>";
        }
}