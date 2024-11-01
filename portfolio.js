document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});



// Typing effect for the intro

window.onload = typeText;
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
        }, 1000);
    }
}

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


// Loader and content handling
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    
    // Hide preloader and show content after 5 seconds
    setTimeout(() => {
        preloader.classList.add('hide');
        content.classList.add('show');
        
        // Start typing animation after loader fades out
        setTimeout(() => {
            preloader.style.display = 'none';
            // Reset and start typing animation
            index = 0;
            document.getElementById('typing-text').innerHTML = '';
            typeText();
        }, 500);
        
    }, 2000); // 5000ms = 5 seconds
});



async function handleSubmit(event) {
    event.preventDefault();
    
    const submitButton = document.getElementById('send');
    submitButton.disabled = true;
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://mail-api.isaac0yen.com/send_mail/ayopelumi4african@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            const error = await response.json();
            throw new Error(error.error || 'Failed to send message');
        }
    } catch (error) {
        alert(error.message);
    } finally {
        submitButton.disabled = false;
    }
}