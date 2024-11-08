$(document).ready(function () {

    hide_categories()

    $('header .menu > li.has-child').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');

        content = $(this).find('ul')

        $('header .menu > li.has-child ul').css("max-height", 0);

        content.css("max-height", content.prop("scrollHeight"));
        $('header').addClass('opened')
    })

    $('header').on('mouseout', function () {
        $('header .menu > li').removeClass('active');
        $('header .menu > li.has-child ul').css("max-height", 0);
        $('header').removeClass('opened')
    })

    $(".animated").on('mouseover', function(){
        content = $(this).find('.hidden')
        content.css("max-height", content.prop("scrollHeight"))
    })
    $(".animated").on('mouseout', function(){
        content = $(this).find('.hidden')
        content.css("max-height", 0);
    })

    $(".product_card").on('mouseover', function(){
        content = $(this).find('.hidden')
        preview = $(this).find('.preview')
        content.css("max-height", content.prop("scrollHeight"))
        preview.css("margin-top", -content.prop("scrollHeight"))
    })
    $(".product_card").on('mouseout', function(){
        content = $(this).find('.hidden')
        preview = $(this).find('.preview')
        content.css("max-height", 0)
        preview.css("margin-top", 0)
    })

    //Show more cards
    $(".category_icons .show_more").on("click", function(){
        $(this).toggleClass('active')
        content = $(this).siblings('.list')
        card = content.children()
        card_height = card.height() + ( card.outerHeight(true) - card.height() )
        content.css("max-height", card_height)
        if( content.height() > card_height ){
            content.css("max-height", card_height )
        } else {
            content.css("max-height", content.prop("scrollHeight"))
        }
    })

    //Hide index categories
    function hide_categories(){
        content = $('.category_icons .list')
        card = content.children()
        card_height = card.height() + ( card.outerHeight(true) - card.height() )
        content.css("max-height", card_height)
    }

    // Category view
    $('svg.two').on('click', function(){
        $(this).addClass('active')
        $('svg.four').removeClass('active')
        $('.products .list').addClass('two')
    })
    $('svg.four').on('click', function(){
        $(this).addClass('active')
        $('svg.two').removeClass('active')
        $('.products .list').removeClass('two')
    })

    //Tabs
    $('.tabs_caption').on('click', 'span:not(.active_tab)', function(){
        $(this)
            .addClass('active_tab').siblings().removeClass('active_tab')
            .closest('.tabs').find('.tab_content').removeClass('active_tab').eq($(this).index()).addClass('active_tab');
    });

    //Menu Popup
    $('.menu_icon').on('click', function(){
        $('.menu_popup').addClass('show')
        $('body').addClass('fixed')
    })

    //Popups
    $('svg.cross').on('click', function(){
        $('.popup.show').removeClass('show')
        $('.menu_popup').removeClass('show')
        $('body').removeClass('fixed')
    })

    $('.button.order').on('click', function(){
        $('.popup.order').addClass('show')
    })

    $('.callback_button').on('click', function(){
        $('.popup.callback').addClass('show')
        $('.popup.callback').find('h3').text( jQuery.trim( $(this).text() ) )
        $('.popup.callback').find('input[type=submit]').attr('value', jQuery.trim( $(this).text() ) )
    })

    $('.image_group').on('click', '.previews .preview', function(){
        $(this).addClass('active').siblings().removeClass('active')
        background = $(this).css('background-image')
        background = background.replace('url(','').replace(')','').replace(/\"/gi, "")

        main = $(this).parent().siblings('.main')
        main.css('background-image', 'url('+background+')')
    })

    heightblock = $('.stage_card .hidden').prop("scrollHeight") + $('.stage_card').prop("scrollHeight") + 80
    $('.stage_card').css('height', heightblock )

    $(window).on('resize', function(){
        var heightblock = $('.stage_card .hidden').prop("scrollHeight") + 180
        $('.stage_card').css('height', heightblock )
    })
        
    

});