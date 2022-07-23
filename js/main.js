let slideIndexAuto = 0;
let slideIndex = 1;
let slides = document.querySelectorAll(".slide-image");
let dots = document.querySelectorAll(".dot");

const slideTime = setInterval(showSlidesAuto, 6000);

showSlidesAuto();

function showSlidesAuto() {
	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	slideIndexAuto++;
	if (slideIndexAuto > slides.length) {
		slideIndexAuto = 1;
	}
	slides[slideIndexAuto - 1].style.display = "block";
	dots.forEach((dot) => {
		dot.className = dot.className.replace(" active", "");
	});
	dots[slideIndexAuto - 1].className += " active";

	// setTimeout(showSlidesAuto, 6000);
}

function plusSlides(n) {
	showSlides((slideIndex += n));
	clearInterval(slideTime);
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

showSlides(slideIndex);

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	dots.forEach((dot) => {
		dot.className = dot.className.replace(" active", "");
	});

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
