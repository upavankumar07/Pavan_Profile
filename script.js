// Particles Config
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00e5ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 2, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00e5ff",
            "opacity": 0.2,
            "width": 1
        },
        "move": { "enable": true, "speed": 1.5, "direction": "none" }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});

// Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));