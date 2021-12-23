/*toggle menu*/ 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/*click itens do menu*/
 const links = document.querySelectorAll('nav ul li a')

 for(const link of links){
     link.addEventListener('click', function(){
        nav.classList.remove('show')
     })
     
 }


 /* sombra header*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})


/*slider testimonials*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,

})

/*scrollreveal*/

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    reset: true,
})

scrollReveal.reveal(
    `#home .image, #home.text, 
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links, 
    footer .brand, footer .social`, {interval:100})
        

/*===========back-to-top====================*/

const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if (window.scrollY > 560){
        backToTop.classList.add('show')
    }else {
        backToTop.classList.remove('show')
    }
})