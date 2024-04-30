let prevButton=document.querySelector(".prev")
let nextButton=document.querySelector(".next")


let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "flex";
}


prevButton.addEventListener("click", function() {
    plusSlides(-1);
});


nextButton.addEventListener("click", function() {
    plusSlides(1);
});


