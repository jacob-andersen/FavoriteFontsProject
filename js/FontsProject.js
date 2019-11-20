const fontSize = "40pt"

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
    for (i = 1; i < 9; i++) {
        document.getElementById("cardText" + i).style.fontSize = fontSize;
    }

}