(function($) {
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active')
                .closest('main.tabs').find('section.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        })
    })
})(jQuery)