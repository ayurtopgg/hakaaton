$('.arcicle__slider').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    adaptiveHeight: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 787,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


function left(){
    document.querySelector('.slider__img2').className = "slider__img1"
    document.querySelector('.slider__main').className = "slider__img2"
    document.querySelector('.slider__img1').className = "slider__img4"
    document.querySelector('.slider__img3').className = "slider__main"
    document.querySelector('.slider__img4').className = "slider__img3"
}
function getId(id) {
    return document.getElementById(id);
  }

function getRandomInt(max) {
    return toString(Math.floor(Math.random() * max)) 
  }

console.log(getRandomInt(32))
function meri() {
    for (let i = 0; i < 7; i++) {
        getId(getRandomInt(32)).style.color = 'green'
    }
    
}
meri()
document.getElementById(16).style.color = 'green'