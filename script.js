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

/*Toggle Button*/
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

function setTheme(theme) {
  document.body.className = theme;
  if (theme === "light-theme") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  } else {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }
  localStorage.setItem("theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light-theme";
setTheme(savedTheme);

// Toggle theme on icon click
sunIcon.addEventListener("click", () => setTheme("light-theme"));
moonIcon.addEventListener("click", () => setTheme("dark-theme"));

/*Language Switcher with Icon*/
const translations = {
  // ... your existing translation object (unchanged)
};

// Unified language switcher function
function setLanguage(lang) {
  const t = translations[lang];

  // Navbar
  const navLinks = document.querySelectorAll(".nav-links li a");
  navLinks.forEach((link, i) => link.textContent = t.nav[i]);

  // Hero
  document.querySelector(".accent-label").textContent = t.hero.hello;
  document.querySelector(".glitch-name").textContent = t.hero.title;
  document.querySelector(".hero-text h3").textContent = t.hero.role;
  document.querySelector(".hero-desc").textContent = t.hero.desc;
  document.querySelector(".btn-main").textContent = t.hero.resume;
  document.querySelector(".btn-outline").textContent = t.hero.contact;

  // About
  document.querySelector("#about .section-header").textContent = t.about.header;
  document.querySelector("#about p").textContent = t.about.body;

  // Skills
  document.querySelector("#skills .section-header").textContent = t.skills;

  // Experience
  document.querySelector("#experience .section-header").textContent = t.experience;

  // Projects
  document.querySelector("#projects .section-header").textContent = t.projects;

  // Contact
  document.querySelector("#contact .section-header").textContent = t.contact;

  // Update body class for background accent
  document.body.className = document.body.className
    .replace(/lang-\w+/g, '') // remove previous language class
    .trim();
  document.body.classList.add(`lang-${lang}`);

  // Save preference
  localStorage.setItem("language", lang);
}

// Load saved language on page load
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

// Dropdown listener
document.getElementById("languageSwitcher").addEventListener("change", function () {
  setLanguage(this.value);
});

// Optional: icon-based triggers
document.getElementById("langEn")?.addEventListener("click", () => setLanguage("en"));
document.getElementById("langDe")?.addEventListener("click", () => setLanguage("de"));
document.getElementById("langFr")?.addEventListener("click", () => setLanguage("fr"));
document.getElementById("langJa")?.addEventListener("click", () => setLanguage("ja"));
document.getElementById("langKo")?.addEventListener("click", () => setLanguage("ko"));
document.getElementById("langZh")?.addEventListener("click", () => setLanguage("zh"));


// ...existing code...
(function(){
    function animateCounter(el, duration = 1400) {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const start = 0;
        const stepTime = Math.max(20, Math.floor(duration / (target || 1)));
        let current = start;
        const inc = Math.max(1, Math.floor(target / (duration / stepTime)));

        const t = setInterval(() => {
            current += inc;
            if (current >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(t);
            } else {
                el.textContent = current.toLocaleString();
            }
        }, stepTime);
    }

    function updateLastUpdated() {
        const el = document.getElementById('vc-last-updated');
        if (!el) return;
        const now = new Date();
        const pad = n => String(n).padStart(2,'0');
        const formatted = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()} • ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        el.textContent = formatted;
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.vc-value').forEach(el => animateCounter(el, 1400));
        updateLastUpdated();

        // optional: refresh last-updated every 30s
        setInterval(updateLastUpdated, 30000);
    });
})();
// ...existing code...

// Contact form client handling (opens mail client as fallback)
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('cf-status');
  const name = document.getElementById('cf-name')?.value.trim();
  const email = document.getElementById('cf-email')?.value.trim();
  const message = document.getElementById('cf-message')?.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill out all fields.';
    status.style.color = 'salmon';
    return;
  }

  status.textContent = 'Opening email client...';
  status.style.color = 'var(--accent)';

  const subject = encodeURIComponent(`Website message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nName: ${name}\nEmail: ${email}`);
  const mailto = `mailto:udayagiripavankumar222@gmail.com?subject=${subject}&body=${body}`;

  // attempt to open default mail client
  window.location.href = mailto;

  setTimeout(() => {
    status.textContent = 'If your mail client did not open, copy the message and email manually.';
    status.style.color = 'var(--accent)';
  }, 900);
});

// ...existing code...