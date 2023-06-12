const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');
const bars = document.querySelectorAll('.bar');
const themeToggle = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const topOfPage = document.querySelector('.top-of-page');

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

document.addEventListener('click', (e) => {
    if (e.target.id !== 'nav' && e.target.id !== 'mobile-nav-toggle' && e.target.id !== 'bar-1' && e.target.id !== 'bar-2' && e.target.id !== 'bar-3' && e.target.id !== 'ul') {
        nav.classList.remove('change');
        bars.forEach(bar => {
            bar.classList.remove('change');
        })
        navToggle.style.position = 'absolute';
    };
});


themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark');
})

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled > 300) {
        topOfPage.style.display = 'grid';
    }
    if (scrolled < 300) {
        topOfPage.style.display = 'none';
    } 
});