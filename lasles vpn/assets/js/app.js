$('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.buttonprev',
    nextArrow: '.buttonnxt',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,

        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        }
    },

    ]
});


// let icon = document.querySelector(".icon");
// let page = document.querySelector(".mobile-view");
// icon.addEventListener("click", function () {
//     if (page.classList !== document.querySelector("right-0")) {
//         page.classList.toggle("right-0");
//     }
// })
