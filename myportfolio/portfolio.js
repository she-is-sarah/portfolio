document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});



// Typing effect for the intro
const typingText = "Hi, I'm Ebiesuwa Sarah.";
let index = 0;

function typeText() {
    const typingElement = document.getElementById('typing-text');
    if (index < typingText.length) {
        typingElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeText, 80); // Adjust typing speed here
    } else {
        // Trigger the scroll-in effect for the write-up once typing is done
        setTimeout(() => {
            document.getElementById('write-up').classList.add('write-up-visible');
        }, 600);
    }
}

window.onload = typeText;

// Scroll animation for write-up
window.addEventListener('scroll', function() {
    const writeUp = document.getElementById('write-up');
    const writeUpPosition = writeUp.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (writeUpPosition < screenPosition) {
        writeUp.classList.add('write-up-visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.aboutme .space, .aboutme .open, .cards-container .skill-card').forEach((el) => {
        observer.observe(el);
    });
});

function scrollToContact(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    // Use smooth scroll to the contact section
    const section = document.getElementById('contactme');
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the contact section
}