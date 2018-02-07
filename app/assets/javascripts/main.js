//$(document).on('turbolinks:load', function() {
$(document).ready(function () {

    //init semantic sidebar
    var navbar_button = $('#nav-menu-button');
    navbar_button.click(function () {
        $('.ui.sidebar').sidebar('toggle');
    });

    //init semantic cube animation
    var social_links = $('.ui.shape');
    social_links.shape();

    function enterAnimate(elem) {
        $(elem).shape('flip down');
    }

    function leaveAnimate(elem) {
        $(elem).shape('flip up')
    }

    social_links.hover(function (ev) {
        ev.stopPropagation();
        var elem = ev.target.closest('.ui.shape');
        ev.type === 'mouseenter' ? enterAnimate(elem) : leaveAnimate(elem);
    });
});
