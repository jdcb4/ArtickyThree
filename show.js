function fnShowStart() {
    document.getElementById("CtnStart").style.display = "block";
    document.getElementById("CtnGame").style.display = "none";
    document.getElementById("CtnMenu").style.display = "none";
    document.getElementById("CtnEnd").style.display = "none";
}

function fnShowGame() {
    document.getElementById("CtnStart").style.display = "none";
    document.getElementById("CtnGame").style.display = "block";
    document.getElementById("CtnMenu").style.display = "none";
    document.getElementById("CtnEnd").style.display = "none";
}

function fnShowMenu() {
    document.getElementById("CtnStart").style.display = "none";
    document.getElementById("CtnGame").style.display = "none";
    document.getElementById("CtnMenu").style.display = "block";
    document.getElementById("CtnEnd").style.display = "none";
}

function fnShowEnd() {
    document.getElementById("CtnStart").style.display = "none";
    document.getElementById("CtnGame").style.display = "none";
    document.getElementById("CtnMenu").style.display = "none";
    document.getElementById("CtnEnd").style.display = "block";
}