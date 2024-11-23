document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const message = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            date: new Date().toISOString()
        };

        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(message);
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
});
