function updateCardText() {
    updateFontSize();
    var x = document.getElementById("myInput").value;
    if (x == "") {
        x = "Then came the night of the first falling star.";
    }

    for (i = 1; i < 9; i++) {
        document.getElementById("cardText" + i).innerHTML = x;
    }

}

function updateFontSize() {
    fontSize = document.getElementById("myList").value;
    for (i = 1; i < 9; i++) {
        document.getElementById("cardText" + i).style.fontSize = fontSize;
    }
}

function reset() {
    document.getElementById("myList").value = "20px";
    document.getElementById("myInput").value = "";
    updateCardText();
}