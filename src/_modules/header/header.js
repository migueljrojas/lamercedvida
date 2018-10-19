'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    $(function() {
        $(window).scroll(function() {
           var scroll = $(window).scrollTop();

           if (scroll >= 100) {
               header.removeClass('-ontop');
           } else {
               header.addClass('-ontop');
           }
        });
    });
};

module.exports = Header;
