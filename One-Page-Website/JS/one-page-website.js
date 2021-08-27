// OPEN THE MODEL
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// CLOSE THE MODAL
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// NEXT/PREV CONTROLS
function plusSlides (n) {
    showSlides(slideIndex += n);
}

// THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    // SETTING ALL IMAGES DISPLAY TO NONE
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // SETTING ALL IMAGES DISPLAY FROM ACTIVE TO NULL
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    // SETTING ONE IMAGE TO DISPLAY
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].id;
}