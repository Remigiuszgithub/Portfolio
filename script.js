/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll Reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 400,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .carousel-button', { origin: 'right' });

/*==================== typed.js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developerem', 'Studentem', 'Specjalistą IT'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== Cookies ====================*/
const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = ()=>{
      //setting cookie for 1 month, after one month it'll be expired automatically
      document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
      }else{ //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

  // Zmienna do śledzenia aktualnego projektu
var currentProject = 0;
var projects; // Przenieś deklarację zmiennej na poziom globalny

// Funkcja do zmiany projektu w karuzeli
function changeProject(direction) {
    // Znajdź wszystkie elementy z klasą "project-card"
    projects = document.querySelectorAll('.project-card'); // Usuń 'var' przed 'projects'

    // Ukryj aktualny projekt
    projects[currentProject].classList.add('hidden');

    // Zmień aktualny projekt zgodnie z kierunkiem
    currentProject += direction;

    // Sprawdź, czy jesteśmy na krańcu karuzeli, jeśli tak, przejdź na przeciwną stronę
    if (currentProject < 0) {
        currentProject = projects.length - 1;
    } else if (currentProject >= projects.length) {
        currentProject = 0;
    }

    // Pokaż nowy aktualny projekt
    projects[currentProject].classList.remove('hidden');

    // Aktywuj kropkę dla aktualnego projektu
    updateDots();
}

// Funkcja do aktualizowania kropek
function updateDots() {
    // Znajdź wszystkie kropki
    var dotsContainer = document.querySelector('.project-dots');
    dotsContainer.innerHTML = '';

    // Dodaj kropki do kontenera
    for (var i = 0; i < projects.length; i++) {
        var dot = document.createElement('div');
        dot.classList.add('project-dot');
        dot.setAttribute('data-project-index', i);
        dot.onclick = function () {
            var index = parseInt(this.getAttribute('data-project-index'));
            showProject(index);
        };
        dotsContainer.appendChild(dot);
    }

    // Aktywuj kropkę dla aktualnego projektu
    dotsContainer.children[currentProject].classList.add('active-dot');
}

// Funkcja do pokazania konkretnego projektu po kliknięciu na kropkę
function showProject(index) {
    // Znajdź wszystkie elementy z klasą "project-card"
    projects = document.querySelectorAll('.project-card'); // Usuń 'var' przed 'projects'

    // Ukryj aktualny projekt
    projects[currentProject].classList.add('hidden');

    // Ustaw aktualny projekt na kliknięty indeks
    currentProject = index;

    // Pokaż nowy aktualny projekt
    projects[currentProject].classList.remove('hidden');

    // Zaktualizuj kropki
    updateDots();
}

// Wywołaj funkcję do inicjalizacji kropek zaraz po załadowaniu strony
window.onload = function () {
    // Znajdź wszystkie elementy z klasą "project-card"
    projects = document.querySelectorAll('.project-card'); // Usuń 'var' przed 'projects'
    updateDots();
};
