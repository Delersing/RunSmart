$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/leftArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/rightArrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    //******
    // неоптимиизированная версия вызова и скрытия формы
    // $('.catalog__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog__contents').eq(i).toggleClass('catalog__contents_active')
    //         $('.catalog__list').eq(i).toggleClass('catalog__list_active')
    //     })
    // })
    // $('.catalog__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog__contents').eq(i).toggleClass('catalog__contents_active')
    //         $('.catalog__list').eq(i).toggleClass('catalog__list_active')
    //     })
    // })
    //******
    // оптимиизированная версия вызова и скрытия формы
    function toogleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog__contents').eq(i).toggleClass('catalog__contents_active');
                $('.catalog__list').eq(i).toggleClass('catalog__list_active');
            });
        });
    };
    toogleSlide('.catalog__link');
    toogleSlide('.catalog__back');


    //modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.catalog__button__mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
});