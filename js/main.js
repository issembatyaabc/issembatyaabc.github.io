// DOM Elements
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Scroll Event for Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Project Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show loading state
        const submitButton = contactForm.querySelector('button');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Prepare EmailJS parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };
        
        // Send email using EmailJS
        emailjs.send('service_id', 'template_id', templateParams, 'user_id')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                const formGroups = document.querySelectorAll('.form-group');
                formGroups.forEach(group => group.style.display = 'none');
                
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
                `;
                
                contactForm.appendChild(successMessage);
                submitButton.style.display = 'none';
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    formGroups.forEach(group => group.style.display = 'block');
                    submitButton.style.display = 'block';
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    successMessage.remove();
                    contactForm.reset();
                }, 5000);
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.classList.add('error-message');
                errorMessage.innerHTML = `
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>Message Failed to Send</h3>
                    <p>Sorry, there was an error sending your message. Please try again later.</p>
                `;
                
                contactForm.appendChild(errorMessage);
                
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorMessage.remove();
                }, 5000);
            });
    });
}

// Typing Animation for Hero Section
const typingElement = document.querySelector('.hero h2');
const originalText = typingElement.textContent;
typingElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        typingElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });
});
