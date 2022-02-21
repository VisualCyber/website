// Reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1500,
    reset: true
});

ScrollReveal().reveal('.home__title, .img__foguete, .develop_apps__text, .design__image, .social_media__text, .we_are__text', { origin: 'left' });
ScrollReveal().reveal('.home__img, .bussiners__text, .design__text, .social_media__image, .img__we_are_cyber, .develop_apps__image', { origin: 'right' });
ScrollReveal().reveal('.home__img, .design__image, .develop_apps__image, .img__we_are_cyber, .social_media__image', { interval: 100 });