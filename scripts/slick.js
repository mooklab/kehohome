$(document).ready(function () {

    $('.banner .carousel').slick({
        dots: true,
        appendArrows: $('.banner_navigation .container'),
        prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
        nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
        appendDots: $('.banner_navigation .container .dots'),
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: function() {
            return '<svg width="32" height="32"><circle class="outer" cx="16" cy="16" r="15" /></svg>';
        }
    })

    $('.product_gallery .list').slick({
        dots: true,
        appendArrows: $('.product_gallery .navigation'),
        prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
        nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
        appendDots: $('.product_gallery .navigation .dots'),
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: function() {
            return '<svg width="32" height="32"><circle class="outer" cx="16" cy="16" r="15" /></svg>';
        }
    })

    $('.project_card').each(
        function(){
            var slider = $(this).find('.project_gallery')
            slider.find('.list').slick({
                dots: true,
                appendArrows: slider.find('.navigation'),
                prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
                nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
                appendDots: slider.find('.navigation .dots'),
                autoplay: true,
                autoplaySpeed: 5000,
                customPaging: function() {
                    return '<svg width="32" height="32"><circle class="outer" cx="16" cy="16" r="15" /></svg>';
                }
            })
        }
    )

    $('.page_gallery .gallery').slick({
        dots: true,
        appendArrows: $('.page_gallery .navigation'),
        prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
        nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
        appendDots: $('.page_gallery .navigation .dots'),
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: function() {
            return '<svg width="32" height="32"><circle class="outer" cx="16" cy="16" r="15" /></svg>';
        }
    })

    $('.category_products .list').slick({
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
        nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
        dots: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.products .carousel').slick({
        dots: false,
        arrows: false
    })

    $('.products .tabs_caption > *').click( function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        var slideIndex = $(this).index()
        $('.products .carousel').slick('slickGoTo', parseInt(slideIndex))
    })

    $('.products .carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var NextSlideDom = $(slick.$slides.get(nextSlide)),
            slide_index = NextSlideDom.index() - 1
        current_tab = $('.products .tabs_caption > *:eq('+ slide_index +')')
        current_tab.addClass('active')
        current_tab.siblings().removeClass('active')
    })

    $('.advantages .carousel').slick({
        dots: false,
        appendArrows: $('.advantages .navigation'),
        prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
        nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
    })

    $('.advantages .carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var NextSlideDom = $(slick.$slides.get(nextSlide)),
            slide_index = NextSlideDom.index() - 1
        current_tab = $('.advantages .tabs_caption > *:eq('+ slide_index +')')
        current_tab.addClass('active')
        current_tab.siblings().removeClass('active')
    })

    $('.advantages .tabs_caption > *').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        var slideIndex = $(this).index()
        $('.advantages .carousel').slick('slickGoTo', parseInt(slideIndex))
    })

    $('.equipment .list').slick({
        slidesToShow: 4,
        arrows: true,
        appendArrows: $('.equipment .navigation'),
        prevArrow: '<svg class="left_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="0" y1="10" x2="30" y2="10" stroke="black" stroke-width="1.5px"/><line x1="0" y1="10" x2="10" y2="3" stroke="black" stroke-width="1.5px"/></g></svg>',
        nextArrow: '<svg class="right_arrow" width="60" height="20" viewBox="0 0 60 20"><g><line x1="30" y1="10" x2="59" y2="10" stroke="black" stroke-width="1.5px"/><line x1="59" y1="10" x2="50" y2="17" stroke="black" stroke-width="1.5px"/></g></svg>',
        dots: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
});