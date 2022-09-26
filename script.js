let Btn = document.getElementById("btn")
function disableBtn() {
    Btn.disabled = true
}
let aboutHtml = document.getElementById("about-html")


aboutHtml.onload = disableBtn()



