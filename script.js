
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.onclick = () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};



const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");

    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};



let index = 0;
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.getElementById("indicators");


slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.onclick = () => showSlide(i);
    indicatorsContainer.appendChild(dot);
});

const indicators = indicatorsContainer.querySelectorAll("div");

function updateIndicators() {
    indicators.forEach((dot) => dot.classList.remove("active-indicator"));
    indicators[index].classList.add("active-indicator");
}

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));

    index = i;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides[index].classList.add("active");
    updateIndicators();
}

document.getElementById("next").onclick = () => {
    showSlide(index + 1);
};

document.getElementById("prev").onclick = () => {
    showSlide(index - 1);
};

showSlide(index);



setInterval(() => {
    showSlide(index + 1);
}, 4000);
