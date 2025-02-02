/* script.js */

document.querySelectorAll('a.scroll-down, nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:rohitsurya9939@gmail.com?subject=Contact from ${firstName} ${lastName}&body=
    Email: ${email}%0APhone: ${phone}%0A%0A${message}`;
    
    window.location.href = mailtoLink;
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".full-page");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
