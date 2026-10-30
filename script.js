// Interactive simulation for contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Message Sent Successfully! ✨';
        submitBtn.style.backgroundColor = '#16a34a';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            contactForm.reset();
        }, 3500);
    });
}

console.log("Joseph Virgil S. Calo's Portfolio loaded successfully!");