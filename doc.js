function setFontSize() {
    var input = document.querySelector("#fontsize").value
    var page = document.querySelector("body")
    page.style.fontSize = input+"px"
}