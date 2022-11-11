const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');
const bars = document.querySelectorAll('.bar');

navToggle.addEventListener('click', function() {
    nav.classList.toggle('change');
    bars.forEach(bar => {
        bar.classList.toggle('change');
    })
    if (nav.classList.contains('change')) {
        navToggle.style.position = 'fixed';
    } else {
        navToggle.style.position = 'absolute';
    }
});