document.getElementById("btn-white").onclick = switchWhite;
document.getElementById("btn-pink").onclick = switchPink;
document.getElementById("btn-orange").onclick = switchOrange;
document.getElementById("btn-lemon").onclick = switchLemon;
document.getElementById("btn-key-lime").onclick = switchKeyLime;

function switchWhite() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
    document.getElementsByTagName("body")[0].style.color = "#000";
}

function switchPink() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#F7A4A4";
    document.getElementsByTagName("body")[0].style.color = "#B6E2A1";
}

function switchOrange() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#FEBE8C";
    document.getElementsByTagName("body")[0].style.color = "#FFFBC1";
}

function switchLemon() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFBC1";
    document.getElementsByTagName("body")[0].style.color = "#B6E2A1";
}

function switchKeyLime() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#B6E2A1";
    document.getElementsByTagName("body")[0].style.color = "#F7A4A4";
}