/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== LIKE BUTTON COUNTER =====*/
document.addEventListener('DOMContentLoaded', function () {
    let likeButton = document.getElementById('likeButton');
    let likeCounter = document.getElementById('likeCounter');

    // Retrieve the stored counter value from localStorage, or start with 0 if not present
    let count = localStorage.getItem('likeCounter') ? parseInt(localStorage.getItem('likeCounter')) : 0;

    // Display the current count on page load
    likeCounter.textContent = count;

    likeButton.addEventListener('click', function () {
        count += 1; // Increment the counter
        likeCounter.textContent = count; // Update the counter display

        // Save the updated counter value in localStorage
        localStorage.setItem('likeCounter', count);
    });
});

/*===== COFFEE BUTTON COUNTER =====*/
document.addEventListener('DOMContentLoaded', function () {
    let coffeeButton = document.getElementById('coffeeButton');
    let coffeeCounter = document.getElementById('coffeeCounter');

    // Retrieve the stored counter value from localStorage, or start with 0 if not present
    let count = localStorage.getItem('coffeeCounter') ? parseInt(localStorage.getItem('coffeeCounter')) : 0;

    // Display the current count on page load
    coffeeCounter.textContent = count;

    coffeeButton.addEventListener('click', function () {
        count += 1; // Increment the counter
        coffeeCounter.textContent = count; // Update the counter display

        // Save the updated counter value in localStorage
        localStorage.setItem('coffeeCounter', count);
    });
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
    // reset: true
});

/*===== WORK ITEM CLICK HANDLING =====*/
document.querySelectorAll('.work__img').forEach(item => {
    item.addEventListener('click', function (event) {
        //event.preventDefault(); // Prevent default action

        // Navigate to the href of the clicked item
        const href = this.parentNode.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('giphy-iframe1');
    const loadingText = document.getElementById('loading-text1');

    iframe.onload = function() {
        loadingText.style.display = 'none';
        iframe.style.display = 'block';
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('giphy-iframe2');
    const loadingText = document.getElementById('loading-text2');

    iframe.onload = function() {
        loadingText.style.display = 'none';
        iframe.style.display = 'block';
    };
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 60 }); 
sr.reveal('.home__social-icon', { interval: 100 }); 
sr.reveal('.skills__data, .work__img, .cert__img, .contact__input', { interval: 50 });


