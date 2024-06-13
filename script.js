document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const age = form.age.value.trim();
    const gender = form.gender.value.trim();
    const locality = form.locality.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    if (name === '' || age === '' || gender === '' || locality === '' || phone === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!/^\d+$/.test(age) || age < 1) {
        alert('Please enter a valid age.');
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    form.reset();
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > navbarHeight && currentScroll > 0) {
        // Scroll down and the scroll position is below the navbar height and not at the top of the page
        navbar.classList.add('hidden');
    } else {
        // Scroll up or the scroll position is at or above the navbar height or at the top of the page
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
