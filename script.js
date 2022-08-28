const navbar = document.querySelector('.navbar');

window.addEventListener('scroll' , function(){

    if(window.scrollY>20){
        navbar.classList.add('sticky');
        console.log(window.screenY);
      }else{
          navbar.classList.remove('sticky');
      }
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

