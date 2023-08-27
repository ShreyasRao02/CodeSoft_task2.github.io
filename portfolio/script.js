/*=================Menu icon navbar=============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=================Scroll Scetion active link=============*/


window.onscroll = () => { 
    
        
        
/*=================Sticky navbar=============*/


let header = document.querySelector('.header'); 
header.classList.toggle('sticky',window.scrollY > 100);

/*=================Remove Menu icon navbar when clicked=============*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};




// Get the container element
var btnContainer = document.getElementById("header");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("active");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




/*=================Dark mode=============*/


let darkModeIcon = document.querySelector('#darkmode-icon'); 
darkModeIcon.onclick=() => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};



/*=================Scroll reveal=============*/
ScrollReveal({ 
    reset: true,
    distance: '80px' ,
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .project-box, .contact-container, .about-content p, .about-content h3', { origin: 'bottom' });
ScrollReveal().reveal('.about-img img, .home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p ', { origin: 'right' });


