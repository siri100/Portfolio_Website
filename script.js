const navbar = document.querySelector('.navbar');
const abtBtn = document.querySelector('.about-btn');
const abtSection = document.querySelector('.about');
const achvBtn = document.querySelector('.achv');
const achvSection = document.querySelector('.services');
const skillsBtn = document.querySelector('.skills-btn');
const skillsSection = document.querySelector('.skills');

window.addEventListener('scroll', function () {

    if (window.scrollY > 20) {
        navbar.classList.add('sticky');
        console.log(window.screenY);
    } else {
        navbar.classList.remove('sticky');
    }
})

//Typing animation

let typed = new Typed(".typing", {
    strings: ["QA Automation Engineer...", "Freelancer...", "Web Developer..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


// Button scrolling
abtBtn.addEventListener('click', function (e) {

    abtSection.scrollIntoView({ behavior: 'smooth' });
});
achvBtn.addEventListener('click', function (e) {

    achvSection.scrollIntoView({ behavior: 'smooth' });
});
skillsBtn.addEventListener('click', function (e) {

    skillsSection.scrollIntoView({ behavior: 'smooth' });
});


$(document).ready(function () {
    // $(window).scroll(function(){
    //     if(this.scrollY > 20){
    //         $('.navbar').addClass("sticky");
    //     }else{
    //         $('.navbar').removeClass("sticky");
    //     }
    // })
    //toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
});







