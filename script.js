document.addEventListener("DOMContentLoaded", function() {
    let glitchText = document.querySelectorAll(".glitch");

    setInterval(() => {
        glitchText.forEach(el => {
            el.style.transform = `translate(${Math.random() * 5}px, ${Math.random() * 5}px)`;
        });
    }, 100);
});
