let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-close-fill');
    menu.classList.toggle('ri-menu-line');
    navbar.classList.toggle('active');
};
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
window.onscroll = () => {
    menu.classList.remove('ri-close-fill');
    menu.classList.add('ri-menu-line');
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

let search = document.querySelector('#search-icon');
let close = document.querySelector('#close');
let searchForm = document.querySelector('#search-form');

search.onclick = () => {
    searchForm.classList.toggle('active');
};

close.onclick = () => {
    searchForm.classList.remove('active');
};

var swiper = new Swiper(".home-slider ", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
var swiper = new Swiper(".review-slider ", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints:{
      0:{
            slidesPerView:1,
      },
      640:{
            slidesPerView:2,
      },
      768:{
            slidesPerView:2,
      },
      1024:{
            slidesPerView:3,
      },
    },
  });
