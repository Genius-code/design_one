
/*===== Scroll Menu =====*/
/*window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})*/
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

/*SCROLL WHY US*/
sr.reveal('.why-us',{}); 
sr.reveal('.card-body',{delay: 400}); 
sr.reveal('.icon',{delay: 400}); 
sr.reveal('.card-text',{delay: 400}); 

/*SCROLL Pricing*/
sr.reveal('.pricing',{}); 
sr.reveal('.pricing-item',{delay: 400}); 
sr.reveal('.pricing-deco',{delay: 400}); 

/*SCROLL Pricing*/
sr.reveal('.contact-us',{}); 
sr.reveal('.fields',{delay: 400}); 
sr.reveal('.col',{delay: 400});


anime({
    targets: '.card-body',
    delay: anime.stagger(600, {easing: 'easeOutQuad'})
  });