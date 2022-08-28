const navbar = document.querySelector('.navbar');

window.addEventListener('scroll' , function(){

    if(window.scrollY>20){
        navbar.classList.add('sticky');
        console.log(window.screenY);
      }else{
          navbar.classList.remove('sticky');
      }
})

//Typing animation

let typed = new Typed(".typing" ,{
    strings : ["QA Automation Engineer..." , "Freelancer..." , "Web Developer..."],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
  })




$(document).ready(function(){
    // $(window).scroll(function(){
    //     if(this.scrollY > 20){
    //         $('.navbar').addClass("sticky");
    //     }else{
    //         $('.navbar').removeClass("sticky");
    //     }
    // })
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
});

