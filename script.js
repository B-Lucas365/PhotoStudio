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

function changeHeaderWhenScroll(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}


/*slider testimonials*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767:{
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
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

const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){
    if (window.scrollY > 560){
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}


const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 //divide o tamanho da tela em 8 pedaços, e pege 4 desses pedaços e soma com o deslocamento do Y da página
  
    for(const section of sections){
      const sectionTop = section.offsetTop //pega o deslocamento do topo da seção
      const sectionHeight = section.offsetHeight //pega o tamanho da seção
      const sectionId = section.getAttribute('id') //pega o atributo 'id' da seção
  
      const checkpointStart = checkpoint >= sectionTop //verifica se o checkpoint é maior ou igual ao topo da seção
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight //verifica se o checkpoint é menor ou igual ao topo da seção + o tamanho da seção (tamanho total da seção)
  
      if(checkpointStart && checkpointEnd){ //enquanto estiver dentro de uma seção
        document
          .querySelector('nav ul li a[href*=' +sectionId+']')
          .classList.add('active')
      }else{
        document
          .querySelector('nav ul li a[href*=' +sectionId+']')
          .classList.remove('active')
      }
    }
  }

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})