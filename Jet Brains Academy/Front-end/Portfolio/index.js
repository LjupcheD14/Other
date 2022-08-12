document.getElementsByClassName("open-window")[0].addEventListener("click",function (event) {
    window.open("popup.html");
})

document.getElementById("jojo").addEventListener("click",function (event) {
    var x = document.getElementsByClassName("hamburger")[0];
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
})
