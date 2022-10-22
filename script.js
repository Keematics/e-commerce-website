const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", function () {
    navbar.classList.add("toggle");
})

closeBtn.addEventListener("click", function () {
    navbar.classList.remove("toggle");
})

window.addEventListener("scroll", () => {
    if (navbar.className.includes("toggle")) {
        navbar.classList.remove("toggle")
    }
})

//----changing image in the productDetails page---------
const bigImage = document.getElementById("big-image");
const smallImages = document.querySelectorAll("#small-images");
smallImages.forEach((smallImage) => {
    smallImage.addEventListener("click", function () {
        bigImage.src = smallImage.src;
    })
})


