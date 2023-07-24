if(document.querySelector('.carousel__inner') != null){
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        controls: false,
        nav: false
    });
    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev'); 
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next'); 
    });
}
const hamburger = document.querySelector('.header__hamburger');
const mainMenu = document.querySelector('.menu');
hamburger.addEventListener('click', function(){
    mainMenu.classList.toggle('active');
});