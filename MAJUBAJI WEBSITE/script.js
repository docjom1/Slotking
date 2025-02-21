/* ============================
    GLOBAL VARIABLES & HELPERS
============================ */

// DOM Ready Helper
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCasinoSorting();
    initSmoothScroll();
    initNewsletterForm();
    initResponsiveNavToggle();
});

/* ============================
    NAVIGATION HIGHLIGHT
============================ */
function initNavigation() {
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
}

/* ============================
    CASINO GRID SORTING
============================ */
function initCasinoSorting() {
    const sortDropdown = document.getElementById('sortOptions');
    const casinoGrid = document.getElementById('casinoGrid');
    const casinoCards = Array.from(casinoGrid.children);

    sortDropdown.addEventListener('change', function () {
        const sortValue = this.value;

        let sortedCards;
        if (sortValue === 'highest') {
            sortedCards = casinoCards.sort((a, b) => b.dataset.rating - a.dataset.rating);
        } else if (sortValue === 'lowest') {
            sortedCards = casinoCards.sort((a, b) => a.dataset.rating - b.dataset.rating);
        } else if (sortValue === 'newest') {
            sortedCards = casinoCards; // Assuming latest casinos are already in order
        }

        // Clear and re-append sorted cards
        casinoGrid.innerHTML = '';
        sortedCards.forEach(card => casinoGrid.appendChild(card));
    });
}

/* ============================
    SMOOTH SCROLLING FOR TOC
============================ */
function initSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc a');

    tocLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth scroll
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });

            // Highlight active TOC link
            tocLinks.forEach(toc => toc.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/* ============================
    NEWSLETTER FORM VALIDATION
============================ */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();

        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate successful submission
        alert('Thank you for subscribing!');
        emailInput.value = '';
    });
}

function validateEmail(email) {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ============================
    RESPONSIVE NAVIGATION TOGGLE
============================ */
function initResponsiveNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navigation = document.querySelector('.navigation ul');

    if (!navToggle || !navigation) return;

    navToggle.addEventListener('click', () => {
        navigation.classList.toggle('show');
    });
}

/* ============================
    SCROLL TO TOP BUTTON
============================ */
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ============================
    CASINO CARD FILTER BUTTON
============================ */
const filterBtn = document.querySelector('.filter-btn');
if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        alert('Filter feature coming soon!');
    });
}
