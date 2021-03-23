// =====================================Menu mobile=======================================================

const _mobilMenu = document.getElementById('mobil_menu'),
    _mobilMenuLinks = _mobilMenu.querySelectorAll('a'),
    _btnToggleTheme = document.getElementById('btn_toggle_theme');

window.addEventListener('click', e => {
    if (e.target.matches('#toggle_mobil_menu')) _mobilMenu.classList.toggle('menu-active');

    if (e.target === _btnToggleTheme) _mobilMenu.classList.remove('menu-active');

    _mobilMenuLinks.forEach(i => {
        if (e.target === i) _mobilMenu.classList.remove('menu-active');
    });

    if (e.target.matches('main *')) _mobilMenu.classList.remove('menu-active');
});

// =====================================Btn scroll top=======================================================

const _html = document.documentElement,
    _btnUp = document.getElementById('btn_up');

function handlerScroll() {
    const scrollTotal = _html.scrollHeight - _html.clientHeight;

    if (_html.scrollTop / scrollTotal > 0.5) {
        _btnUp.classList.add('visible');
    } else {
        _btnUp.classList.remove('visible');
    };
    
    if (_html.scrollTop / scrollTotal > 0.02) {
        document.querySelector('.header-main').classList.add('shadow');
    } else {
        document.querySelector('.header-main').classList.remove('shadow');
    };
};

function scrollToTop() {
    _html.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', handlerScroll);
_btnUp.addEventListener('click', scrollToTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

/*==================== Selection theme light/dark ====================*/

_btnToggleTheme.addEventListener('click', e => {

    e.target.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-theme');

    if (localStorage.getItem('theme')) {
        localStorage.removeItem('theme');
    }

    else {
        localStorage.setItem('theme', 'dark-theme');
    };
});

window.addEventListener('DOMContentLoaded', e => {
    document.body.classList.add(localStorage.getItem('theme'));

    if (localStorage.getItem('theme')) _btnToggleTheme.classList.add('bx-sun');
});