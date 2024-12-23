var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;
var autoSlideInterval;

// Cambiar slide manualmente
function prevSlide(n) {
    clearInterval(autoSlideInterval); // Pausa el auto movimiento
    index += n;
    changeSlide();
    startAutoSlide(); // Reinicia el auto movimiento
}

function nextSlide(n) {
    clearInterval(autoSlideInterval);
    index += n;
    changeSlide();
    startAutoSlide();
}

// Cambiar slide automáticamente
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        index++;
        changeSlide();
    }, 4000); // Cambia cada 4 segundos
}

// Función para mostrar el slide correspondiente
function changeSlide() {
    if (index > slides.length - 1) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("activo");
    });

    slides[index].style.display = "block";
    dots[index].classList.add("activo");
}

// Inicializar
changeSlide();
startAutoSlide();
